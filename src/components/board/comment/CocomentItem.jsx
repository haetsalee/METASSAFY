import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchCocommentDelete,
  fetchCocommentGet,
  fetchCommentDelete,
  fetchCommentGet,
} from '../../../services/board-service';
import Avatar from '../article/Avatar';

const CocomentItem = ({ type, comment, setComments }) => {
  const user = useSelector((state) => state.auth.user);

  // 댓글 삭제
  const deleteHandler = async () => {
    if (type == 2) {
      await fetchCocommentDelete(comment.memo_no);
      const { data } = await fetchCocommentGet(
        comment.article_no,
        user.user_id
      );
      setComments(data);
    } else {
      await fetchCommentDelete(comment.memo_no);
      const { data } = await fetchCommentGet(comment.article_no, user.user_id);
      setComments(data);
    }
  };

  return (
    <LiSection>
      <CommentWrapper>
        <Avatar img={comment.profile_img} />
        <CommentDiv>
          <DivStyle>
            <TitleStyle>
              {comment.name}
              <span>{comment.regtime.slice(2)}</span>
            </TitleStyle>
            <ButtonWrapper>
              {comment.user_id === user.user_id && (
                <ButtonStyle onClick={deleteHandler}>삭제하기</ButtonStyle>
              )}
            </ButtonWrapper>
          </DivStyle>
          <ContentStyle>{comment.content}</ContentStyle>
        </CommentDiv>
      </CommentWrapper>
    </LiSection>
  );
};

export default CocomentItem;

const LiSection = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem 0;
`;

const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CommentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DivStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
`;

const TitleStyle = styled.div`
  & span {
    padding-left: 0.5rem;
    font-size: 0.7rem;
    color: #868e96;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-left: 1.5rem;
  padding-right: 1rem;
  color: #868e96;
`;

const ButtonStyle = styled.button`
  width: 5rem;
  font-size: 0.8rem;
  border: none;
  background-color: transparent;
  color: #799fc1;
  padding-right: 0.6rem;
  cursor: pointer;
`;

const ContentStyle = styled.div`
  word-break: break-all;
  padding: 0.6rem 0;
  color: #3d4248;
  font-size: 0.8rem;
`;
