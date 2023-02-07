import BoardCard from './BoardCard';
import styled from 'styled-components';
import { Masonry } from '@mui/lab';

const BoardFeed = ({ boardList }) => {
  return (
    <SectionStyle>
      <Masonry columns={4} spacing={2}>
        {boardList &&
          boardList.map((card, index) => {
            return <BoardCard key={index} card={card} />;
          })}
      </Masonry>
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
