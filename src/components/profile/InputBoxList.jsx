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

const privateList = {
  label: '개인정보',
  data: [
    { label: '남성', value: 'm', name: 'gender', id: 'man' },
    { label: '여성', value: 'w', name: 'gender', id: 'woman' },
    {
      label: '숨김',
      value: '미정',
      name: 'gender',
      id: 'genNull',
    },
  ],
};

const ageList = {
  label: '나이',
  key: 'age',
  data: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
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

const commonTrackList = {
  label: '트랙',
  data: ['미정', '웹디자인', '웹기술', '모바일', 'IoT'],
};

const commonBanList = {
  label: '반',
  data: ['미정', 1, 2, 3, 4, 5, 6, 7],
};

const commonJoList = {
  label: '조',
  data: ['미정', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

const specialTrackList = {
  label: '트랙',
  data: ['미정', '메타버스', '블록체인', '모빌리티', '빅데이터', '인공지능'],
};

const specialBanList = {
  label: '반',
  data: ['미정', 1, 2, 3, 4, 5, 6, 7],
};

const specialJoList = {
  label: '조',
  data: ['미정', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

const freeTrackList = {
  label: '트랙',
  data: ['미정', '웹디자인', '웹기술', '모바일', 'IoT'],
};

const freeBanList = {
  label: '반',
  data: ['미정', 1, 2, 3, 4, 5, 6, 7],
};

const freeJoList = {
  label: '조',
  data: ['미정', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

const positionList = {
  label: '희망 포지션',
  inputList: [
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

const introList = {
  label: '자기소개',
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
      {/* 이름 */}
      <InputLineStyle>
        <LabelStyle>이름</LabelStyle>
        <InputsStyle>
          <TextField fullWidth id="standard-basic" variant="standard" />
          <CalendarInput />
        </InputsStyle>
      </InputLineStyle>
      {/* 개인정보 */}
      <InputLineStyle>
        <LabelStyle>개인정보</LabelStyle>
        <InputsStyle>
          <RowRadioButtonsGroup data={privateList} width="85%" />
          <DropdownInput data={ageList} width="20%" />
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
      {/* 공통 */}
      <InputLineStyle>
        <LabelStyle>공통</LabelStyle>
        <InputsStyle>
          <DropdownInput data={commonTrackList} width="33%" />
          <DropdownInput data={commonBanList} width="33%" />
          <DropdownInput data={commonJoList} width="33%" />
        </InputsStyle>
      </InputLineStyle>
      {/* 특화 */}
      <InputLineStyle>
        <LabelStyle>특화</LabelStyle>
        <InputsStyle>
          <DropdownInput data={specialTrackList} width="33%" />
          <DropdownInput data={specialBanList} width="33%" />
          <DropdownInput data={specialJoList} width="33%" />
        </InputsStyle>
      </InputLineStyle>
      {/* 자율 */}
      <InputLineStyle>
        <LabelStyle>자율</LabelStyle>
        <InputsStyle>
          <DropdownInput data={freeTrackList} width="33%" />
          <DropdownInput data={freeBanList} width="33%" />
          <DropdownInput data={freeJoList} width="33%" />
        </InputsStyle>
      </InputLineStyle>
      {/* 희망 포지션 */}
      <InputLineStyle>
        <LabelStyle>희망 포지션</LabelStyle>
        <InputsStyle>
          <RowRadioButtonsGroup data={privateList} width="75%" />
        </InputsStyle>
      </InputLineStyle>
      {/* 자기소개 */}
      <InputLineStyle>
        <LabelStyle>자기소개</LabelStyle>
        <InputsStyle>
          <TextField fullWidth id="standard-basic" variant="standard" />
        </InputsStyle>
      </InputLineStyle>
    </InputListStyle>
  );
};

export default InputBoxList;

const InputListStyle = styled.div`
  width: 20rem;
  padding: 0.3rem;
`;

const LabelStyle = styled.label`
  font-size: 0.8rem;
  color: #617485;
  margin-bottom: 0.4rem;
`;

const InputsStyle = styled.div`
  display: flex;
  width: 100%;
`;

const InputLineStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3rem;
`;
