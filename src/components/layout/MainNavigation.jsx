import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BiDotsHorizontal, BiX } from 'react-icons/bi';

function MainNavigation() {
  const [MenuShow, setMenuShow] = useState(false);

  const onChangeMenuShow = () => {
    setMenuShow(!MenuShow);
  };

  return (
    <HeaderStyle>
      <LogoStyle>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            alt="MetaSSAFY logo"
            src="images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          METASSAFY
        </NavLink>
      </LogoStyle>
      {/* <MenuIconStyle
        style={{ textDecoration: 'none' }}
        onClick={() => {
          setMenuShow(!MenuShow);
          // console.log(MenuShow);
        }}
      >
        <IconStyle href="#">
          {MenuShow ? (
            <BiX size="30px"></BiX>
          ) : (
            <BiDotsHorizontal size="30px"></BiDotsHorizontal>
          )}
        </IconStyle>
      </MenuIconStyle> */}
      {/* <Link to="/">
        <LogoStyle>METASSAFY</LogoStyle>
      </Link> */}
      <nav>
        <UlStyle>
          {/* <LiStyle>
            <NavLink to="/">MainPage</NavLink>
          </LiStyle> */}
          {/* <LiStyle>
            <NavLink to="/page1">page1</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page2">page2</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page3">page3</NavLink>
          </LiStyle> */}
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
  /* height: 60px; */
  display: flex;
  align-items: center;
  /* background-color: pink; */
  justify-content: space-between;
  /* background: linear-gradient(to left, #c1a1d3, #c3ddff); */
  /* background-color: #c1a1d3; */
  /* padding: 0 10%; */
  /* position: absolute;
  top: 0; */
  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoStyle = styled.div`
  padding: 5px;
  & > a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    /* :hover {
      color: navy;
    }
    :active {
      color: navy;
    } */
  }
`;

const UlStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const LiStyle = styled.li`
  margin-right: 1rem;
  @media screen and (max-width: 400px) {
    margin-left: 10px;
    margin-bottom: 5px;
  }
  & > a {
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    color: #646464;
    :hover {
      color: #b282d9;
    }
    :active {
      color: #ca97f3;
    }
  }
  & > a.active {
    color: #4f88cd;
  }
  & > a.active:hover {
    color: v;
  }
`;

// const MenuIconStyle = styled.li`
//   position: absolute;
//   text-decoration: none;
//   right: 10px;
//   top: 6px;
//   /* display: none; */
//   @media screen and (max-width: 400px) {
//     display: block;
//   }
// `;

// const IconStyle = styled.a`
//   text-decoration: none;
//   color: #646464;
// `;
