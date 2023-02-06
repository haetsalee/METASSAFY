import styled from 'styled-components';
import { css } from 'styled-components';

import BoardNavbarDrop from './BoardNavbarDrop';

//{ label: '전체', active: true, type: 'recent' },
const BoardNavbarItem = ({
  menu,
  index,
  activeIndex,
  setActiveIndex,
  setBoardList,
}) => {
  const clickHandler = () => {
    // button active
    setActiveIndex(index);

    // get new board
    const newList = [];
    // api
    console.log(menu.type);
    setBoardList(newList);
  };

  let dropDown = null;
  if (index === activeIndex) {
    if (menu.type === 'area') {
      dropDown = <BoardNavbarDrop type={menu.type} />;
    } else if (menu.type === 'search') {
      dropDown = <BoardNavbarDrop type={menu.type} />;
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
    border-radius: 7px;
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
