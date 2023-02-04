import styled from 'styled-components';

import MajorPositionClass from '../phone/MajorPositionClass';
import TextGroupComponent from './common/TextGroupComponent';
import BackgroundBox from './common/BackgroundBox';
import RoundBox from './common/RoundBox';
import InfoBox from '../phone/InfoBox';
import { FaRegSmile, FaBirthdayCake } from 'react-icons/fa';
import TechStackList from './TechStackList';

const user = {
  age: 25,
  area: '구미',
  birthday: 'Fri Dec 17 1999 21:11:54 GMT+0900 (한국 표준시)',
  common_class: '2',
  email: 'ssafy@naver.com',
  first_semester: '자바',
  gender: '여성',
  generation: 8,
  interest: 'FE',
  major: '전공',
  name: '윤소현',
  profile_img:
    'https://kr.object.ncloudstorage.com/metassafy/1e149903-44a1-40ef-8720-067916b22390aaaa.png',
  profile_txt: '나에요옹~나에요옹~나에요옹~나에요옹~나에요옹~',
  student_no: 123456,
  user_id: 'ssafy',
};

// function PhoneUserProfileById({ user }) {
function Profile() {
  return (
    <PhoneUserProfileStyle>
      <BackgroundBox image={user.profile_img} />
      <TextGroupComponent
        name={user.name}
        area={user.area}
        class={user.common_class}
      />
      {/* 전공, 포지션, 공통 */}
      <MajorPositionClass
        major={user.major}
        position={user.interest}
        track={user.first_semester}
      />
      {/* 기술스택 자기소개 생일 */}
      <TechStackList user_id={user.user_id}></TechStackList>
      <RoundBox text="자기소개"></RoundBox>
      <InfoBox icon={<FaRegSmile />} text={user.profile_txt}></InfoBox>
      <InfoBox icon={<FaBirthdayCake />} text={user.birthday}></InfoBox>
    </PhoneUserProfileStyle>
  );
}

export default Profile;

const PhoneUserProfileStyle = styled.div`
  border-radius: 1rem;
  width: 22rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
