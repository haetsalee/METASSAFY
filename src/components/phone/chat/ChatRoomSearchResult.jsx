import styled from 'styled-components';
import ChatRoomStartBox from './ChatRoomStartBox';

function ChatRoomSearchResult(props) {
  return (
    <ChatRoomSearchResultDivStyle>
      {props.setSearchList.map((result) => {
        return <ChatRoomStartBox result={result} key={result.user_id} />;
      })}
    </ChatRoomSearchResultDivStyle>
  );
}

export default ChatRoomSearchResult;

const ChatRoomSearchResultDivStyle = styled.div`
  height: 10rem;
  overflow-x: auto;
  padding: 0.5rem;
  display: flex;
  width: 100%;
  height: 7.5rem;
  white-space: nowrap;
  &::-webkit-scrollbar {
    height: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #617485;
  }
`;
