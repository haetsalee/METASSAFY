import FriendChatBox from '../../components/phone/chat/FriendChatBox';
import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import ChatRoomNav from '../../components/phone/chat/ChatRoomNav';
import MyChatBox from '../../components/phone/chat/MyChatBox';

function PhoneChatingRoom() {
  return (
    <Phone>
      <ChatRoomNav />
      <PhoneChatingRoomStyle>
        <FriendChatBox chat="여기 chat데이터 들어가야함" />
        <MyChatBox />
      </PhoneChatingRoomStyle>
    </Phone>
  );
}

export default PhoneChatingRoom;

const PhoneChatingRoomStyle = styled.div`
  padding: 1rem;
`;
