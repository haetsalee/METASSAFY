import { useContext } from 'react';
// import { Link } from 'react-router-dom';
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
            <NavLink to="/page1">page1</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page2">page2</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page3">page3</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/intro">소개</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/board">게시판</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/profile">프로필</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/developers">개발팀</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/login">로그인</NavLink>
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
    font-size: 1rem;
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
