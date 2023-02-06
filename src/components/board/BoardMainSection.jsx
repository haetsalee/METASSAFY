import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import BoardFeed from './BoardFeed';
import BoardNavbar from './BoardNavbar';

// recent, like
// gumi, seoul, daegeon, bul, gwang
// my(id)
// writer(id), title(word), content(word)
const BoardMainSection = () => {
  const [boardList, setBoardList] = useState([]);
  const [sortType, setSortType] = useState('recent');

  console.log(sortType);
  useEffect(() => {
    // list
    // setBoardList();
  }, []);

  return (
    <SectionStyle>
      <WrapperStyle>
        <BoardNavbar setBoardList={setBoardList}></BoardNavbar>
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
