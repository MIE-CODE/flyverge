import { customFetch } from "@/utils/utils";

type LoginPayload = {
  email: string;
  password: string;
};
export default () => {
  return {
    login(payload: LoginPayload) {
      return customFetch("/auth/login", {
        method: "POST",
        data: JSON.stringify(payload),
      });
    },
    register(payload: { name: string; email: string; password: string }) {
      return customFetch("/auth/register", {
        method: "POST",
        data: JSON.stringify(payload),
      });
    },
  };
};
