import styled from 'styled-components';

function ChatTime() {
  return (
    <ChatTextBox>
      <ChatText>오후 13:10</ChatText>
    </ChatTextBox>
  );
}

export default ChatTime;

const ChatTextBox = styled.div`
  white-space: nowrap;
  display: flex;
`;

const ChatText = styled.p`
  font-size: 0.3rem;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 0.3rem;
  padding-right: 0.3rem;
  align-self: flex-end;
`;
