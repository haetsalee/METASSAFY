import styled from 'styled-components';
import ChatRoomNavStatus from './ChatRoomNavStatus';

function ChatRoomNav() {
  return (
    <ChatRoomNavStyle>
      {/* <ChatRoomNavImgStyle
        src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg"
        alt=""
      /> */}
      <ChatRoomNavStatus />
    </ChatRoomNavStyle>
  );
}

export default ChatRoomNav;

const ChatRoomNavStyle = styled.div`
  padding: 0.5rem 2rem 0.5rem 2rem;
  display: flex;
  align-self: start;
`;

// const ChatRoomNavImgStyle = styled.img`
//   width: 2rem;
//   height: 2rem;
//   border-radius: 50%;
//   margin-right: 0.5rem;
// `;
