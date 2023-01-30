import React, { useState } from 'react';
import styled from 'styled-components';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const StyledSection = styled.section`
  background-color: antiquewhite;
  height: 100vh;
`;

const Home = () => {
  const [loginShown, setLoginShown] = useState(false);
  const [registShown, setRegistShown] = useState(false);

  const showLoginHandler = () => {
    setLoginShown(true);
  };

  const hideLoginHandler = () => {
    setLoginShown(false);
  };

  const showRegistHandler = () => {
    setRegistShown(true);
  };

  const hideRegistHandler = () => {
    setRegistShown(false);
  };

  return (
    <StyledSection>
      <button onClick={showLoginHandler}>로그인</button>
      <button onClick={showRegistHandler}>회원가입</button>
      {loginShown && <Login onClose={hideLoginHandler} />}
      {registShown && <Register onClose={hideRegistHandler} />}
    </StyledSection>
  );
};

export default Home;
