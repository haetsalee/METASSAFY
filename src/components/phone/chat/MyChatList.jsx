import styled from 'styled-components';

function MyChatList(props) {
  return (
    <div>
      <ChatRoomListStyle>
        <ChatRoomNavImgStyle
          src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg"
          alt=""
        />
        <ChatTextBoxDiv>
          <ChatRoomNameStyle>김싸피와 채팅채팅</ChatRoomNameStyle>
          <ChatTextStyle>
            <span>마지막메시지</span>
            <ChatTimeSpanStyle>시간</ChatTimeSpanStyle>
          </ChatTextStyle>
        </ChatTextBoxDiv>
      </ChatRoomListStyle>
    </div>
  );
}

export default MyChatList;

const ChatRoomListStyle = styled.div`
  margin: 1.5rem;
  padding-bottom: 0.3rem;
  display: flex;
  border-bottom: 1px solid #d9d9d9;
`;

const ChatRoomNameStyle = styled.p`
  font-size: 1.1rem;
`;

const ChatTextBoxDiv = styled.div`
  width: 100%;
`;

const ChatTextStyle = styled.p`
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding-left: 0.5rem;
`;

const ChatTimeSpanStyle = styled.span`
  color: #00000066;
`;

const ChatRoomNavImgStyle = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
