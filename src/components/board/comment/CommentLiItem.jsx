import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchCocommentGet,
  fetchCommentDelete,
  fetchCommentGet,
} from '../../../services/board-service';
import Avatar from '../article/Avatar';
import Heart from '../list/Heart';
import CommentInput from './CommentInput';
import { BsArrowReturnRight } from 'react-icons/bs';
import CocomentItem from './CocomentItem';

const CommentLiItem = ({ comment, setComments, cocomments, setCocomments }) => {
  const user = useSelector((state) => state.auth.user);
  const [likeNum, setLikeNum] = useState(comment.memo_like);
  const [isLike, setIsLike] = useState(comment.my_like);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    setLikeNum(comment.memo_like);
    setIsLike(comment.my_like);
  }, [comment]);

  // 댓글 삭제
  const deleteHandler = async () => {
    await fetchCommentDelete(comment.memo_no);
    const { data } = await fetchCommentGet(comment.article_no, user.user_id);
    setComments(data);
  };

  // 메메모 작성
  const showMememoHandler = () => {
    setIsWriting((preState) => !preState);
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
              <ButtonStyle onClick={showMememoHandler}>대댓글</ButtonStyle>
              <LikeDivStyle>
                <Heart
                  type="2"
                  no={comment.memo_no}
                  isLike={isLike}
                  setLikeNum={setLikeNum}
                  setIsLike={setIsLike}
                />
                <p style={{ marginLeft: '0.3rem' }}>{likeNum}</p>
              </LikeDivStyle>
            </ButtonWrapper>
          </DivStyle>
          <ContentStyle>{comment.content}</ContentStyle>
        </CommentDiv>
      </CommentWrapper>
      <CocomentWrapper>
        <CocommentUlStyle>
          {cocomments.map((comment, index) => {
            return (
              <CocomentItem
                type="2"
                key={index}
                comment={comment}
                setComments={setCocomments}
              />
            );
          })}
        </CocommentUlStyle>
        {isWriting && (
          <CocomentWriteWrapper>
            <BsArrowReturnRight />
            <CommentInput
              user_id={user.user_id}
              article_no={comment.article_no}
              setComments={setCocomments}
            />
          </CocomentWriteWrapper>
        )}
      </CocomentWrapper>
    </LiSection>
  );
};

export default CommentLiItem;

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

const LikeDivStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  & svg {
    font-size: 0.8rem;
  }
`;

const ContentStyle = styled.div`
  word-break: break-all;
  padding: 0.6rem 0;
  color: #3d4248;
  font-size: 0.8rem;
`;

const CocomentWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const CocomentWriteWrapper = styled.div`
  height: 5rem;
  display: flex;

  & svg {
    margin-right: 1rem;
  }
`;

const CocommentUlStyle = styled.ul`
  width: 100%;
  margin-top: 1.2rem;
`;
