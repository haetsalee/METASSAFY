import React from 'react';
import { useEffect, useState } from 'react';
import { getLocalUserInfo } from '../../utils/local-storage';
import styled from 'styled-components';
import API from '../../utils/api';
const BoardWrite = ({ changeMode }) => {
  const [user, setUser] = useState(getLocalUserInfo());
  const loginUser = JSON.parse(user);
  let content;

  useEffect(() => {
    //getList();
  }, []);

  const boardHandler = () => {
    changeMode('list');
  };

  const write = () => {
    let content = document.getElementById('writeArea').innerHTML;
    let title = document.getElementById('titleArea').innerHTML;
    submitPost(content, title);
  };
  const submitPost = (content, title) => {
    console.log({
      user_id: loginUser.user_id,
      title: title,
      content: content,
    });
    API.post('/board', {
      user_id: loginUser.user_id,
      title: title,
      content: content,
    });
  };
  return (
    <div>
      게시글 쓰기
      <button onClick={boardHandler}>뒤로</button>
      <br></br>
      제목:
      <div
        style={{ width: '80%', border: '1px solid black', float: 'right' }}
        contentEditable
        suppressContentEditableWarning
        id="titleArea"
      ></div>
      <WriteArea
        contentEditable
        suppressContentEditableWarning
        id="writeArea"
      ></WriteArea>
      <button onClick={write}>작성하기</button>
    </div>
  );
};
export default BoardWrite;
const WriteArea = styled.div`
  width: 22rem;
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem auto;
  height: 30rem;
  flex-direction: column;
`;
