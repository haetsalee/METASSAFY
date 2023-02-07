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
    API.get('/board/' + value).then(function (response) {
      setArticle(response.data);
      changeMode('item');
    });
  };

  return (
    <div>
      <BoardListDiv>
        {list.map((value, index) => (
          <BoardItemDiv
            key={index}
            onClick={() => boardItemHandler(value.article_no)}
          >
            <img
              src={value.thumbnail}
              style={{
                height: '40px',
                width: '60px',
                float: 'right',
                display: 'block',
              }}
            />
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
  width: 21rem;
  height: 65px;

  flex-direction: column;
  border-bottom: 1px solid gray;
  padding: 0.51rem;
`;
const BoardListDiv = styled.div`
  margin: 2rem;
  height: 30rem;
  overflow: auto;
`;
const Thumbnail = styled.image`
  height: 60px;
  width: 60px;
  border: 1px solid black;
`;
