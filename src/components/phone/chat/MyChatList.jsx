import styled from 'styled-components';

function MyChatList(props) {
  return (
    <ChatRoomListStyle>
      <ChatRoomNameStyle>김싸피와 채팅채팅</ChatRoomNameStyle>
      <ChatTextStyle>
        <span>마지막메시지</span>
        <span>시간</span>
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
`;
