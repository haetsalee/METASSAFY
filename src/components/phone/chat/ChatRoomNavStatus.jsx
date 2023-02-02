import styled from 'styled-components';

function ChatRoomNavStatus(props) {
  // console.log(props);
  return (
    <ChatRoomNavStatusStyle>
      <ChatRoomNameStyle>{props.chatRoom?.croom_name}</ChatRoomNameStyle>
      <ChatRoomMemberStyle>{props.chatRoom?.participants}</ChatRoomMemberStyle>
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
  margin-top: 0.2rem;
`;
