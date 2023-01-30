import { useState } from 'react';
import styled from 'styled-components';

const StyledOptionItem = styled.li`
  box-sizing: border-box;
  padding: 0.8rem 1rem 0.8rem 1rem;
  transition: 0.3s;
  &:hover {
    background: pink;
  }
`;

const activeExist = ({ active = true }) => {
  return `max-height: ${active ? '300px' : '0'}`;
};

export const StyledOptionList = styled.ul`
  box-sizing: border-box; // 테두리에 맞게 ul 크기 조절
  position: absolute; // absolute를 이용해 위치를 원하는 곳에 둘것.
  top: 2.6rem; // 그곳에 위에서부터 2.6rem(드롭다운본체의 크기)만큼 떨어진 곳.
  list-style-type: none; // ul을 커스텀할 거라면 꼭 해줘야하는 list-style-type:none
  width: 100%; // 크기는 드롭다운 본체의 너비와 동일하게함.
  border-radius: 8px; // 동글동글하게 아래부분을 만들어야해서 border-radius를 줌.
  background: #ffffff; // 배경색
  ${activeExist};
  transition: 0.2s ease-in-out; // 0.2초를 걸려서 부드럽게 ul이 보이고 사라진다.
  overflow-y: scroll; // scroll을 통해 리스트 내용들을 보겠다.
  &::-webkit-scrollbar {
    // scrollbar 자체의 설정
    // 너비를 작게 설정
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    // scrollbar의 배경부분 설정
    // 부모와 동일하게 함(나중에 절전모드, 밤모드 추가되면 수정하기 번거로우니까... 미리 보이는 노동은 최소화)
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    // scrollbar의 bar 부분 설정
    // 동글동글한 회색 바를 만든다.
    border-radius: 1rem;
    background: pink;
  }
  &::-webkit-scrollbar-button {
    // scrollbar의 상하단 위/아래 이동 버튼
    // 크기를 안줘서 안보이게 함.
    width: 0;
    height: 0;
  }
`;

const StyledSelectedLabel = styled.button`
  // display설정
  display: flex;
  align-items: center;
  border: none;
  // 크기 설정
  box-sizing: border-box;
  width: inherit;
  height: inherit;
  // more 아이콘과 가까운 위치에 글자를 두기 위함.
  justify-content: right;
  padding-right: 2.5rem;
  // 글자 크기 설정
  font-size: 1rem;
  // more아이콘 설정
  background: url('/icons/expand_more.png') calc(100% - 0.5rem) center no-repeat;
  background-size: 2rem;
  // 커서가 올라오면 pointer모양으로 변경
  cursor: pointer;
`;

const StyledSelectbox = styled.div`
  position: relative;
  width: 8rem;
  height: 2.6rem;
  border-radius: 8px;
  background: #ffffff;
  cursor: pointer;
`;

const Dropdown = ({ list }) => {
  const [acitve, setActive] = useState(false); // 리스트가 열려있는지 확인
  const [selected, setSelected] = useState(list[0]); // 선택된 값을 selected에 담아 컴포넌트 간에 공유

  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={selected} onClick={() => setActive(!acitve)}>
        {selected}
      </StyledSelectedLabel>
      <StyledOptionList active={acitve}>
        {list
          .filter((element) => element !== selected)
          .map((element) => (
            <StyledOptionItem
              key={element}
              onClick={() => {
                setActive(false);
                setSelected(element);
              }}
            >
              {element}
            </StyledOptionItem>
          ))}
      </StyledOptionList>
    </StyledSelectbox>
  );
};

export default Dropdown;
