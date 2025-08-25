import $api from "@/$api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { commitBookings } from "@/redux/slices/bookings/bookings.slice";
import { useEffect, useState } from "react";
import { useAnnouncementLogic } from "./use-announcement-logic.hook";

export const useDashboardLogic = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const { display, getAnnouncements } = useAnnouncementLogic();

  useEffect(() => {
    getAnnouncements();
    getBookings();
  }, []);

  const getBookings = async () => {
    setLoading(true);
    try {
      const { data, error } = await $api.bookings.getBookings();
      if (error?.message) {
        throw Error(error?.message);
      }
      if (data.data) {
        dispatch(commitBookings(data.data));
      }
      console.log("tried to get bookings");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { loading, getBookings, display };
};
