import React from 'react';
import { useEffect, useState } from 'react';
import { getLocalUserInfo } from '../../utils/local-storage';
import styled from 'styled-components';
import API from '../../utils/api';
const BoardItem = ({ changeMode, data }) => {
  const [user, setUser] = useState(getLocalUserInfo());
  const loginUser = JSON.parse(user);

  useEffect(() => {
    //getList();
  }, []);

  const boardItemHandler = () => {
    changeMode('list');
  };

  return (
    <div>
      게시글 내용
      <button onClick={boardItemHandler}>뒤로</button>
      <br></br>
      <BoardItemDiv>
        <p style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>{data.title}</p>
        <p
          style={{
            marginTop: '0.5rem',
            fontSize: '0.8rem',
            borderBottom: '1px solid black',
          }}
        >
          {data.user_id} {data.regtime} 조회: {data.hit}
        </p>
        <div style={{ marginTop: '1rem' }}>{data.content}</div>
      </BoardItemDiv>
    </div>
  );
};
export default BoardItem;
const BoardItemDiv = styled.div`
  width: 22rem;

  display: flex;
  flex-direction: column;

  padding: 0.51rem;
`;
