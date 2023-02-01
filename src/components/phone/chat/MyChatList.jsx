import styled from 'styled-components';

function MyChatList(props) {
  return (
    <ChatRoomListStyle>
      <ChatRoomNameStyle>김싸피와 채팅채팅</ChatRoomNameStyle>
      <ChatTextStyle>
        <span>마지막메시지</span>
        <ChatTimeSpanStyle>시간</ChatTimeSpanStyle>
      </ChatTextStyle>
      <hr />
    </ChatRoomListStyle>
  );
}

export default MyChatList;

const ChatRoomListStyle = styled.div`
  margin: 1.5rem;
`;

const ChatRoomNameStyle = styled.p`
  font-size: 1.1rem;
`;

const ChatTextStyle = styled.p`
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding-left: 0.5rem;
`;

const ChatTimeSpanStyle = styled.span`
  color: #00000066;
`;
