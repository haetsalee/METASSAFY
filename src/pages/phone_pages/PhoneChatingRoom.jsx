import FriendChatBox from '../../components/phone/chat/FriendChatBox';
import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import ChatRoomNav from '../../components/phone/chat/ChatRoomNav';
import MyChatBox from '../../components/phone/chat/MyChatBox';

const Chats = {};

function PhoneChatingRoom() {
  return (
    <Phone>
      <ChatRoomNav />
      <PhoneChatingRoomStyle>
        <FriendChatBox chat="여기 chat데이터 들어가야함" />
        <MyChatBox />
        <FriendChatBox chat="여기 chat데이터 들어가야함" />
        <MyChatBox />
        <FriendChatBox chat="여기 chat데이터 들어가야함" />
        <MyChatBox />
        <FriendChatBox chat="여기 chat데이터 들어가야함" />
        <FriendChatBox chat="여기 chat데이터 들어가야함" />
        <MyChatBox />
        <MyChatBox />
      </PhoneChatingRoomStyle>
    </Phone>
  );
}

export default PhoneChatingRoom;

const PhoneChatingRoomStyle = styled.div`
  padding: 0.5rem;
  display: block;
  display: grid;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #617485;
  }
`;
