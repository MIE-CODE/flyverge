"use client";
import { NavBar } from "@/app/components/nav/navbar/navbar.component";
import { NotificationModal } from "@/app/components/notification-modal/notification.modal";
import { useLayoutPageLogic } from "@/helpers/hooks/use-layout-page-logic.hook";
import { useAppSelector } from "@/redux/hooks";
import { PropsWithChildren } from "react";
import { FaBars, FaBell, FaChevronRight, FaMoon, FaSun } from "react-icons/fa";

export const Layout = (props: PropsWithChildren) => {
  const { logout } = useLayoutPageLogic();
  const user = useAppSelector((state) => state.user);
  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-8 border-b border-slate-500 px-6 py-6  md:px-5 md:py-3 w-full  fixed top-0 left-0  z-50 bg-background shadow-[_0px_1px_10px_#333]">
        <FaBars size={19} className="md:hidden" />
        <p className="text-bold text-blue-300 text-2xl w-[230px] hidden md:block">
          Flyverge
        </p>
        <div className="md:ml-10 w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-sm text-slate-50 font-bold">Flights</p>
            <span className="text-slate-300">
              <FaChevronRight size={12} />
            </span>
            <p className="text-sm text-gray-300">Create</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaSun className="text-yellow-300 cursor-pointer" size={19} />
            <NotificationModal />
          </div>
        </div>
      </div>

      <div className="flex">
        <NavBar visible />
        <div className=" flex  w-full pt-[76px] px-6 pb-4  ">
          <div className="w-full border border-slate-500 rounded-lg p-5 ">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
