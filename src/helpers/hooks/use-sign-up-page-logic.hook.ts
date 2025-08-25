import $api from "@/$api";
import { FormikHelpers } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { commitUser } from "@/redux/slices/user/user.slice";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";

export const useSignUpLogic = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [err, setErr] = useState<string | null>(null);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setErr(null);
      actions.setSubmitting(true);
      const { data, error } = await $api.auth.register({ ...values });
      if (error) {
        setErr(error.message);
      } else if (data?.email) {
        dispatch(commitUser(data));
        Cookies.set("auth_token", data.token, { expires: 60 * 60 * 24 });
        router.push("/");
      } else {
        setErr("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      actions.setSubmitting(false);
    }
  };
  return {
    initialValues,
    handleSubmit,
    err,
  };
};
