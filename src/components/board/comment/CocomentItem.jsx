import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  fetchCocommentDelete,
  fetchCocommentGet,
} from '../../../services/board-service';
import Avatar from '../article/Avatar';

const CocomentItem = ({ cocomment, setCocomments, user_id }) => {
  const navigation = useNavigate();

  // 댓글 삭제
  const deleteHandler = async () => {
    await fetchCocommentDelete(cocomment.mememo_no);
    const { data, status } = await fetchCocommentGet(
      cocomment.memo_no,
      user_id
    );
    // 대댓 없으면
    if (status === 500) {
      setCocomments([]);
    } else {
      // 있으면
      setCocomments(data);
    }
  };

  return (
    <LiSection>
      <CommentWrapper>
        <Avatar img={cocomment.profile_img} />
        <CommentDiv>
          <DivStyle>
            <TitleStyle
              onClick={() => {
                navigation(`/profile/${cocomment.user_id}`);
              }}
            >
              {cocomment.name}
              <span>{cocomment.regtime.slice(2)}</span>
            </TitleStyle>
            <ButtonWrapper>
              {cocomment.user_id === user_id && (
                <ButtonStyle onClick={deleteHandler}>삭제하기</ButtonStyle>
              )}
            </ButtonWrapper>
          </DivStyle>
          <ContentStyle>{cocomment.content}</ContentStyle>
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
