import React from 'react';

import styled from 'styled-components';
import Phone from '../components/UI/Phone';
import BoardList from '../components/board/BoardList';
import BoardItem from '../components/board/BoardItem';
import BoardWrite from '../components/board/BoardWrite';
import { getLocalUserInfo } from '../utils/local-storage';
import { useEffect, useState } from 'react';
const Board = () => {
  const [user, setUser] = useState(getLocalUserInfo());
  const loginUser = JSON.parse(user);
  const [mode, setMode] = useState('list');
  const [data, setData] = useState();
  let components;
  const changeMode = (x) => {
    setMode(x);
  };

  const setArticle = (data) => {
    setData(data);
    //console.log(data);
  };
  const clickWriteBtn = () => {
    if (loginUser == null) alert('로그인 먼저!');
    else setMode('write');
  };

  if (mode == 'item') {
    components = <BoardItem changeMode={changeMode} data={data} />;
  } else if (mode == 'write') {
    components = <BoardWrite changeMode={changeMode} />;
  } else {
    components = <BoardList changeMode={changeMode} setArticle={setArticle} />;
  }
  return (
    <div>
      <Phone>
        여기는 게시판<button onClick={clickWriteBtn}>글쓰기</button>
        {components}
      </Phone>
    </div>
  );
};

export default Board;

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperStyle = styled.div`
  width: 350px;
`;
