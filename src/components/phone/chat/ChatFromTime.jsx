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
  width: 4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.3rem;
`;

const ChatFromTimeStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
