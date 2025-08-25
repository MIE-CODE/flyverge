"use client";
import { NavBar } from "@/app/components/nav/navbar/navbar.component";
import { NotificationModal } from "@/app/components/notification-modal/notification.modal";
import { useLayoutPageLogic } from "@/helpers/hooks/use-layout-page-logic.hook";
import { useAppSelector } from "@/redux/hooks";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { FaBars, FaBell, FaChevronRight, FaMoon, FaSun } from "react-icons/fa";

const BreadCrumb = () => {
  const route = useRouter();
  const path = usePathname();
  function formatPath() {
    return path
      .split("/")
      .map((segment, index, arr) => {
        if (index === 0) return null;
        if (index === arr.length - 1) {
          return (
            <p key={index} className="text-sm text-gray-300">
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </p>
          );
        }
        return (
          <div
            key={index}
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => route.push(`/${segment}`)}
          >
            <p className="text-sm text-slate-50 font-bold">{segment}</p>
            <span className="text-slate-300">
              <FaChevronRight size={12} />
            </span>
          </div>
        );
      })
      .filter(Boolean);
  }
  return <div>{formatPath()}</div>;
};
export const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useLayoutPageLogic();
  const user = useAppSelector((state) => state.user);
  if (!user) {
    return null;
  }
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-8 border-b border-slate-500 px-6 py-6  md:px-5 md:py-3 w-full  fixed top-0 left-0  z-50 bg-background shadow-[_0px_1px_10px_#333]">
        <FaBars size={19} className="lg:hidden" onClick={toggleSidebar} />
        <p className="text-bold text-blue-300 text-2xl w-[230px] hidden md:block">
          Flyverge
        </p>
        <div className="md:ml-10 w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <BreadCrumb />
          </div>
          <div className="flex gap-3 items-center">
            <FaSun className="text-yellow-300 cursor-pointer" size={19} />
            <NotificationModal />
          </div>
        </div>
      </div>

      <div className="flex">
        <NavBar visible={sidebarOpen} />
        <div className=" flex  w-full pt-[76px] px-6 pb-4  ">
          <div
            className={classNames(
              `flex-1 transition-all duration-300 w-full border border-slate-500 rounded-lg p-5 ${
                sidebarOpen ? "lg:ml-[230px]" : "lg:ml-[230px] md:ml-0"
              }`
            )}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
