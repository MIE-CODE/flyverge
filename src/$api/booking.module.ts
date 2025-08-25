import { customFetch } from "@/utils/utils";

export default () => {
  return {
    getBookings() {
      return customFetch("/bookings");
    },
  };
};
