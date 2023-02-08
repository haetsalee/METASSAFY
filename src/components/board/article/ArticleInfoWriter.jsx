import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Heart from '../list/Heart';

//   const date = new Date(card.regtime);
//   const strDate =
//     String(date.getFullYear()).slice(2, 4) +
//     '.' +
//     String(date.getMonth()).padStart(2, '0') +
//     '.' +
//     String(date.getDate()).padStart(2, '0');

const ArticleInfoWriter = ({ article }) => {
  const [likeNum, setLikeNum] = useState(article.like);
  const [isLike, setIsLike] = useState(article.my_like);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (!isTouched) {
      setLikeNum(article.like);
      setIsLike(article.my_like);
    }
    if (Object.keys(article).length) {
      setIsTouched(true);
    }
  }, [article]);

  return (
    <>
      <div>
        <WriterStyle>{article.name}</WriterStyle>
        <TimeStyle>
          <div>작성 시간</div>
          {article.modtime}
        </TimeStyle>
        <TimeStyle>
          <div>수정 시간</div>
          {article.regtime}
        </TimeStyle>
      </div>
      <LikeDivStyle>
        <Heart
          type="1"
          no={article.article_no}
          isLike={isLike}
          setLikeNum={setLikeNum}
          setIsLike={setIsLike}
        />
        <p>{likeNum}</p>
      </LikeDivStyle>
    </>
  );
};

export default ArticleInfoWriter;

const WriterStyle = styled.div`
  color: #799fc1;
  font-size: 1.2rem;
  margin-bottom: 0.9rem;
`;
const TimeStyle = styled.div`
  color: #adb5bd;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
`;

const LikeDivStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin: 1rem 0 0 1rem;

  & button svg {
    font-size: 0.8rem;
    margin-right: 0.6rem;
  }

  & p {
    color: red;
  }
`;
