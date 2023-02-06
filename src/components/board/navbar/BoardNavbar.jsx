import { useState } from 'react';
import styled from 'styled-components';
import BoardNavbarItem from './BoardNavbarItem';

const menuList = [
  { label: '전체', active: true, type: 'recent' },
  { label: '지역별', active: false, type: 'area' },
  { label: '인기순', active: false, type: 'like' },
  { label: '내 게시글', active: false, type: 'my' },
  { label: '게시글 검색', active: false, type: 'search' },
];

const BoardNavbar = ({ setBoardList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <UlStyle>
      {menuList.map((menu, index) => {
        return (
          <BoardNavbarItem
            key={index}
            menu={menu}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setBoardList={setBoardList}
          ></BoardNavbarItem>
        );
      })}
    </UlStyle>
  );
};

export default BoardNavbar;

const UlStyle = styled.ul`
  width: 12rem;
`;
