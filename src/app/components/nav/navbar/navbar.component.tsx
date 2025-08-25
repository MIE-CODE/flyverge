import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavList } from "../navlist/navlist.component";
import Link from "next/link";
import { useLayoutPageLogic } from "@/helpers/hooks/use-layout-page-logic.hook";
import { useAppSelector } from "@/redux/hooks";
import { Avatar } from "../../avatar/avatar.component";
import { WiDayCloudy } from "react-icons/wi";

export const NavBar = (props: { visible: boolean }) => {
  const { logout, user } = useLayoutPageLogic();
  const divRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLSpanElement | null>(null);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        toggleRef.current &&
        divRef.current &&
        !divRef.current.contains(e.target as Node) &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setPopup(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className="w-full relative transition-all duration-300 overflow-hidden h-svh hidden lg:block"
        style={{ maxWidth: props.visible ? "230px" : "0px" }}
      />

      <div
        className={[
          "w-full lg:flex flex-col fixed left-0 top-0 pt-[40px] transition-all duration-300  inset-y-0 px-2 pb-4 mt-[57px]  hidden",
          props.visible
            ? "border-slate-500 border-r block z-10 -translate-x-0"
            : "-translate-x-[100%]",
        ].join(" ")}
        style={{ maxWidth: props.visible ? "230px" : "0px" }}
      >
        <div className="flex flex-col">
          <p className=" md:hidden">Logo</p>
          <NavList />
        </div>
        <div className=" flex gap-2 items-center mt-auto  cursor-pointer ">
          {/* <Avatar
            name={user?.name}
            className="relative w-full max-w-[35px] h-[35px] "
          /> */}
          <div className="relative w-full ">
            <div className="flex items-center justify-between gap-3">
              <div className=" flex flex-col">
                <p className="text-sm font-semibold">
                  {user?.name ?? undefined}
                </p>
                <p className="text-xs ">{user?.email ?? undefined}</p>
              </div>
              <span
                ref={toggleRef}
                onClick={() => {
                  setPopup((prev) => !prev);
                }}
                className=" p-2 hover:bg-slate-100/25 transition-colors duration-150"
              >
                <FaChevronDown
                  className={[
                    "transition duration-150 ",
                    popup ? "-rotate-180" : "rotate-0",
                  ].join(" ")}
                  size={12}
                />
              </span>
            </div>

            <div
              ref={divRef}
              className={[
                "absolute left-[100%] top-[0] translate-x-4 -translate-y-[80%] w-full rounded border border-slate-500 bg-background  z-50 shadow-[0px_3px_13px_#333] p-2 transition-all duration-300 ease-in",
                !popup && "popup",
              ].join(" ")}
            >
              <div className="flex flex-col  gap-4">
                <div className="flex flex-col justify-center items-center gap-2">
                  <Avatar
                    name={user?.name}
                    className="font-bold text-2xl mt-3 "
                  />

                  <p className="text-sm font-semibold">{user?.name}</p>
                </div>
                <div className=" flex flex-col gap-2 w-full">
                  <div className="h-[1px]  bg-slate-500 w-full" />
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex items-center gap-2 text-sm font-bold border border-slate-500 rounded px-2 py-1"
                      href="settings"
                      onClick={() => setPopup(false)}
                    >
                      <span>
                        <FaCog />
                      </span>
                      Settings
                    </Link>
                    <div
                      onClick={logout}
                      className=" flex items-center gap-2 text-sm font-bold border border-slate-500 rounded px-2 py-1"
                    >
                      <span>
                        <FaSignOutAlt />
                      </span>
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
