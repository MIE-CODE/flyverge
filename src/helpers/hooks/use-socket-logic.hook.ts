import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import getSocketClient from "../socket-client";
import { useAppSelector } from "@/redux/hooks";

export const useSocket = () => {
  const user = useAppSelector((state) => state.user);
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const socket = getSocketClient();
    setSocket(socket);

    return () => {
      setSocket(null);
    };
  }, [user]);
  return socket;
};
