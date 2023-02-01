import { useState } from 'react';
import styled from 'styled-components';
import InputBox from './Inputs/InputBox';

const nameList = {
  label: '이름',
  key: 'name',
  inputList: [{ type: 'Normal' }],
};

const privateList = {
  label: '개인정보',
  inputList: [
    { type: 'Radio', title: '남성', value: 'm', name: 'gender', id: 'man' },
    { type: 'Radio', title: '여성', value: 'w', name: 'gender', id: 'woman' },
    {
      type: 'Radio',
      title: '숨김',
      value: '미정',
      name: 'gender',
      id: 'genNull',
    },
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
      data: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    },
    {
      type: 'Dropdown',
      title: '지역',
      data: ['서울', '대전', '구미', '광주', '부울경'],
    },
    {
      type: 'Dropdown',
      title: '트랙',
      data: ['자바', '파이썬', '모바일', '임베디드'],
    },
    {
      type: 'Dropdown',
      title: '전공',
      data: ['전공', '비전공'],
    },
  ],
};

const commonList = {
  label: '공통 프로젝트',
  inputList: [
    {
      type: 'Dropdown',
      title: '트랙',
      data: ['미정', '웹디자인', '웹기술', '모바일', 'IoT'],
    },
    {
      type: 'Dropdown',
      title: '반',
      data: ['미정', 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: 'Dropdown',
      title: '조',
      data: ['미정', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ],
};

const specialList = {
  label: '특화 프로젝트',
  inputList: [
    {
      type: 'Dropdown',
      title: '트랙',
      data: [
        '미정',
        '메타버스',
        '블록체인',
        '모빌리티',
        '빅데이터',
        '인공지능',
      ],
    },
    {
      type: 'Dropdown',
      title: '반',
      data: ['미정', 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: 'Dropdown',
      title: '조',
      data: ['미정', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ],
};

const freeList = {
  label: '자율 프로젝트',
  inputList: [
    {
      type: 'Dropdown',
      title: '트랙',
      data: ['미정', '웹디자인', '웹기술', '모바일', 'IoT'],
    },
    {
      type: 'Dropdown',
      title: '반',
      data: ['미정', 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: 'Dropdown',
      title: '조',
      data: ['미정', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ],
};

const positionList = {
  label: '희망 포지션',
  inputList: [
    { type: 'Radio', title: 'BE', value: 'BE', name: 'position', id: 'BE' },
    { type: 'Radio', title: 'FE', value: 'FE', name: 'position', id: 'FE' },
    {
      type: 'Radio',
      title: '기타',
      value: '기타',
      name: 'position',
      id: 'posNull',
    },
  ],
};

const introList = {
  label: '자기소개',
  inputList: [{ type: 'Normal' }],
};

const InputBoxList = () => {
  const [info, setInfo] = useState({
    name: '',
    gender: '', // w, m
    age: 0,
    generation: 0, // 기수
    area: '', // 지역
    first_semester: '', // 트랙

    major: '', // 전공
    common: '', // 공통 트랙, 반, 조
    common_class: 0,
    common_jo: 0,
    special: '',
    special_class: 0,
    special_jo: 0,
    free: '',
    free_class: 0,
    free_jo: 0,
    interest: '', // 희망 포지션
    profile_txt: '', // 자기소개
  });
  const [techList, setTechList] = useState([]); // tech_id 기술스택

  return (
    <InputListStyle>
      <InputBox list={nameList} />
      <InputBox list={privateList} width="25%" />
      <InputBox list={ssafyList} width="25%" />
      <InputBox list={commonList} width="33%" />
      <InputBox list={specialList} width="33%" />
      <InputBox list={freeList} width="33%" />
      <InputBox list={positionList} width="33%" />
      <InputBox list={introList} />
    </InputListStyle>
  );
};

export default InputBoxList;

const InputListStyle = styled.div`
  width: 20rem;
  background-color: red;
  padding: 0.3rem;
`;
