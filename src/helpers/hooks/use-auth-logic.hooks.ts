import { useEffect, useState } from "react";

export const useAuthLogic = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    function i() {
      if (typeof window !== "undefined") {
        return null;
      }
    }
    i();
  }, []);

  return {
    loading,
  };
};
