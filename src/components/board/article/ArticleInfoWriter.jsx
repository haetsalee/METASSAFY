import styled from 'styled-components';
import Heart from '../list/Heart';

const ArticleInfoWriter = ({ article }) => {
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
        <Heart type="1" no={article.article_no} isLike={article.my_like} />
        <p>{article.like}</p>
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
