import styled from 'styled-components';

function ChatTime(props) {
  return (
    <ChatTextBox>
      <ChatText>{props.time}</ChatText>
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
  color: #0000006a;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.3rem;
  align-self: flex-end;
`;
