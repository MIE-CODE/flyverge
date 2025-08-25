import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBookOpen,
  FaBriefcase,
  FaBullhorn,
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaPlusCircle,
  FaThLarge,
} from "react-icons/fa";

export const NavList = () => {
  const user = useAppSelector((state) => state.user);
  const router = usePathname();
  const links =
    user?.role === "admin"
      ? [
          { title: "Dashboard", path: "/dashboard", icon: <FaThLarge /> },
          { title: "Flights", path: "/flights", icon: <FaPlaneDeparture /> },
          {
            title: "New Flight",
            path: "/create_flight",
            icon: <FaPlusCircle />,
          },
        ]
      : [
          { title: "Dashboard", path: "/dashboard", icon: <FaThLarge /> },
          { title: "Explore", path: "/", icon: <FaMapMarkedAlt /> },
          { title: "Flights", path: "/flights", icon: <FaPlaneDeparture /> },
          { title: "My Bookings", path: "/bookings", icon: <FaBookOpen /> },
          { title: "News", path: "/news", icon: <FaBullhorn /> },
          { title: "Careers", path: "#", icon: <FaBriefcase /> },
        ];

  return (
    <div className="flex flex-col gap-2">
      {links.map((val, idx) => (
        <Link
          href={val.path}
          key={idx}
          className={[
            "flex items-center gap-4 hover:bg-slate-50/10 px-4 py-1 rounded text-sm transition-color duration-150",
            val.path === router && "bg-slate-50/10",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span>{val.icon}</span> {val.title}
        </Link>
      ))}
    </div>
  );
};
