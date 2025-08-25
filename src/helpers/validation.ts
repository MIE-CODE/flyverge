import * as Yup from "yup";

export const format = {
  email: Yup.string().email("Invalid email").required("Email is Required"),
  name: Yup.string().min(2, "Too short").required("Name is Required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    ),
};

export const loginValidationSchema = Yup.object({
  email: format.email,
  password: format.password,
});
export const signupValidationSchema = Yup.object({
  name: format.name,
  email: format.email,
  password: format.password,
});
