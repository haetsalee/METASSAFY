import FriendChatMessage from './FriendChatMessage';
import ChatFromTime from './ChatFromTime';

import styled from 'styled-components';

function FriendChatBox() {
  return (
    <ChatBoxStyle>
      <ChatImgDivStyle>
        <ChatImgStyle
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
      </ChatImgDivStyle>
      <div>
        <FriendChatMessage chat="하이요" />
        <ChatFromTime />
      </div>
    </ChatBoxStyle>
  );
}

export default FriendChatBox;

const ChatImgStyle = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ChatBoxStyle = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-self: left;
`;

const ChatImgDivStyle = styled.div`
  padding: 0.3rem;
`;
