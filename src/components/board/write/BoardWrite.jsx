import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { BsPencilSquare } from 'react-icons/bs';
import BoardWriteInput from './BoardWriteInput';
import BoardWriteImage from './BoardWriteImage';
import {
  fetchBoardImage,
  fetchBoardPost,
  fetchBoardGet,
} from '../../../services/board-service';

const BoardWrite = () => {
  const { id: article_no } = useParams();
  const navigator = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [article, setArticle] = useState({ title: '', content: '' });
  const [file, setFile] = useState();

  // 수정이면 기존 데이터 삽입
  useEffect(() => {
    const getArticle = async () => {
      const { data } = await fetchBoardGet(article_no, user.user_id);
      setArticle({
        title: data.title,
        content: data.content,
        thumbnail: data.thumbnail,
      });
    };
    if (article_no) {
      getArticle();
    }
  }, [article_no, user.user_id]);

  // 사용자가 올린 이미지를 db에 넣고 스토리지에 올라간 링크로 받아옴
  const setImgUrl = async () => {
    const formData = new FormData();
    formData.append('image', file);
    const { data } = await fetchBoardImage(formData); // ???
    return data;
  };

  // 글 작성
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!article.title || !article.content) {
      alert('제목과 내용은 필수 입력입니다.');
      return;
    }

    const uploadArticle = async () => {
      let img;
      // thumbnail
      if (file) {
        img = await setImgUrl();
      }
      console.log(img);
      // article
      const body = {
        user_id: user.user_id,
        title: article.title,
        content: article.content,
        thumbnail: img,
      };
      const { status } = await fetchBoardPost(body);
      if (status) {
        navigator('/board/list');
      }
    };
    uploadArticle();
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
        <BoardWriteImage file={file} setFile={setFile} />
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
