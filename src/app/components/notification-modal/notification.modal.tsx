"use client";
import classNames from "classnames";
import { useState } from "react";
import { FaBell } from "react-icons/fa";

export const NotificationModal = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative">
      <div
        className="relative cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      >
        <FaBell size={19} />
        <div className="flex justify-center items-center absolute w-3.5 h-3.5 -translate-y-1.5 translate-x-1.5 rounded-[50%] bg-[crimson] top-0 right-0">
          {" "}
          <p className="text-[10px] font-extrabold">3</p>
        </div>
      </div>

      <div
        className={classNames(
          "absolute top-[100%] -translate-x-[90%] translate-y-3   rounded border border-slate-500 bg-background  z-50 shadow-[0px_3px_13px_#333] p-2 transition duration-150 ease-linear",
          { "notification ": !toggle }
        )}
      >
        <p className="font-bold text-sm">Notification</p>
        <div className="w-[300px] h-[400px]"></div>
      </div>
    </div>
  );
};
