import React from 'react';

import styled from 'styled-components';
import Phone from '../components/UI/Phone';
import BoardList from '../components/board/BoardList';
import BoardItem from '../components/board/BoardItem';
import BoardWrite from '../components/board/BoardWrite';
import { getLocalUserInfo } from '../utils/local-storage';
import { useEffect, useState } from 'react';
const BoardPage = () => {
  const [user, setUser] = useState(getLocalUserInfo());
  const loginUser = JSON.parse(user);
  const [mode, setMode] = useState('list');
  const [data, setData] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  let components;
  const changeMode = (x) => {
    setMode(x);
  };

  const setArticle = (data) => {
    setData(data);
    //console.log(data);
  };
  const setUpdate = (isUpdate) => {
    setIsUpdate(isUpdate);
  };
  const clickWriteBtn = () => {
    if (loginUser == null) alert('로그인 먼저!');
    else setMode('write');
  };

  return <SectionStyle>f</SectionStyle>;
};

export default BoardPage;

const SectionStyle = styled.section`
  background-color: pink;
  min-height: 100vh;
`;

// const BannerDivStyle = styled.
