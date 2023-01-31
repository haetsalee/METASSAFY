import styled from 'styled-components';

function ChatRoomNavStatus() {
  return (
    <ChatRoomNavStatusStyle>
      <ChatRoomNameStyle>김싸피와 채팅채팅</ChatRoomNameStyle>
      <ChatRoomMemberStyle>ㅇㅅㅇ...</ChatRoomMemberStyle>
    </ChatRoomNavStatusStyle>
  );
}

export default ChatRoomNavStatus;

const ChatRoomNavStatusStyle = styled.div`
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
`;

const ChatRoomNameStyle = styled.p`
  font-size: 1.1rem;
`;

const ChatRoomMemberStyle = styled.p`
  font-size: 0.3rem;
`;
