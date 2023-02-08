import { useState } from 'react';
import BoardCard from './BoardCard';
import styled from 'styled-components';
import Masonry from '@mui/lab/Masonry';

const BoardFeed = ({ boardList }) => {
  const [columns, setColumns] = useState(4);

  window.addEventListener(`resize`, function () {
    if (window.innerWidth > 1200) {
      setColumns(4);
    } else if (window.innerWidth > 950) {
      setColumns(3);
    } else if (window.innerWidth > 700) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  });

  return (
    <SectionStyle>
      {boardList.length !== 0 ? (
        <Masonry columns={columns} spacing={2}>
          {boardList.map((card, index) => (
            <BoardCard key={index} card={card} />
          ))}
        </Masonry>
      ) : (
        <DivStyle>검색 결과가 없습니다.</DivStyle>
      )}
    </SectionStyle>
  );
};

export default BoardFeed;

const SectionStyle = styled.section`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-wrap: wrap;
  min-height: 30rem;
`;

const DivStyle = styled.div`
  width: 100%;
  height: 5rem;
  text-align: center;
`;
