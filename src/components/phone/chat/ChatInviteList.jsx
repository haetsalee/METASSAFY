import styled from 'styled-components';
import API from '../../../utils/api';
import ChatInviteItem from './ChatInviteItem';

const tempInviteList = ['ssafy', 'ssafy2', 'admin'];

function ChatInviteList(props) {
  function makeChatRoom() {
    API.post(``, {
      chatParameterDto: {
        croom_name: '살려줘요',
        participants: tempInviteList,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <ChatInviteDiv>
        <ChatInviteText>초대된 목록</ChatInviteText>
        <ChatInviteBtn onClick={makeChatRoom}>💬</ChatInviteBtn>
      </ChatInviteDiv>
      <ChatInviteListDiv>
        {tempInviteList.map((item) => {
          return <ChatInviteItem name={item} />;
        })}
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
