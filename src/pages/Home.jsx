import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginSlice } from '../store/slice/authSlice';
import { logoutProcess } from '../services/auth-service';
import Login from '../components/auth/login/Login';

import styled from 'styled-components';

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

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

  return (
    <SectionStyle>
      {!user && <button onClick={showLoginHandler}>로그인</button>}
      {loginShown && <Login onClose={hideLoginHandler} />}
      {!user && <button onClick={() => navigate('/register')}>회원가입</button>}
      <button onClick={logout}>로그아웃</button>
      <button onClick={() => navigate('/profile/modify')}>
        프로필 수정 페이지로
      </button>
      {user && (
        <div style={{ wordBreak: 'break-all' }}>{JSON.stringify(user)}</div>
      )}
      <button onClick={() => navigate('/board')}>게시판 테스트</button>
      <button onClick={() => navigate('/unity')}>유니티</button>
    </SectionStyle>
  );
};

export default Home;

const SectionStyle = styled.section`
  background-color: antiquewhite;
  width: 100vw;
  height: 100vh;
`;
