import $api from "@/$api";
import { useAuthContext } from "./useAuthContext";

export const useAuth = () => {
  async function login(params: any) {
    //  const { dispatch } = useAuthContext();
    const data = await $api.auth.login(params);
    const res = await data.json();
    console.log(res);
    //dispatch({ type: "LOGIN", payload: res });
    return res;
  }
  async function signup() {}

  return { login, signup };
};
