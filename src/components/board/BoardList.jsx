import React from 'react';
import { useEffect, useState } from 'react';
import { getLocalUserInfo } from '../../utils/local-storage';
import styled from 'styled-components';
import API from '../../utils/api';
const BoardList = ({ changeMode, setArticle }) => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(getLocalUserInfo());
  const loginUser = JSON.parse(user);

  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    API.get('/board').then(function (response) {
      setList(response.data);
    });
  };
  const boardItemHandler = (value) => {
    setArticle(value);
    changeMode('item');
  };

  return (
    <div>
      <BoardListDiv>
        {list.map((value, index) => (
          <BoardItemDiv key={index} onClick={() => boardItemHandler(value)}>
            <p>{value.title}</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
              {value.user_id} {value.regtime} 조회: {value.hit}
            </p>
          </BoardItemDiv>
        ))}
      </BoardListDiv>
    </div>
  );
};

export default BoardList;
const BoardItemDiv = styled.div`
  width: 22rem;
  height: 65px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding: 0.51rem;
`;
const BoardListDiv = styled.div`
  margin: 2rem;
`;
