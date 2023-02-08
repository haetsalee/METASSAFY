import styled from 'styled-components';
import CommentInput from './CommentInput';
import CommentLiItem from './CommentLiItem';

const Comments = () => {
  return (
    <>
      <h1 style={{ fontSize: '1.2rem' }}>댓글</h1>
      <CommentWrapper>
        <CommentInput />
        <CommentUlStyle>
          <CommentLiItem />
          <CommentLiItem />
        </CommentUlStyle>
      </CommentWrapper>
    </>
  );
};

export default Comments;

const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;
`;

const CommentUlStyle = styled.ul`
  width: 80%;
  margin-top: 1.2rem;
  margin-bottom: 7rem;
`;
