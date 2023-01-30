import { useEffect, useState } from "react";
import { socket } from "../../Socket"; 

function Chat() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
 
  const onSocket = () => {
    socket.emit("chat", text)
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onSocket}>소켓 동작 확인</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}

export default Chat;
