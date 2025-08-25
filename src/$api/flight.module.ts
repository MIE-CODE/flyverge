import { customFetch } from "@/utils/utils";
import { error } from "console";
import Cookies from "js-cookie";
export default () => {
  return {
    getFlights() {
      return customFetch("/flights", {
        method: "GET",
      });
    },
  };
};
