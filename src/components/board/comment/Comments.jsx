import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCommentGet } from '../../../services/board-service';
import CommentInput from './CommentInput';
import CommentLiItem from './CommentLiItem';

const Comments = ({ user_id, article_no }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      const { data } = await fetchCommentGet(article_no, user_id);
      setComments(data);
    };
    if (article_no) {
      getComment();
    }
  }, [user_id, article_no]);

  return (
    <>
      <h1 style={{ fontSize: '1.2rem' }}>댓글</h1>
      <CommentWrapper>
        <InputWrapper>
          <CommentInput
            user_id={user_id}
            article_no={article_no}
            setComments={setComments}
          />
        </InputWrapper>
        <CommentUlStyle>
          {comments.map((comment, index) => {
            return (
              <CommentLiItem
                key={index}
                comment={comment}
                setComments={setComments}
              />
            );
          })}
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

const InputWrapper = styled.div`
  width: 80%;
  height: 8rem;
`;

const CommentUlStyle = styled.ul`
  width: 80%;
  margin-top: 1.2rem;
  margin-bottom: 7rem;
`;
