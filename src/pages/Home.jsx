import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Login from '../components/auth/login/Login';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const [loginShown, setLoginShown] = useState(false);
  const navigate = useNavigate();

  const showLoginHandler = () => {
    setLoginShown(true);
  };

  const hideLoginHandler = () => {
    setLoginShown(false);
  };

  const registerHandler = () => {
    navigate('/register');
  };

  useEffect(() => {
    console.log('useeffect', auth);
    if (auth.error !== 'FAIL') {
      console.log('register success', auth);
    }
  }, []);

  return (
    <SectionStyle>
      <button onClick={showLoginHandler}>로그인</button>
      {loginShown && <Login onClose={hideLoginHandler} />}
      <button onClick={registerHandler}>회원가입</button>
    </SectionStyle>
  );
};

export default Home;

const SectionStyle = styled.section`
  background-color: antiquewhite;
  height: 100vh;
`;
