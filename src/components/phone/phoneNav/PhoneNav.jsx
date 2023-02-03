import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Users } from '../../../assets/icons/users.svg';
import { ReactComponent as CircleMessage } from '../../../assets/icons/messageCircle.svg';

import styled from 'styled-components';

function PhoneNav(props) {
  return (
    <NavDiv>
      <NavInnerDiv>
        {props.status === 'profile' && <User stroke="#617485" />}
        {props.status !== 'profile' && (
          <User
            stroke="#AEC6D7"
            onClick={() => {
              props.setPage('profile');
            }}
          />
        )}
        {props.status === 'friend' && <Users stroke="#617485" />}
        {props.status !== 'friend' && (
          <Users
            stroke="#AEC6D7"
            onClick={() => {
              props.setPage('friend');
            }}
          />
        )}
        {(props.status === 'chatroom' || props.status === 'chatlist') && (
          <CircleMessage stroke="#617485" />
        )}
        {props.status !== 'chatroom' && props.status !== 'chatlist' && (
          <CircleMessage
            stroke="#AEC6D7"
            onClick={() => {
              props.setPage('chatlist');
            }}
          />
        )}
      </NavInnerDiv>
    </NavDiv>
  );
}

export default PhoneNav;

const NavDiv = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0;
`;

const NavInnerDiv = styled.div`
  display: flex;
  padding: 0.5rem 3rem 0rem 3rem;
  justify-content: space-between;
`;
