import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { BiDotsHorizontal, BiX } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Login from '../auth/login/Login';
import { logoutProcess } from '../../services/auth-service';
import { loginSlice } from '../../store/slice/authSlice';

function MainNavigation() {
  const [MenuShow, setMenuShow] = useState(false);
  const dispatch = useDispatch();

  const onChangeMenuShow = () => {
    setMenuShow(!MenuShow);
  };

  const [loginShown, setLoginShown] = useState(false);
  const navigate = useNavigate();

  const showLoginHandler = () => {
    setLoginShown(true);
  };

  const hideLoginHandler = () => {
    setLoginShown(false);
  };

  const logout = () => {
    logoutProcess();
    // 리덕스에서 삭제
    dispatch(loginSlice(null));
  };
  const user = useSelector((state) => state.auth.user);

  return (
    <HeaderStyle>
      <LogoStyle>
        {!user && (
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
        )}
        {user && (
          <NavLink to="/page3">
            <img
              alt="MetaSSAFY logo"
              src="images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            METASSAFY
          </NavLink>
        )}
        {/* <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            alt="MetaSSAFY logo"
            src="images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          METASSAFY
        </NavLink> */}
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
            <NavLink to="/developers">개발팀</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/board/list">게시판</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to={`/profile/${user?.user_id}`}>프로필</NavLink>
          </LiStyle>
          <LiStyle>
            {!user && <NavLink to="/login">로그인</NavLink>}
            {user && (
              <NavLink to="/" onClick={logout}>
                로그아웃
              </NavLink>
            )}
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
