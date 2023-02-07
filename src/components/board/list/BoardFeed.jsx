import styled from 'styled-components';
import BoardCard from './BoardCard';

const BoardFeed = ({ boardList }) => {
  return (
    <SectionStyle>
      {boardList &&
        boardList.map((card, index) => {
          return <BoardCard key={index} card={card} />;
        })}
    </SectionStyle>
  );
};

export default BoardFeed;

const SectionStyle = styled.section`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-wrap: wrap;
`;
