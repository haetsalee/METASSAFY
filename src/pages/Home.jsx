import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Login from '../components/auth/login/Login';
import { fetchUserInfo, logoutProcess } from '../services/auth-service';
import {
  setLocalUserInfo,
  getLocalUserInfo,
  getLocalAccessToken,
} from '../utils/local-storage';

const Home = () => {
  const [token, setToken] = useState(getLocalAccessToken());
  const [user, setUser] = useState(getLocalUserInfo());
  const [loginShown, setLoginShown] = useState(false);
  const navigate = useNavigate();

  const showLoginHandler = () => {
    setLoginShown(true);
  };

  const hideLoginHandler = () => {
    setLoginShown(false);
    setToken(getLocalAccessToken());
    setUser(getLocalUserInfo());
  };

  const registerHandler = () => {
    navigate('/register');
  };

  const logoutHandler = () => {
    setToken(null);
    setUser(null);
    logoutProcess();
  };

  const userHandler = async () => {
    const { error } = await fetchUserInfo();
    if (!error) {
      setUser(getLocalUserInfo());
    }
  };

  return (
    <SectionStyle>
      <button onClick={showLoginHandler}>로그인</button>
      {loginShown && <Login onClose={hideLoginHandler} />}
      <button onClick={registerHandler}>회원가입</button>
      <button onClick={logoutHandler}>로그아웃</button>
      <button onClick={userHandler}>로그인 후 유저정보</button>
      <button onClick={() => navigate('/profile/modify')}>
        프로필 수정 페이지로
      </button>
      <div style={{ wordBreak: 'break-all' }}>{token}</div>
      <br />
      <div style={{ wordBreak: 'break-all' }}>{user}</div>
    </SectionStyle>
  );
};

export default Home;

const SectionStyle = styled.section`
  background-color: antiquewhite;
  width: 100vw;
  height: 100vh;
`;
