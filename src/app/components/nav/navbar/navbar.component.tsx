import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavList } from "../navlist/navlist.component";
import Link from "next/link";
import { useLayoutPageLogic } from "@/helpers/hooks/use-layout-page-logic.hook";
import { Avatar } from "../../avatar/avatar.component";
import { motion } from "framer-motion";

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
      {/* Overlay for small screens */}
      {props.visible && (
        <motion.div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/40 md:hidden" />
      )}

      {/* Sidebar */}
      <motion.div
        className={[
          "w-[230px] md:w-[230px] flex flex-col fixed  left-0 top-0 pt-[40px] z-40 bg-background transition-transform duration-300 inset-y-0 px-2 pb-4 mt-[57px]",
          props.visible
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        <div className="flex flex-col gap-3">
          <p className="md:hidden ml-4 font-bold text-blue-300 text-2xl">
            Flyverge
          </p>
          <NavList />
        </div>

        {/* User section */}
        <div className="flex gap-2 items-center mt-auto self-baseline cursor-pointer">
          <div className="relative w-full">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <p className="text-sm font-semibold">{user?.name ?? "User"}</p>
                <p className="text-xs">{user?.email ?? "user@email.com"}</p>
              </div>
              <span
                ref={toggleRef}
                onClick={() => setPopup((prev) => !prev)}
                className="p-2 hover:bg-slate-100/25 transition-colors duration-150"
              >
                <FaChevronDown
                  className={`transition duration-150 ${
                    popup ? "-rotate-180" : "rotate-0"
                  }`}
                  size={12}
                />
              </span>
            </div>

            {/* Dropdown */}
            <div
              ref={divRef}
              className={[
                "absolute md:left-[100%] top-[0] -translate-y-[100%] md:translate-x-4 md:-translate-y-[80%] w-full rounded border border-slate-500 bg-background z-50 shadow-[0px_3px_13px_#333] p-2 transition-all duration-300 ease-in",
                !popup && "hidden",
              ].join(" ")}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-center items-center gap-2">
                  <Avatar
                    name={user?.name}
                    className="font-bold text-2xl mt-3"
                  />
                  <p className="text-sm font-semibold">{user?.name}</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-[1px] bg-slate-500 w-full" />
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex items-center gap-2 text-sm font-bold border border-slate-500 rounded px-2 py-1"
                      href="settings"
                      onClick={() => setPopup(false)}
                    >
                      <FaCog />
                      Settings
                    </Link>
                    <div
                      onClick={logout}
                      className="flex items-center gap-2 text-sm font-bold border border-slate-500 rounded px-2 py-1"
                    >
                      <FaSignOutAlt />
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
