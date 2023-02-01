import styled from 'styled-components';
import InputBox from './Inputs/InputBox';

const nameList = {
  label: '이름',
  inputList: [{ type: 'Normal' }],
};

const birthList = {
  label: '생일',
  inputList: [{ type: 'Calendar' }],
};

const privateList = {
  label: '개인정보',
  inputList: [
    { type: 'CheckBox', title: '남성' },
    { type: 'CheckBox', title: '여성' },
    { type: 'CheckBox', title: '숨김' },
    {
      type: 'Dropdown',
      title: '나이',
      data: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    },
  ],
};

const ssafyList = {
  label: 'SSAFY',
  inputList: [
    {
      type: 'Dropdown',
      title: '기수',
      data: ['9기', '8기', '7기', '6기', '5기', '4기'],
    },
    {
      type: 'Dropdown',
      title: '지역',
      data: ['서울', '대전', '구미', '광주', '부울경'],
    },
    {
      type: 'Dropdown',
      title: '트랙',
      data: ['Java', 'Python', 'Mobile', 'Embedded'],
    },
    {
      type: 'Dropdown',
      title: '전공',
      data: ['전공', '비전공'],
    },
  ],
};

const classList = {
  label: '반',
  inputList: [
    {
      type: 'Dropdown',
      title: '트랙',
      data: ['9기', '8기', '7기', '6기', '5기', '4기'],
    },
    {
      type: 'Dropdown',
      title: '공통',
      data: ['미정', '1반', '2반', '3반', '4반', '5반'],
    },
    {
      type: 'Dropdown',
      title: '특화',
      data: ['미정', '1반', '2반', '3반', '4반', '5반'],
    },
    {
      type: 'Dropdown',
      title: '자율',
      data: ['미정', '1반', '2반', '3반', '4반', '5반'],
    },
  ],
};

const joList = {
  label: '조',
  inputList: [{ type: 'Normal' }],
};

const positionList = {
  label: '희망 포지션',
  inputList: [
    { type: 'CheckBox', title: 'BE' },
    { type: 'CheckBox', title: 'FE' },
    { type: 'CheckBox', title: '기타' },
  ],
};

const introList = {
  label: '자기소개',
  inputList: [{ type: 'Normal' }],
};

const InputBoxList = () => {
  return (
    <InputListStyle>
      <InputBox list={nameList} />
      <InputBox list={birthList} />
      <InputBox list={privateList} />
      <InputBox list={ssafyList} />
      <InputBox list={classList} />
      <InputBox list={joList} />
      <InputBox list={positionList} />
      <InputBox list={introList} />
    </InputListStyle>
  );
};

export default InputBoxList;

const InputListStyle = styled.div`
  width: 20rem;
  background-color: red;
`;
