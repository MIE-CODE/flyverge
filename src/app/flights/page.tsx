"use client";
import { useEffect, useState } from "react";
import { Layout } from "../layouts/dafault/pag-layout";
import { customFetch } from "@/utils/utils";
import Cookies from "js-cookie";
import { Button } from "../components/button/button.component";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import { useFlightLogic } from "@/helpers/hooks/use-flights-page-logic.hook";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";

interface Flight {
  id: number;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  price: string;
  duration: string;
}
export default function Flights() {
  const flights = useAppSelector((state) => state.flights);
  const { loading } = useFlightLogic();
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [passengers, setPassengers] = useState<number>(1);
  const [travelClass, setTravelClass] = useState<string>("Economy");
  return (
    <Layout>
      <div className="min-h-screen bg-[#171717] text-[#ffffff] px-2 py-4 sm:px-6 sm:py-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Find Your Perfect Flight ✈️
        </motion.h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Search and book flights to your dream destinations with ease.
        </p>

        {/* Flight Search Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1f1f1f] rounded-xl p-6 shadow-lg max-w-4xl mx-auto mb-12"
        >
          <div className="grid md:grid-cols-5 gap-4">
            {/* From */}
            <div>
              <label className="text-sm text-gray-400">From</label>
              <input
                type="text"
                placeholder="Enter origin"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="bg-[#2a2a2a] w-full p-3 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* To */}
            <div>
              <label className="text-sm text-gray-400">To</label>
              <input
                type="text"
                placeholder="Enter destination"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="bg-[#2a2a2a] w-full p-3 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-sm text-gray-400">Departure Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-[#2a2a2a] w-full p-3 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Passengers */}
            <div>
              <label className="text-sm text-gray-400">Passengers</label>
              <input
                type="number"
                min={1}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="bg-[#2a2a2a] w-full p-3 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Travel Class */}
            <div>
              <label className="text-sm text-gray-400">Class</label>
              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                className="bg-[#2a2a2a] w-full p-3 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-500 w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
            <FaSearch /> Search Flights
          </button>
        </motion.div>

        {/* Available Flights */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-6"
        >
          Available Flights
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flights?.map((flight) => (
            <motion.div
              key={flight._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1f1f1f] rounded-xl shadow-lg md:p-6 p-3 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">{flight.airline}</h3>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {flight.price}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <FaPlaneDeparture className="text-blue-400" />
                <span className="text-gray-300 font-medium">{flight.from}</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <FaPlaneArrival className="text-green-400" />
                <span className="text-gray-300 font-medium">{flight.to}</span>
              </div>

              <div className="flex justify-between items-center text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-yellow-400" />
                  <span>{flight.departureTime}</span>
                </div>
                <span>Duration: {flight.duration}</span>
              </div>

              <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
