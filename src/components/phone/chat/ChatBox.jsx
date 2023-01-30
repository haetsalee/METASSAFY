import ChatMessage from './ChatMessage';
import ChatFromTime from './ChatFromTime';

import styled from 'styled-components';

function ChatBox() {
  return (
    <ChatBoxStyle>
      <ChatImgDivStyle>
        {/* { chat.id === user && <ProfileImg></ProfileImg>} */}
        <ChatImgStyle
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
      </ChatImgDivStyle>
      <div>
        <ChatMessage chat="하이요" />
        <ChatFromTime />
      </div>
    </ChatBoxStyle>
  );
}

export default ChatBox;

const ChatImgStyle = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ChatBoxStyle = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const ChatImgDivStyle = styled.div`
  padding: 0.5rem;
`;
