"use client";
import { Layout } from "../layouts/dafault/pag-layout";
import { Slide, Slides } from "../components/slides/slides.component";
import Link from "next/link";
import { FaBroadcastTower, FaCloud, FaListAlt, FaMinus } from "react-icons/fa";
import { Button } from "../components/button/button.component";
import { FaBan, FaLocationDot } from "react-icons/fa6";
import { Table } from "../components/table/table.component";
import { useDashboardLogic } from "@/helpers/hooks/use-dashboard-page-hook";
import { useAppSelector } from "@/redux/hooks";
import moment from "moment";
import classNames from "classnames";

export default function Dashboard() {
  const bookings = useAppSelector((state) => state.bookings);
  const announcements = useAppSelector((state) => state.announcements);
  const user = useAppSelector((state) => state.user);
  const { loading, display } = useDashboardLogic();

  const bookingsData = [
    { month: "Jan", bookings: 20 },
    { month: "Feb", bookings: 35 },
    { month: "Mar", bookings: 25 },
    { month: "Apr", bookings: 40 },
    { month: "May", bookings: 55 },
    { month: "Jun", bookings: 45 },
  ];

  // Upcoming flights
  const upcomingFlights: Flight[] = [
    {
      id: 1,
      from: "Lagos",
      to: "London",
      date: "Aug 28, 2025",
      time: "08:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      from: "New York",
      to: "Paris",
      date: "Sep 2, 2025",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      from: "Dubai",
      to: "Tokyo",
      date: "Sep 7, 2025",
      time: "11:45 PM",
      status: "Confirmed",
    },
  ];

  // Notifications
  const notifications: Notification[] = [
    {
      id: 1,
      message: "Your Lagos → London flight is confirmed.",
      time: "2h ago",
    },
    {
      id: 2,
      message: "FlyVerge introduces new promo fares this weekend.",
      time: "5h ago",
    },
    {
      id: 3,
      message: "Check-in reminder for your Dubai → Tokyo flight.",
      time: "1d ago",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#171717] text-white px-6 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-gray-400 mt-2">
            Here’s what’s happening with your flights today
          </p>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1f1f1f] p-5 rounded-xl shadow-md"
          >
            <FaPlaneDeparture className="text-blue-400 text-3xl mb-3" />
            <h2 className="text-lg font-semibold">Bookings</h2>
            <p className="text-2xl font-bold">12</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1f1f1f] p-5 rounded-xl shadow-md"
          >
            <FaPlaneArrival className="text-red-400 text-3xl mb-3" />
            <h2 className="text-lg font-semibold">Cancellations</h2>
            <p className="text-2xl font-bold">3</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1f1f1f] p-5 rounded-xl shadow-md"
          >
            <FaGift className="text-green-400 text-3xl mb-3" />
            <h2 className="text-lg font-semibold">Rewards</h2>
            <p className="text-2xl font-bold">5,200 pts</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1f1f1f] p-5 rounded-xl shadow-md"
          >
            <FaBookmark className="text-yellow-400 text-3xl mb-3" />
            <h2 className="text-lg font-semibold">Saved Trips</h2>
            <p className="text-2xl font-bold">8</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Booking Analytics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1f1f1f] rounded-xl p-6 shadow-lg lg:col-span-2"
          >
            <h2 className="text-xl font-semibold mb-4">Booking Analytics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bookingsData}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
                />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#4f9eff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1f1f1f] rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaBell className="text-yellow-400 text-xl" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <ul className="space-y-4">
              {notifications.map((note) => (
                <li key={note.id} className="border-b border-gray-700 pb-3">
                  <p className="text-sm">{note.message}</p>
                  <span className="text-xs text-gray-500">{note.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Upcoming Flights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1f1f1f] rounded-xl p-6 shadow-lg mt-10"
        >
          <h2 className="text-xl font-semibold mb-4">Upcoming Flights</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr>
                  <th className="py-3 px-4">From</th>
                  <th className="py-3 px-4">To</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {upcomingFlights.map((flight) => (
                  <tr key={flight.id} className="hover:bg-[#2a2a2a] transition">
                    <td className="py-3 px-4">{flight.from}</td>
                    <td className="py-3 px-4">{flight.to}</td>
                    <td className="py-3 px-4">{flight.date}</td>
                    <td className="py-3 px-4">{flight.time}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        flight.status === "Confirmed"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {flight.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

import { motion } from "framer-motion";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaGift,
  FaBookmark,
  FaBell,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Flight {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  status: string;
}

interface Notification {
  id: number;
  message: string;
  time: string;
}
