"use client";
import { Input } from "@/app/components/inputs/input.components";
import Link from "next/link";
import { Formik } from "formik";
import { FormEvent, useState } from "react";
import { loginValidationSchema } from "@/helpers/validation";
import { useLoginLogic } from "@/helpers/hooks/use-login-page-logic.hook";
import { Button } from "@/app/components/button/button.component";
import { AuthLayout } from "@/app/layouts/auth/auth-layout";

export default function Login() {
  const { initialValues, handleSubmit, err } = useLoginLogic();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <AuthLayout>
      <div className="max-w-[400px] w-full flex flex-col gap-2">
        {err && <p className="text-red-300 text-xs ">{err}</p>}
        <div className="w-full border border-slate-500  p-5">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={loginValidationSchema}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3">
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="john.doe@example.com"
                      label="Email"
                      error={touched.email && errors.email}
                    />
                    <Input
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                      label="Password"
                      type="password"
                      placeholder="123John@2025"
                      error={touched.password && errors.password}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      spinner={isSubmitting}
                    >
                      Login
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>

          <p className="text-xs mt-5">
            Don&apos;t have an account?{" "}
            <Link href="register" className="text-slate-200 underline ">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
