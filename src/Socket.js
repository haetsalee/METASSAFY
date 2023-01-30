import { io } from "socket.io-client";

export const socket = io.connect("http://localhost:5000", {
  path: "/socket.io",
  transports: ["websocket"],
});