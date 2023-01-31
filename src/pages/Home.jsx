import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Login from '../components/auth/login/Login';

import { getAuthToken, removeTokens } from '../utils/token';

const Home = () => {
  const [token, setToken] = useState(getAuthToken());
  const [loginShown, setLoginShown] = useState(false);
  const navigate = useNavigate();

  const showLoginHandler = () => {
    setLoginShown(true);
  };

  const hideLoginHandler = () => {
    setLoginShown(false);
    setToken(getAuthToken());
  };

  const registerHandler = () => {
    navigate('/register');
  };

  const logoutHandler = () => {
    removeTokens();
    setToken(getAuthToken());
  };

  return (
    <SectionStyle>
      <button onClick={showLoginHandler}>로그인</button>
      {loginShown && <Login onClose={hideLoginHandler} />}
      <button onClick={registerHandler}>회원가입</button>
      <button onClick={logoutHandler}>로그아웃</button>
      {token}
    </SectionStyle>
  );
};

export default Home;

const SectionStyle = styled.section`
  background-color: antiquewhite;
  height: 100vh;
`;
