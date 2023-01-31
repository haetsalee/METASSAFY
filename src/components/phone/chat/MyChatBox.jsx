import MyChatMessage from './MyChatMessage';
import ChatTime from './ChatTime';

import styled from 'styled-components';

function MyChatBox() {
  return (
    <ChatBoxStyle>
      <ChatTime />
      <MyChatMessage chat="하이용" />
    </ChatBoxStyle>
  );
}

export default MyChatBox;

const ChatBoxStyle = styled.div`
  display: flex;
  padding: 0.3rem;
  justify-self: right;
`;
