import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import ChatListNav from '../../components/phone/chat/ChatListNav';

function PhoneChatingList() {
  return (
    <Phone>
      <ChatListNav />
      <PhoneChatingListStyle>
        <div>여기는 새 채팅 검색</div>
        <div>여기는 검색하면 나올 결과창 if 랜더링</div>
        <div>여기는 채팅방 목록</div>
      </PhoneChatingListStyle>
    </Phone>
  );
}

export default PhoneChatingList;

const PhoneChatingListStyle = styled.div`
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
