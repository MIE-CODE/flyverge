import { customFetch } from "@/utils/utils";

export default () => {
  return {
    getAnnouncements() {
      return customFetch("/announcements");
    },
  };
};
