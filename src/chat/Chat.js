import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

function Chat() {
  const [currentSocket, setCurrentSocket] = useState();

  useEffect(() => {
    setCurrentSocket(socketIOClient("localhost:5000"));
  }, []);

  return (
    <ChatInput></ChatInput>
  );
}

export default Chat;
