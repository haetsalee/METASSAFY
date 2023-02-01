import FriendChatMessage from './FriendChatMessage';

import styled from 'styled-components';
import ChatTime from './ChatTime';

function FriendChatBox(props) {
  return (
    <ChatBoxStyle>
      <ChatImgDivStyle>
        <ChatImgStyle
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
      </ChatImgDivStyle>
      <div>
        <UserIdStyle>user_nameㅇㅇ아</UserIdStyle>
        <FriendChatMessage chat="하이요aaasdgddddddddddddddddddddddgageedfㅏ" />
      </div>
      <ChatTime />
    </ChatBoxStyle>
  );
}

export default FriendChatBox;

const ChatImgStyle = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

const ChatBoxStyle = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-self: left;
`;

const ChatImgDivStyle = styled.div`
  padding: 0.3rem;
  padding-bottom: 1rem;
`;

const UserIdStyle = styled.p`
  padding: 0.2rem;
  font-size: 0.3rem;
`;
