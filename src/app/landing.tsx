import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
      <section className="w-full flex md:items-end md:justify-end py-2 px-4">
        <motion.a
          href="/auth/login"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-blue-600 hover:bg-blue-500 px-4 py-1 rounded-xl text-lg font-semibold shadow-lg"
        >
          Login
        </motion.a>
      </section>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Explore the World with <span className="text-blue-500">FlyVerge</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 mt-5 max-w-2xl"
        >
          Book cheap flights, discover top destinations, and travel with ease.
          Your journey begins here. ✈️
        </motion.p>
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
        >
          Book Your Flight
        </motion.button>
      </section>

      {/* Flight Search */}
      <section className="bg-[#1f1f1f] rounded-2xl shadow-lg p-6 max-w-5xl mx-auto -mt-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-gray-400">From</label>
            <div className="flex items-center bg-[#2a2a2a] rounded-lg p-3">
              <FaPlaneDeparture className="mr-2 text-blue-400" />
              <input
                type="text"
                placeholder="City or Airport"
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-400">To</label>
            <div className="flex items-center bg-[#2a2a2a] rounded-lg p-3">
              <FaPlaneArrival className="mr-2 text-green-400" />
              <input
                type="text"
                placeholder="Destination"
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-400">Date</label>
            <div className="flex items-center bg-[#2a2a2a] rounded-lg p-3">
              <FaCalendarAlt className="mr-2 text-yellow-400" />
              <input
                type="date"
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 rounded-lg text-white flex items-center justify-center gap-2 font-semibold px-5">
            <FaSearch /> Search
          </button>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Destinations 🌎
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Paris",
              image: "/images/paris.jpg",
            },
            {
              name: "Dubai",
              image: "/images/dubai.jpeg",
            },
            {
              name: "New York",
              image: "/images/new_york.jpeg",
            },
            {
              name: "Tokyo",
              image: "/images/tokyo.jpg",
            },
            {
              name: "London",
              image: "/images/london.jpeg",
            },
            {
              name: "Rome",
              image: "/images/rome.jpeg",
            },
          ].map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full min-w-60 h-60 object-cover transform group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-xl font-bold">{dest.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#1f1f1f] py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Fly with FlyVerge?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Best Prices",
              desc: "Find affordable flights without hidden charges.",
            },
            {
              title: "24/7 Support",
              desc: "We're here to assist you at any time.",
            },
            {
              title: "Trusted Airlines",
              desc: "Book with the world's most reliable airlines.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-[#2a2a2a] p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say ❤️
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "John Doe",
              feedback:
                "FlyVerge made booking my flight so easy and affordable. Highly recommend!",
            },
            {
              name: "Sarah Johnson",
              feedback:
                "Best experience ever! Smooth booking process and amazing service.",
            },
            {
              name: "Mike Williams",
              feedback:
                "I always find the cheapest flights here. FlyVerge never disappoints.",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-[#1f1f1f] p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-300 mb-4">“{review.feedback}”</p>
              <h4 className="font-semibold text-lg">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 text-center text-white rounded-t-xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg mb-6">
          Book your next flight now and enjoy exclusive deals!
        </p>
        <Link
          href="/auth/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f1f1f] py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} FlyVerge. All rights reserved.
      </footer>
    </div>
  );
}
