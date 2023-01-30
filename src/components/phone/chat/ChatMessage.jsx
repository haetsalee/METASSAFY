import styled from 'styled-components';

function ChatMessage(props) {
  return <ChatMessageStyle>chat.message{props.chat}</ChatMessageStyle>;
}

export default ChatMessage;

// background-color: ${({ props.chat }) =>
//     (props.chat.user_id === myid && '#F9F6FC') || '#e0f4ff'};
// border-radius: ${({ props.chat }) =>
//     (props.chat.user_id === myid && '1rem 1rem 0rem 1rem') || '1rem 1rem 1rem 0rem'};

const ChatMessageStyle = styled.div`
  background-color: #e0f4ff;
  width: auto;
  max-width: 10rem;
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
