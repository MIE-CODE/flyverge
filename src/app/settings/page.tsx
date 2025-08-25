"use client";
import { Layout } from "../layouts/dafault/pag-layout";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBell,
  FaMoon,
  FaSun,
  FaTrash,
} from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const user = useAppSelector((state) => state.user);
  return (
    <Layout>
      <div className="min-h-screen bg-[#171717] text-white px-6 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Settings ⚙️</h1>
          <p className="text-gray-400 mt-2">
            Manage your account, preferences, and notifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaUser className="text-blue-400" /> Profile Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.name}
                  className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+234 810 123 4567"
                  className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-blue-400 outline-none"
                />
              </div>
              <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg py-3 font-semibold">
                Save Changes
              </button>
            </div>
          </motion.div>

          {/* Account Settings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaLock className="text-green-400" /> Account Security
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-green-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-green-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-green-400 outline-none"
                />
              </div>
              <button className="w-full mt-3 bg-green-500 hover:bg-green-600 transition rounded-lg py-3 font-semibold">
                Update Password
              </button>
            </div>
          </motion.div>
        </div>

        {/* Notification Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaBell className="text-yellow-400" /> Notification Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <input
                type="checkbox"
                checked={smsNotif}
                onChange={() => setSmsNotif(!smsNotif)}
                className="w-5 h-5 accent-green-500 cursor-pointer"
              />
            </div>
          </div>
        </motion.div>

        {/* Theme Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {darkMode ? (
              <FaMoon className="text-purple-400" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
            Theme Preferences
          </h2>
          <div className="flex items-center justify-between">
            <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded-lg font-semibold"
            >
              Switch to {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg mt-8 border border-red-600"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-500">
            <FaTrash /> Danger Zone
          </h2>
          <p className="text-gray-400 mb-4">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold">
            Delete Account
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
