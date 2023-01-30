import ChatBox from '../../components/phone/chat/ChatBox';
import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import ChatRoomNav from '../../components/phone/chat/ChatRoomNav';

function PhoneChatingRoom() {
  return (
    <Phone>
      <ChatRoomNav />
      <PhoneChatingRoomStyle>
        <ChatBox />
        <ChatBox />
        <ChatBox />
      </PhoneChatingRoomStyle>
    </Phone>
  );
}

export default PhoneChatingRoom;

const PhoneChatingRoomStyle = styled.div`
  padding: 1rem;
`;
