import styled from 'styled-components';
import BoardCard from './card/BoardCard';

const BoardFeed = () => {
  return (
    <SectionStyle>
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
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
