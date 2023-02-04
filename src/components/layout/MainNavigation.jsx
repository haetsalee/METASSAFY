import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function MainNavigation() {
  return (
    <HeaderStyle>
      <LogoStyle>METASSAFY</LogoStyle>
      <nav>
        <UlStyle>
          <LiStyle>
            <NavLink to="/">MainPage</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/user-profile-page">UserProfilePage</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page1">Test Page1</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page2">Canvas</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page3">Metaverse Test</NavLink>
          </LiStyle>
        </UlStyle>
      </nav>
    </HeaderStyle>
  );
}

export default MainNavigation;

const HeaderStyle = styled.header`
  width: 100%;
  box-sizing: border-box;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to left, #c1a1d3, #c3ddff);
  /* background-color: #c1a1d3; */
  padding: 0 10%;
`;

const LogoStyle = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

const UlStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`;

const LiStyle = styled.li`
  margin-left: 3rem;

  & > a {
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    :hover {
      color: navy;
    }
    :active {
      color: navy;
    }
  }

  & > a.active {
    color: #3d3d3d;
  }
  & > a.active:hover {
    color: navy;
  }
`;
