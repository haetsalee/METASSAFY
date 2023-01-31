import styled from 'styled-components';

const UserCheckButton = () => {
  return (
    <RecommendStyle>
      <StyledP>추천 친구</StyledP>
    </RecommendStyle>
  );
};

export default UserCheckButton;

const RecommendStyle = styled.div`
  background-color: #e0f4ff;
  border-radius: 3.6rem;
  display: inline-block;
  height: 2rem;
  width: 17rem;
  position: relative;
  text-align: center;
  line-height: 2rem;
  color: #617485;
`;

const StyledP = styled.p`
  text-align: start;
  color: #617485;
  font-size: 0.9rem;
  margin-left: 1rem;
`;
