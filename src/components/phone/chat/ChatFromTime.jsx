import styled from 'styled-components';

function ChatFromTime() {
  return (
    <ChatFromTimeStyle>
      <ChatText>chat.user_id</ChatText>
      <ChatText>chat.regtime</ChatText>
    </ChatFromTimeStyle>
  );
}

export default ChatFromTime;

const ChatText = styled.p`
  font-size: 0.5rem;
`;

const ChatFromTimeStyle = styled.div`
  display: flex;
`;
