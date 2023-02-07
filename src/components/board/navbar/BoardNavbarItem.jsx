import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { getBoardList } from '../../../services/board-service';

const BoardNavbarItem = ({
  menu,
  index,
  activeIndex,
  setActiveIndex,
  setBoardList,
}) => {
  const user = useSelector((state) => state.auth.user);

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

  return (
    <LiStyle index={index} activeIndex={activeIndex}>
      <button onClick={clickHandler}>{menu.label}</button>
    </LiStyle>
  );
};

export default BoardNavbarItem;

const LiStyle = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
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
