import BoardCard from './BoardCard';
import styled from 'styled-components';
import { Masonry } from 'masonic';

const BoardFeed = ({ boardList }) => {
  const renderer = (card) => <BoardCard key={card.index} card={card.data} />;

  return (
    <SectionStyle>
      <Masonry
        // Provides the data for our grid items
        items={boardList}
        // Adds 8px of space between the grid cells
        columnGutter={8}
        // Sets the minimum column width to 230px
        columnWidth={230}
        // Pre-renders 4 windows worth of content
        overscanBy={4}
        // This is the grid item component
        render={renderer}
      />
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
