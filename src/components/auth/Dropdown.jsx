import { useState } from 'react';
import styled from 'styled-components';

import { GrDown } from 'react-icons/gr';

const Dropdown = ({ list, title }) => {
  const [acitve, setActive] = useState(false); // 리스트가 열려있는지 확인
  const [selected, setSelected] = useState(title); // 선택된 값을 selected에 담아 컴포넌트 간에 공유

  return (
    <SelectBoxStyle>
      <SelectLabelStyle value={selected} onClick={() => setActive(!acitve)}>
        {selected}
        <GrDown />
      </SelectLabelStyle>
      <OptionListStyle active={acitve}>
        {list
          .filter((element) => element !== selected)
          .map((element) => (
            <OptionItemStyle
              key={element}
              onClick={() => {
                setActive(false);
                setSelected(element);
              }}
            >
              {element}
            </OptionItemStyle>
          ))}
      </OptionListStyle>
    </SelectBoxStyle>
  );
};

export default Dropdown;

const SelectBoxStyle = styled.div`
  position: relative;
  width: 6.5rem;
  height: 2.6rem;
  cursor: pointer;
`;

const SelectLabelStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #ced4da;
`;

const activeExist = ({ active = true }) => {
  return `max-height: ${active ? '100px' : '0'}`;
};

export const OptionListStyle = styled.ul`
  position: absolute;
  top: 2.7rem;
  width: 100%;
  ${activeExist};
  transition: 0.2s ease-in-out;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    // scrollbar의 배경부분 설정
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    // scrollbar의 bar 부분 설정
    border-radius: 1rem;
    background: #ced4da;
  }
  &::-webkit-scrollbar-button {
    // scrollbar의 상하단 위/아래 이동 버튼
    width: 0;
    height: 0;
  }
`;

const OptionItemStyle = styled.li`
  background: #ffffff;
  box-sizing: border-box;
  padding: 0.8rem 1rem 0.8rem 1rem;
  transition: 0.3s;
  border: solid 1px #ced4da;
  border-radius: 5px;
  &:hover {
    background: #ced4da;
  }
`;
