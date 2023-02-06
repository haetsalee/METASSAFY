import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';

import BoardNavbarDrop from './BoardNavbarDrop';
import { getBoardList } from '../../../services/board-service';

const BoardNavbarItem = ({
  menu,
  index,
  activeIndex,
  setActiveIndex,
  setBoardList,
}) => {
  const user = useSelector((state) => state.auth.user);
  const [keyword, setKeyword] = useState({});
  const [isTouched, setIsTouched] = useState(false);

  // 하위 드롭박스에서 검색 시 리스트 업데이트
  useEffect(() => {
    const setBoard = async () => {
      if (isTouched) {
        const newList = await getBoardList(
          keyword.key,
          false,
          user.user_id,
          keyword.word
        );
        setBoardList(newList);
      }
    };
    setBoard();
    setIsTouched(true);
  }, [keyword]);

  // 넷바 클릭 시 리스트 업데이트
  const clickHandler = async () => {
    // button active css
    if (index === activeIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }

    // api
    // 넷바 클릭시 (전체, 인기순, 게시글)
    if (menu.type === 'recent') {
      const newList = await getBoardList(null, false, user.user_id, null);
      setBoardList(newList);
    } else if (menu.type === 'like') {
      const newList = await getBoardList(null, true, user.user_id, null);
      setBoardList(newList);
    } else if (menu.type === 'my') {
      const newList = await getBoardList(
        'user_id',
        false,
        user.user_id,
        user.user_id
      );
      setBoardList(newList);
    }
  };

  let dropDown = null;
  if (index === activeIndex) {
    if (menu.type === 'area') {
      dropDown = <BoardNavbarDrop setKeyword={setKeyword} type={menu.type} />;
    } else if (menu.type === 'search') {
      dropDown = <BoardNavbarDrop setKeyword={setKeyword} type={menu.type} />;
    }
  }

  return (
    <LiStyle index={index} activeIndex={activeIndex}>
      <button onClick={clickHandler}>{menu.label}</button>
      {dropDown}
    </LiStyle>
  );
};

export default BoardNavbarItem;

const LiStyle = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;
  height: 2rem;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    text-align: center;
    border: none;
    border-radius: 20px;
    background-color: white;
    color: #868e96;
    position: relative;
    cursor: pointer;
    ${(props) => {
      if (props.index === props.activeIndex) {
        return css`
          color: #617485;
          background-color: #e0f4ff;
        `;
      }
    }}
    :hover, :active {
      color: #617485;
      background-color: #e0f4ff;
    }
  }
`;
