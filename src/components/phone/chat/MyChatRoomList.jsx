import styled from 'styled-components';
import MyChatList from './MyChatList';

function MyChatRoomList() {
  return (
    <div>
      <ChatRoomFormStyle>
        <MyChatListStyle>채팅 목록</MyChatListStyle>
      </ChatRoomFormStyle>
      <MyChatList />
      <MyChatList />
      <MyChatList />
      <MyChatList />
      <MyChatList />
      <MyChatList />
      <MyChatList />
      <MyChatList />
    </div>
  );
}

export default MyChatRoomList;

const ChatRoomFormStyle = styled.div`
  background-color: #e0f4ff;
  height: 2rem;
  width: 95%;
  border-radius: 1rem;
  display: flex;
  margin: 0.5rem;
`;

const MyChatListStyle = styled.p`
  width: 80%;
  font-size: 0.9rem;
  color: #617485;
  background-color: #e0f4ff;
  margin: 0.5rem 1rem 0rem 1rem;
`;
