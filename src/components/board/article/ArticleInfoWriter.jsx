import styled from 'styled-components';
import Heart from '../list/Heart';

const ArticleInfoWriter = ({ card }) => {
  return (
    <>
      <div>
        <WriterStyle>글 작성자</WriterStyle>
        <TimeStyle>작성 시간 : 2022.22.22</TimeStyle>
        <TimeStyle>수정 시간 : 2022.22.22</TimeStyle>
      </div>
      <LikeDivStyle>
        {/* <Heart type="1" no={card.article_no} isLike={card.my_like} /> */}
        {/* <p>{card.like}</p> */}
        <Heart type="1" no="1" isLike="1" />
        <p>12</p>
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
