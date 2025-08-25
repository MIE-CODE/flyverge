import Link from "next/link";
import { Avatar } from "../avatar/avatar.component";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { useLayoutPageLogic } from "@/helpers/hooks/use-layout-page-logic.hook";

export const Popover = () => {
  const { logout, user } = useLayoutPageLogic();
  return (
    <div className=" absolute left-[100%] top-[0] translate-x-4 -translate-y-[80%] w-full rounded border border-slate-500 bg-background  z-50 shadow-[3px_6px_3px_#333] p-2">
      <div className="flex flex-col  gap-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <Avatar name={user?.name} className="font-bold text-2xl" />

          <p className="text-sm font-semibold">{user?.name}</p>
        </div>
        <div className=" flex flex-col gap-2 w-full">
          <div className="h-[1px]  bg-slate-500 w-full" />
          <div className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-2 text-sm font-bold border border-slate-500 rounded px-2 py-1"
              href="#"
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
  );
};
