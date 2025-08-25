import Cookies from "js-cookie";
import { io, Socket } from "socket.io-client";

let client: Socket | null = null;
let token: string;
const getSocketClient = () => {
  let _client = client;
  let _token = Cookies.get("auth_token") as string;
  if (_client && _token != token) {
    _client.disconnect();
    _client = null;
  }
  if (!_client) {
    token = _token;
    _client = io("http://localhost:8585", {
      transports: ["websocket"],
      query: {
        authorization: token,
      },
      transportOptions: {
        websocket: {
          headers: {
            authorization: token,
          },
          extraHeaders: {
            authorization: token,
          },
        },
      },
    });

    client = _client;
  } else {
    setTimeout(getSocketClient, 500);
  }
  return _client;
};

export default getSocketClient;
