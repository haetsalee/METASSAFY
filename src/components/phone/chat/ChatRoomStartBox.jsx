import { useState } from 'react';
import styled from 'styled-components';

function ChatRoomStartBox(props) {
  const [isCheck, setCheck] = useState(false);

  function handleClick() {
    setCheck((e) => !e);
  }

  return (
    <ChatRoomStartBoxDivStyle onClick={handleClick}>
      <ChatResultImgStyle
        src={props.result.profile_img}
        alt={props.result.name}
      />
      <ChatResultNameStyle>{props.result.name}</ChatResultNameStyle>
      <ChatResultIDStyle>{props.result.user_id}</ChatResultIDStyle>
      {isCheck && <ChatResultNameStyle>✔</ChatResultNameStyle>}
    </ChatRoomStartBoxDivStyle>
  );
}

export default ChatRoomStartBox;

const ChatRoomStartBoxDivStyle = styled.div`
  text-align: center;
  margin: 0rem 0.5rem 1rem 0.5rem;
  display: inline;
`;

const ChatResultImgStyle = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const ChatResultNameStyle = styled.p`
  font-size: 0.8rem;
`;

const ChatResultIDStyle = styled.p`
  font-size: 0.3rem;
`;
