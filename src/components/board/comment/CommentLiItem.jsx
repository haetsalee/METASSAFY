import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchCommentDelete,
  fetchCommentGet,
} from '../../../services/board-service';
import Avatar from '../article/Avatar';
import Heart from '../list/Heart';

const CommentLiItem = ({ comment, setComments }) => {
  const user = useSelector((state) => state.auth.user);
  const [likeNum, setLikeNum] = useState(comment.memo_like);
  const [isLike, setIsLike] = useState(comment.my_like);

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
    console.log('?');
  };

  return (
    <LiSection>
      <Avatar img={comment.profile_img} />
      <InputWrapperStyle>
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
      </InputWrapperStyle>
    </LiSection>
  );
};

export default CommentLiItem;

const LiSection = styled.li`
  width: 100%;
  display: flex;
  margin: 1rem 0;
`;

const InputWrapperStyle = styled.div`
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
  padding: 0.6rem 0;
  color: #3d4248;
  font-size: 0.8rem;
`;
