import $api from "@/$api";
import { useAppDispatch } from "@/redux/hooks";
import {
  commitAnnouncements,
  updateAnnouncements,
} from "@/redux/slices/announcements/announcements.slice";
import { useEffect, useState } from "react";
import { useSocket } from "./use-socket-logic.hook";
export const useAnnouncementLogic = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const socket = useSocket();

  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (socket) {
      socket.on("announcement", (message: any) => {
        dispatch(updateAnnouncements(message.data));
        setDisplay(message.message);
        console.log(message, "New flight");
      });

      socket.on("disconnect", () => {
        console.warn("❌ Disconnected");
      });

      socket.on("connect_error", (err) => {
        console.error("Socket connection error:", err);
      });
    }
  }, [socket]);
  const getAnnouncements = async () => {
    try {
      const { data, error } = await $api.announcement.getAnnouncements();
      if (error?.message) {
        throw new Error(error?.message);
      }
      if (data.data) {
        dispatch(commitAnnouncements(data.data));
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { display, loading, getAnnouncements };
};
