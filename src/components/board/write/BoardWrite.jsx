import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { BsPencilSquare } from 'react-icons/bs';
import BoardWriteInput from './BoardWriteInput';
import BoardWriteImage from './BoardWriteImage';
import { fetchBoardPost, fetchBoardGet } from '../../../services/board-service';

const BoardWrite = () => {
  const { id: article_no } = useParams();
  const navigator = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [article, setArticle] = useState({
    title: '',
    content: '',
    thumbnail: '',
    files: [],
  });
  const [files, setFiles] = useState([]);

  // 수정이면 기존 데이터 삽입
  useEffect(() => {
    const getArticle = async () => {
      const { data } = await fetchBoardGet(article_no, user.user_id);
      setArticle({
        title: data.title,
        content: data.content,
        thumbnail: data.thumbnail,
        files: data.files,
      });
    };
    if (article_no && user.user_id) {
      getArticle();
    }
  }, [article_no, user.user_id]);

  // 작성 결과 제출
  const handleSubmit = (e) => {
    e.preventDefault();

    const boardDto = {
      user_id: user.user_id,
      title: article.title,
      content: article.content,
    };

    const formData = new FormData();
    formData.append(
      'boardDto',
      new Blob([JSON.stringify(boardDto)], {
        type: 'application/json',
      })
    );
    formData.append('thumbnail', files[0]);
    if (files.length > 1) {
      for (let i = 1; i < files.length; i++) {
        formData.append('files', files[i]);
      }
    } else {
      formData.append('files', null);
    }

    const uploadBoard = async () => {
      // post, put !
      const { status } = await fetchBoardPost(formData);
      if (status) {
        navigator('/board/list');
      }
    };
    uploadBoard();
  };

  return (
    <WriteSection>
      <form method="post" encType="multipart/form-data">
        <BoardWriteInput
          type="title"
          label="제목"
          placeholder="제목"
          value={article.title}
          setValue={setArticle}
        />
        <BoardWriteInput
          type="content"
          label="본문"
          placeholder="새 글 작성"
          value={article.content}
          setValue={setArticle}
        />
        <BoardWriteImage files={files} setFiles={setFiles} />
        <HrStyle />
        <BoardWriteButtonStyle onClick={handleSubmit}>
          <BsPencilSquare style={{ fontSize: '0.9rem' }} />
          <p>저장</p>
        </BoardWriteButtonStyle>
      </form>
    </WriteSection>
  );
};
export default BoardWrite;

const WriteSection = styled.section`
  width: 70%;
  margin-top: 8rem;
`;

const HrStyle = styled.hr`
  background-color: #ced4da;
  border: none;
  height: 0.1px;
  margin: 1rem 0;
`;

const BoardWriteButtonStyle = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  float: right;
  width: 7rem;
  padding: 0.5rem 2rem;
  border-radius: 8px;
  border: none;
  background-color: #799fc1;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
`;
