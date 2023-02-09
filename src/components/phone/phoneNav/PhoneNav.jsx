import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Users } from '../../../assets/icons/users.svg';
import { ReactComponent as CircleMessage } from '../../../assets/icons/messageCircle.svg';
import { ReactComponent as Logout } from '../../../assets/icons/log-out.svg';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styled from 'styled-components';

function PhoneNav(props) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const goNavbar = (page) => {
    navigate(page);
  };

  return (
    <NavDiv>
      <UlStyle>
        <LiStyle>
          <NavLink to={`profile/${user.user_id}`}>
            <User />
          </NavLink>
        </LiStyle>
        <LiStyle>
          <NavLink to="friend">
            <Users />
          </NavLink>
        </LiStyle>
        <LiStyle>
          <NavLink to="chat">
            <CircleMessage />
          </NavLink>
        </LiStyle>
        <LiStyle>
          <NavLink to="/metassafy">
            <Logout />
          </NavLink>
        </LiStyle>
      </UlStyle>
    </NavDiv>
  );
}

export default PhoneNav;

const NavDiv = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0;
  background-color: white;
  padding-top: 10px;
  border-radius: 30px;
  z-index: 11;
`;

const UlStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const LiStyle = styled.li`
  & > a > svg {
    text-decoration: none;
    font-size: 1rem;
    stroke: #aec6d7;
    :hover {
      stroke: navy;
    }
    :active {
      stroke: navy;
    }
  }

  & > a.active > svg {
    stroke: #617485;
  }
  & > a.active:hover > svg {
    stroke: #617485;
  }
`;
