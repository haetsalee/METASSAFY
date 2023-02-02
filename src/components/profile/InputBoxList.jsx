import { TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import CalendarInput from './Inputs/CalendarInput';
import DropdownInput from './Inputs/DropdownInput';
import RowRadioButtonsGroup from './Inputs/RowRadioButtonGroup';

const nameList = {
  label: '이름',
  key: 'name',
};

const genderList = {
  label: '성별',
  data: ['남성', '여성', '미정'],
};

const generationList = {
  key: 'generation',
  label: '기수',
  data: [9, 8, 7, 6, 5, 4, 3, 2, 1],
};

const areaList = {
  label: '지역',
  data: ['서울', '대전', '구미', '광주', '부울경'],
};

const trackList = {
  label: '트랙',
  data: ['자바', '파이썬', '모바일', '임베디드'],
};

const majorList = {
  label: '전공',
  data: ['전공', '비전공'],
};

const positionList = {
  label: '희망 포지션',
  data: [
    { label: 'BE', value: 'BE', name: 'position', id: 'BE' },
    { label: 'FE', value: 'FE', name: 'position', id: 'FE' },
    {
      label: '기타',
      value: '기타',
      name: 'position',
      id: 'posNull',
    },
  ],
};

const InputBoxList = () => {
  const [info, setInfo] = useState({
    name: '',
    gender: '', // w, m
    birthday: '',
    generation: 0, // 기수
    area: '', // 지역
    first_semester: '', // 트랙
    major: '', // 전공
    interest: '', // 희망 포지션
    profile_txt: '', // 자기소개
  });
  const [techList, setTechList] = useState([]); // tech_id 기술스택

  return (
    <InputListStyle>
      {/* 이름 */}
      <InputLineStyle>
        <LabelStyle>이름</LabelStyle>
        <InputsStyle>
          <TextField id="standard-basic" variant="standard" />
        </InputsStyle>
      </InputLineStyle>
      {/* 개인정보 */}
      <InputLineStyle>
        <LabelStyle>개인정보</LabelStyle>
        <InputsStyle>
          <DropdownInput data={genderList} width="30%" />
          <CalendarInput />
        </InputsStyle>
      </InputLineStyle>
      {/* SSAFY */}
      <InputLineStyle>
        <LabelStyle>SSAFY</LabelStyle>
        <InputsStyle>
          <DropdownInput data={generationList} width="25%" />
          <DropdownInput data={areaList} width="25%" />
          <DropdownInput data={trackList} width="25%" />
          <DropdownInput data={majorList} width="25%" />
        </InputsStyle>
      </InputLineStyle>
      {/* 희망 포지션 */}
      <InputLineStyle>
        <LabelStyle>희망 포지션</LabelStyle>
        <InputsStyle>
          <RowRadioButtonsGroup data={positionList} />
        </InputsStyle>
      </InputLineStyle>
      {/* 자기소개 */}
      <InputLineStyle>
        <LabelStyle>자기소개</LabelStyle>
        <InputsStyle>
          <TextField
            fullWidth
            id="standard-basic"
            variant="standard"
            multiline
            maxRows={4}
          />
        </InputsStyle>
      </InputLineStyle>
    </InputListStyle>
  );
};

export default InputBoxList;

const InputListStyle = styled.div`
  width: 20rem;
  padding: 0.3rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e0f4ff;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #617485;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const LabelStyle = styled.label`
  font-size: 0.8rem;
  color: #617485;
  margin-bottom: 0.2rem;
`;

const InputsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InputLineStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
