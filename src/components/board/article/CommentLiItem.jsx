import styled from 'styled-components';
import Avatar from './Avatar';
import Heart from '../list/Heart';

const CommentLiItem = () => {
  return (
    <LiSection>
      <Avatar />
      <InputWrapperStyle>
        <DivStyle>
          <TitleStyle>
            김싸피<span>22.22.22</span>
          </TitleStyle>
          <ButtonWrapper>
            <ButtonStyle>수정하기</ButtonStyle>
            <ButtonStyle>대댓글</ButtonStyle>
            <LikeDivStyle>
              {/* <Heart type="1" no={card.article_no} isLike={card.my_like} /> */}
              {/* <p>{card.like}</p> */}
              <Heart type="1" no="1" isLike="1" />
              <p>12</p>
            </LikeDivStyle>
          </ButtonWrapper>
        </DivStyle>
        <ContentStyle>으아아아ㅏ아아아ㅏ아악</ContentStyle>
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
`;

const TitleStyle = styled.div`
  & span {
    padding-left: 0.7rem;
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
  font-size: 0.8rem;
  & svg {
    font-size: 0.8rem;
  }
`;

const ContentStyle = styled.div`
  padding: 0.7rem;
`;
