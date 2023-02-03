import { useEffect, useState } from 'react';
import { socket } from '../../Socket';

function Chat() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSocket = () => {
    socket.emit('chat', text);
    setText('');
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onSocket}>채팅 보내기</button>
    </div>
  );
}

export default Chat;