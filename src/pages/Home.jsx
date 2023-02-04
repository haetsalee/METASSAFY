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

import PhoneTest from '../components/phone/PhoneTest';
import { width } from '@mui/system';

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

  const [phoneShown, setPhoneShown] = useState(false);
  const showPhoneHandler = () => {
    setPhoneShown(true);
  };

  const hidePhoneHandler = () => {
    setPhoneShown(false);
    setToken(getLocalAccessToken());
    setUser(getLocalUserInfo());
  };

  const registerHandler = () => {
    navigate('/register');
  };

  const boardHandler = () => {
    navigate('/board');
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
      <h1>MainPage</h1>
      <button onClick={showLoginHandler}>로그인</button>
      {loginShown && <Login onClose={hideLoginHandler} />}

      <button onClick={registerHandler}>회원가입</button>
      <button onClick={logoutHandler}>로그아웃</button>
      <button onClick={userHandler}>로그인 후 유저정보</button>
      <button onClick={() => navigate('/profile-modify')}>
        프로필 수정 페이지로
      </button>
      <div style={{ wordBreak: 'break-all' }}>{token}</div>
      <br />
      <div style={{ wordBreak: 'break-all' }}>{user}</div>

      <button onClick={boardHandler}>게시판 테스트</button>

      <button onClick={showPhoneHandler}>
        <img
          style={{ width: 50 }}
          src="https://wimg.mk.co.kr/news/cms/202301/18/news-p.v1.20230118.5720aed139884d96930126fde7d581e1_P1.jpg"
        />
      </button>
      {phoneShown && <PhoneTest onClose={hidePhoneHandler} />}
    </SectionStyle>
  );
};

export default Home;

const SectionStyle = styled.section`
  background-color: antiquewhite;
  width: 100vw;
  height: 100vh;
`;
