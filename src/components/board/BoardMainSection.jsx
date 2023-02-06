import styled from 'styled-components';
import BoardFeed from './BoardFeed';
import BoardNavbar from './BoardNavbar';

const BoardMainSection = () => {
  return (
    <SectionStyle>
      <WrapperStyle>
        <BoardNavbar></BoardNavbar>
        <BoardFeed></BoardFeed>
      </WrapperStyle>
    </SectionStyle>
  );
};

export default BoardMainSection;

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
`;

const WrapperStyle = styled.div`
  width: 1200px;
  display: flex;
`;
