import { PropsWithChildren } from "react";

export const AuthLayout = (prps: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center  min-h-screen">
      {prps.children}
    </div>
  );
};
