import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getBoardList } from '../../services/board-service';

import BoardFeed from './list/BoardFeed';
import BoardNavbar from './navbar/BoardNavbar';

const BoardMainSection = () => {
  const navigate = useNavigate();
  const [querys] = useSearchParams();
  const user = useSelector((state) => state.auth.user);
  const [boardList, setBoardList] = useState([]);
  const [queryString, setQueryString] = useState('');

  // 초기 전체 리스트
  useEffect(() => {
    const setBoard = async () => {
      const key = querys.get('key') || 'null';
      const popularity = querys.get('popularity') || 'false';
      const user_id = querys.get('user_id') || user.user_id;
      const word = querys.get('word') || 'null';

      setQueryString(
        `key=${key}&popularity=${popularity}&user_id=${user_id}&word=${word}`
      );
      // const newList = await getBoardList(null, false, user.user_id, null);
      const newList = await getBoardList(key, popularity, user_id, word);
      setBoardList(newList);
    };
    if (user.user_id) {
      setBoard();
    }
  }, [user, querys]);

  const goWrite = () => {
    navigate('/board/write');
  };

  return (
    <SectionStyle>
      <WrapperStyle>
        <BoardNavbar setBoardList={setBoardList}></BoardNavbar>
        <DivStyle>
          <ButtonStyle onClick={goWrite}>글쓰기</ButtonStyle>
          <BoardFeed page={queryString} boardList={boardList}></BoardFeed>
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
  background-color: #e0f4ff;
  color: #868e96;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;
