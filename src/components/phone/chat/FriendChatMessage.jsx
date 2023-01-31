import styled from 'styled-components';

function FriendChatMessage(props) {
  return (
    <FriendChatMessageStyle>chat.message{props.chat}</FriendChatMessageStyle>
  );
}

export default FriendChatMessage;

const FriendChatMessageStyle = styled.div`
  font-size: 0.9rem;
  background-color: #e0f4ff;
  width: auto;
  max-width: 10rem;
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
