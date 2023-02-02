import styled from 'styled-components';

function MyChatList(props) {
  // console.log(props.room);
  return (
    <div
      onClick={() => {
        props.setCroom(props.room.croom_no);
        props.setPage('chatroom');
      }}
    >
      <ChatRoomListStyle>
        <ChatRoomNavImgStyle
          src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg"
          alt=""
        />
        <ChatTextBoxDiv>
          <FlexDiv>
            <ChatRoomNameStyle>{props.room.croom_name}</ChatRoomNameStyle>
            <NotReadSpanStyle>{props.room.not_read_chat}</NotReadSpanStyle>
          </FlexDiv>
          <ChatTextStyle>
            <span>{props.room.last_chat}</span>
            <ChatTimeSpanStyle>{props.room.last_chat_time}</ChatTimeSpanStyle>
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

const ChatRoomNameStyle = styled.span`
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

const NotReadSpanStyle = styled.span`
  font-size: 0.3rem;
  color: #00d9ff;
`;

const ChatRoomNavImgStyle = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
