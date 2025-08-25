"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaSearch, FaPlaneDeparture, FaArrowRight } from "react-icons/fa";

interface Destination {
  name: string;
  location: string;
  image: string;
  price: string;
}

const destinations: Destination[] = [
  {
    name: "Santorini",
    location: "Greece",
    image: "/images/santorini.jpeg",
    price: "$399",
  },
  {
    name: "Kyoto",
    location: "Japan",
    image: "/images/kyoto.jpg",
    price: "$599",
  },
  {
    name: "Bali",
    location: "Indonesia",
    image: "/images/bali.jpg",
    price: "$499",
  },
  {
    name: "Dubai",
    location: "UAE",
    image: "/images/dubai.jpeg",
    price: "$699",
  },
];

const flightOffers = [
  { route: "New York → Paris", price: "$549", duration: "7h 20m" },
  { route: "London → Dubai", price: "$399", duration: "6h 45m" },
  { route: "Los Angeles → Tokyo", price: "$699", duration: "11h 10m" },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#171717] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-dark.jpg"
          alt="Explore Flights"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Discover Your Next Journey
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Fly smarter, travel better — find unbeatable deals today.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center bg-[#222222] rounded-full shadow-lg px-4 py-2 w-full max-w-xl border border-gray-700">
              <FaSearch className="text-gray-400 mr-3" size={18} />
              <input
                type="text"
                placeholder="Search destinations, flights..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Popular Destinations */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Destinations
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#222222] rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl border border-gray-700"
            >
              <div className="relative w-full h-48">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{dest.name}</h3>
                <p className="text-sm text-gray-400">{dest.location}</p>
                <p className="mt-3 font-semibold text-[#00AEEF]">
                  {dest.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Flight Offers */}
      <section className="bg-[#1E1E1E] text-white py-12 px-6 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Exclusive Flight Offers
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {flightOffers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-[#222222] rounded-xl shadow-lg p-6 w-full md:w-72 border border-gray-700"
            >
              <div className="flex items-center gap-3">
                <FaPlaneDeparture className="text-[#00AEEF]" size={22} />
                <h3 className="font-bold text-lg">{offer.route}</h3>
              </div>
              <p className="mt-3 text-gray-400">Duration: {offer.duration}</p>
              <p className="mt-2 text-xl font-bold text-[#00AEEF]">
                {offer.price}
              </p>
              <button className="mt-4 w-full bg-[#00AEEF] text-black py-2 rounded-lg hover:bg-[#0090cc] transition flex items-center justify-center gap-2">
                Book Now <FaArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Travel Tips & Guides
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "5 Hacks to Save on Flights",
              image: "/images/5hacks.png",
            },
            { title: "Best Times to Book Tickets", image: "/images/tip2.png" },
            {
              title: "Top 10 Budget-Friendly Cities",
              image: "/images/tip3.png",
            },
          ].map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-[#222222] rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl border border-gray-700"
            >
              <div className="relative w-full h-40">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{tip.title}</h3>
                <p className="text-sm text-[#00AEEF]">Read more →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
