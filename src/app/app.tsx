"use client";

import { getCookie, removeCookie } from "@/helpers/cookies";
import { useAppSelector } from "@/redux/hooks";

import { useEffect } from "react";

export default function MyApp() {
  useEffect(() => console.log(getCookie("auth-user")));
  return (
    <div
      onClick={() => removeCookie("auth-user")}
      className=" font-[family-name:var(--font-geist-sans)]"
    >
      hello world
    </div>
  );
}
