import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { customFetch } from "@/utils/utils";
import $api from "@/$api";
import { useAppDispatch } from "@/redux/hooks";
import { commitFlights } from "@/redux/slices/flights/flights.slice";
export const useFlightLogic = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getFlights();
  }, []);
  const getFlights = async () => {
    try {
      setLoading(true);
      const { data, error } = await $api.flights.getFlights();
      if (error?.message) {
        console.log(error?.message);
        throw Error("an error occured");
      }
      dispatch(commitFlights(data.data));
    } catch (error: any) {
      console.log(error?.message);
    } finally {
      setLoading(false);
    }
  };
  const createFlight = async () => {
    try {
      setLoading(true);
    } catch (error: any) {
      console.log(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getFlights };
};
