import $api from "@/$api";
import { FormikHelpers } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "../cookies";
import { commitUser } from "@/redux/slices/user/user.slice";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";
export const useLoginLogic = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [err, setErr] = useState<string | null>(null);
  const initialValues = {
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
      const { data, error } = await $api.auth.login({ ...values });
      if (error) setErr(error.message);
      if (data) {
        dispatch(commitUser(data.user));
        router.push("/dashboard");
        Cookies.set("auth_token", data.token, { expires: 60 * 60 * 24 });
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
