import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Users } from '../../../assets/icons/users.svg';
import { ReactComponent as CircleMessage } from '../../../assets/icons/messageCircle.svg';

import styled from 'styled-components';
import { useState } from 'react';

function PhoneNav() {
  const [userCheck, setUserCheck] = useState(false);
  const [usersCheck, setUsersCheck] = useState(false);
  const [messageCheck, setMessageCheck] = useState(false);
  return (
    <NavDiv>
      <NavInnerDiv>
        <User stroke="#617485" />
        <User stroke="#AEC6D7" />
        <Users stroke="#617485" />
        <Users stroke="#AEC6D7" />
        <CircleMessage stroke="#617485" />
        <CircleMessage stroke="#AEC6D7" />
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
