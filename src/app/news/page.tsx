"use client";
import { Layout } from "../layouts/dafault/pag-layout";

export default function News() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const news: NewsItem[] = [
    {
      id: 1,
      title: "FlyVerge Launches New Routes to Asia 🌏",
      description:
        "Explore new destinations in Asia with unbeatable fares and flexible booking options.",
      image: "/images/news-1.jpg",
      category: "Airline Updates",
      date: "Aug 12, 2025",
    },
    {
      id: 2,
      title: "Top 10 Travel Tips for Budget Travelers ✈️",
      description:
        "Save more on your next trip with these essential tips curated by experts.",
      image: "/images/news-2.jpg",
      category: "Travel Tips",
      date: "Aug 10, 2025",
    },
    {
      id: 3,
      title: "Europe Reopens Borders for Summer Holidays 🇪🇺",
      description:
        "Several European countries ease travel restrictions ahead of the summer season.",
      image: "/images/news-3.jpg",
      category: "World News",
      date: "Aug 8, 2025",
    },
    {
      id: 4,
      title: "Earn Double Rewards on International Flights 🎁",
      description:
        "Fly international and earn 2x loyalty points this season with FlyVerge Plus.",
      image: "/images/news-4.jpg",
      category: "Promotions",
      date: "Aug 6, 2025",
    },
  ];

  const categories = [
    "All",
    "Airline Updates",
    "Travel Tips",
    "World News",
    "Promotions",
  ];

  const filteredNews =
    activeCategory === "All"
      ? news
      : news.filter((item) => item.category === activeCategory);
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
          FlyVerge News 📰
        </motion.h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Stay up-to-date with the latest travel tips, airline updates,
          exclusive deals, and world news.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-white text-[#171717]"
                  : "bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1f1f1f] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {item.category === "Airline Updates" && (
                    <FaPlane className="text-blue-400" />
                  )}
                  {item.category === "Travel Tips" && (
                    <FaLightbulb className="text-yellow-400" />
                  )}
                  {item.category === "World News" && (
                    <FaGlobeAmericas className="text-green-400" />
                  )}
                  {item.category === "Promotions" && (
                    <FaNewspaper className="text-pink-400" />
                  )}
                  <span className="text-xs text-gray-400">{item.category}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <div className="text-xs text-gray-500 mt-3">{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">Never Miss an Update ✈️</h2>
          <p className="text-gray-200 mb-5">
            Subscribe to get the latest airline updates and exclusive deals
            straight to your inbox.
          </p>
          <button className="bg-white text-[#171717] px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
            Subscribe Now
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaNewspaper,
  FaPlane,
  FaGlobeAmericas,
  FaLightbulb,
} from "react-icons/fa";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}
