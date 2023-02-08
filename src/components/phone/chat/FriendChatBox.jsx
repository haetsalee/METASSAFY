import FriendChatMessage from './FriendChatMessage';

import styled from 'styled-components';
import ChatTime from './ChatTime';
import { NavLink } from 'react-router-dom';

function FriendChatBox(props) {
  return (
    <ChatBoxStyle>
      <NavLink to={`/metassafy/phone/profile/${props.chat.user_id}`}>
        <ChatImgDivStyle>
          <ChatImgStyle src={props.chat.profile_img} alt="" />
        </ChatImgDivStyle>
      </NavLink>
      <div>
        <UserIdStyle>{props.chat.name}</UserIdStyle>
        <FriendChatMessage chat={props.chat.message} />
      </div>
      <ChatTime time={props.chat.regtime} />
    </ChatBoxStyle>
  );
}

export default FriendChatBox;

const ChatImgStyle = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

const ChatBoxStyle = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-self: left;
`;

const ChatImgDivStyle = styled.div`
  padding: 0.3rem;
  padding-bottom: 1rem;
`;

const UserIdStyle = styled.p`
  padding: 0.2rem;
  font-size: 0.3rem;
`;
