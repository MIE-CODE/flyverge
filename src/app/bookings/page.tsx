"use client";
import { Layout } from "../layouts/dafault/pag-layout";

export default function Bookings() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const bookings: Booking[] = [
    {
      id: 1,
      airline: "FlyVerge Airlines",
      from: "Lagos (LOS)",
      to: "London (LHR)",
      departure: "10:30 AM",
      arrival: "6:45 PM",
      date: "Sep 10, 2025",
      status: "Upcoming",
      bookingRef: "FV-87453",
    },
    {
      id: 2,
      airline: "SkyJet Airways",
      from: "Abuja (ABV)",
      to: "Dubai (DXB)",
      departure: "2:15 PM",
      arrival: "9:30 PM",
      date: "Aug 30, 2025",
      status: "Upcoming",
      bookingRef: "SJ-65984",
    },
    {
      id: 3,
      airline: "FlyVerge Airlines",
      from: "Paris (CDG)",
      to: "New York (JFK)",
      departure: "9:00 AM",
      arrival: "2:20 PM",
      date: "Jul 5, 2025",
      status: "Completed",
      bookingRef: "FV-98341",
    },
  ];

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.airline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.bookingRef.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {" "}
      <div className="min-h-screen bg-[#171717] text-[#ffffff] px-6 py-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          My Bookings ✈️
        </motion.h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
          View your upcoming flights, completed trips, and booking details.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute top-3 left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by airline, route, or booking ref..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#1f1f1f] w-full pl-10 pr-4 py-3 rounded-lg text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Bookings Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBookings.map((booking) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1f1f1f] rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{booking.airline}</h3>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    booking.status === "Upcoming"
                      ? "bg-blue-600 text-white"
                      : "bg-green-600 text-white"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <FaPlaneDeparture className="text-blue-400" />
                <span className="text-gray-300 font-medium">
                  {booking.from}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <FaPlaneArrival className="text-green-400" />
                <span className="text-gray-300 font-medium">{booking.to}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400 mb-1">
                <FaCalendarAlt className="text-yellow-400" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 mb-3">
                <FaClock className="text-purple-400" />
                <span>
                  {booking.departure} - {booking.arrival}
                </span>
              </div>

              <div className="text-xs text-gray-500">
                Booking Ref: {booking.bookingRef}
              </div>

              <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-10 text-gray-400"
          >
            No bookings found. Try searching for a different flight.
          </motion.div>
        )}
      </div>
    </Layout>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaClock,
  FaSearch,
} from "react-icons/fa";

interface Booking {
  id: number;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  date: string;
  status: "Upcoming" | "Completed";
  bookingRef: string;
}
