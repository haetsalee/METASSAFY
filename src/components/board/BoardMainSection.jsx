import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { fetchBoardList } from '../../services/board-service';

import BoardFeed from './BoardFeed';
import BoardNavbar from './navbar/BoardNavbar';

// recent, like
// gumi, seoul, daegeon, bul, gwang
// my(id)
// writer(id), title(word), content(word)
const BoardMainSection = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    // list
    const getList = async () => {
      const res = await fetchBoardList();
      console.log(res);
      // setBoardList();
    };
    getList();
  }, []);

  return (
    <SectionStyle>
      <WrapperStyle>
        <BoardNavbar setBoardList={setBoardList}></BoardNavbar>
        <DivStyle>
          <ButtonStyle>글쓰기</ButtonStyle>
          <BoardFeed></BoardFeed>
        </DivStyle>
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
  padding-top: 3rem;
`;

const DivStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ButtonStyle = styled.button`
  width: 5rem;
  height: 2rem;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  border: none;
  border-radius: 20px;
  background-color: white;
  color: #868e96;
  position: relative;
`;
