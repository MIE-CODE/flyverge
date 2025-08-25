"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { logOut } from "@/redux/slices/user/user.slice";

export const useLayoutPageLogic = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (!user && !token) {
      router.push("/auth/login");
    }
  }, []);
  const handleLogout = () => {
    logOut(dispatch);
  };
  return { user, logout: handleLogout };
};
