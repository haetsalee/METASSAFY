import styled from 'styled-components';
import ChatInviteItem from './ChatInviteItem';

function ChatInviteList() {
  return (
    <div>
      <ChatInviteDiv>
        <ChatInviteText>초대된 목록</ChatInviteText>
        <ChatInviteBtn>💬</ChatInviteBtn>
      </ChatInviteDiv>
      <ChatInviteListDiv>
        <ChatInviteItem />
        <ChatInviteItem />
        <ChatInviteItem />
        <ChatInviteItem />
        <ChatInviteItem />
        <ChatInviteItem />
      </ChatInviteListDiv>
    </div>
  );
}

export default ChatInviteList;

const ChatInviteDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 1rem;
`;

const ChatInviteText = styled.p`
  font-size: 0.8rem;
`;

const ChatInviteBtn = styled.p`
  font-size: 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;

const ChatInviteListDiv = styled.div`
  height: 10rem;
  overflow-x: auto;
  padding: 0.5rem;
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  white-space: nowrap;
  &::-webkit-scrollbar {
    height: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #617485;
  }
`;
