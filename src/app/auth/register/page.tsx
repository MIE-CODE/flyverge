"use client";
import { Input } from "@/app/components/inputs/input.components";
import { useFormik, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { signupValidationSchema } from "@/helpers/validation";
import { useSignUpLogic } from "@/helpers/hooks/use-sign-up-page-logic.hook";
import { Button } from "@/app/components/button/button.component";
import { AuthLayout } from "@/app/layouts/auth/auth-layout";

export default function Register() {
  const [retype, setRetype] = useState<string>("");
  const { initialValues, handleSubmit, err } = useSignUpLogic();

  return (
    <AuthLayout>
      <div className="max-w-[400px] w-full flex flex-col gap-2">
        {err && <p className="text-red-300 text-xs ">{err}</p>}
        <div className="w-full border border-slate-500  p-5">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signupValidationSchema}
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
                      label="Name"
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John Doe"
                      error={touched.name && errors.name}
                    />
                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john.doe@example.com"
                      label="Email"
                      error={touched.email && errors.email}
                    />
                    <Input
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="123John@2025"
                      error={touched.password && errors.password}
                    />
                    {/* <Input
                  label="Confirm Password"
                  value={retype ?? ""}
                  onChange={(e) => setRetype(e.target.value)}
                  type="password"
                  placeholder="123John@2025"
                  
                  error={
                    retype === values.password ? "" : "Password don't match"
                  }
                /> */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      spinner={isSubmitting}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>

          <p className="text-xs mt-5">
            Already have an account?{" "}
            <Link href="login" className="text-slate-200 underline ">
              login
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
