import MyChatMessage from './MyChatMessage';
import ChatTime from './ChatTime';

import styled from 'styled-components';

function MyChatBox(props) {
  console.log(props.chat);
  return (
    <ChatBoxStyle>
      <ChatTime />
      <MyChatMessage chat={props.chat.message} />
    </ChatBoxStyle>
  );
}

export default MyChatBox;

const ChatBoxStyle = styled.div`
  padding: 0.5rem;
  justify-self: right;
  display: flex;
`;
