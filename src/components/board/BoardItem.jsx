import React from 'react';
import { useEffect, useState } from 'react';
import { getLocalUserInfo } from '../../utils/local-storage';
import styled from 'styled-components';
import API from '../../utils/api';
const BoardItem = ({ changeMode, data }) => {
  const [user, setUser] = useState(getLocalUserInfo());
  const loginUser = JSON.parse(user);
  const [isUpdate, setUpdate] = useState(false);
  useEffect(() => {
    //console.log(data);
  }, []);
  let components;
  const boardItemHandler = () => {
    changeMode('list');
  };

  const updatePost = () => {};
  const deletePost = () => {
    API.delete('board/' + data.article_no).then(function (response) {
      // 성공한 경우 실행
      changeMode('list');
    });
  };

  return (
    <div>
      게시글 내용
      <button onClick={boardItemHandler}>뒤로</button>
      {loginUser != null && data.user_id == loginUser.user_id && (
        <p>
          <button onClick={deletePost}>삭제</button>
        </p>
      )}
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
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </BoardItemDiv>
    </div>
  );
};
export default BoardItem;
const BoardItemDiv = styled.div`
  width: 21rem;

  display: flex;
  flex-direction: column;

  padding: 0.51rem;
`;
