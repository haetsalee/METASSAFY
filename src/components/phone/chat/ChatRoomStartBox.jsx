import styled from 'styled-components';

function ChatRoomStartBox(props) {
  return (
    <ChatRoomStartBoxDivStyle>
      <ChatResultImgStyle
        src="https://images.ctfassets.net/hrltx12pl8hq/5GaLeZJlLyOiQC4gOA0qUM/a0398c237e9744ade8b072f99349e07a/shutterstock_152461202_thumb.jpg"
        alt=""
      />
      <ChatResultNameStyle>상대이름</ChatResultNameStyle>
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
