import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MajorPositionClass from '../phone/MajorPositionClass';
import TextGroupComponent from './common/TextGroupComponent';
import BackgroundBox from './common/BackgroundBox';
import RoundBox from './common/RoundBox';
import InfoBox from './common/InfoBox';
import TechStackList from './TechStackList';
import {
  FaRegSmile,
  FaBirthdayCake,
  FaCreativeCommonsBy,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// const user = {
//   age: 25,
//   area: '구미',
//   birthday: 'Fri Dec 17 1999 21:11:54 GMT+0900 (한국 표준시)',
//   common_class: '2',
//   email: 'ssafy@naver.com',
//   first_semester: '자바',
//   gender: '여성',
//   generation: 8,
//   interest: 'FE',
//   major: '전공',
//   name: '윤소현',
//   profile_img:
//     'https://kr.object.ncloudstorage.com/metassafy/1e149903-44a1-40ef-8720-067916b22390aaaa.png',
//   profile_txt: '나에요옹~나에요옹~나에요옹~나에요옹~나에요옹~',
//   student_no: 123456,
//   user_id: 'ssafy',
// };

// function Profile({ user }) {
function Profile() {
  const user = useSelector((state) => state.auth.user);

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
      {/* 기술스택 자기소개 */}
      <TechStackList user_id={user.user_id}></TechStackList>
      <RoundBox text="자기소개"></RoundBox>
      <InfoListStyle>
        <InfoBox icon={<FaRegSmile />} text={user.profile_txt}></InfoBox>
        <InfoBox icon={<FaBirthdayCake />} text={user.birthday}></InfoBox>
        {user.gender !== '미정' && (
          <InfoBox icon={<FaCreativeCommonsBy />} text={user.gender}></InfoBox>
        )}
        <InfoBox icon={<HiOutlineMail />} text={user.email}></InfoBox>
      </InfoListStyle>
    </PhoneUserProfileStyle>
  );
}

export default Profile;

const PhoneUserProfileStyle = styled.div`
  border-radius: 1rem;
  width: 22rem;
  max-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e0f4ff;
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #617485;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const InfoListStyle = styled.div`
  padding: 0 1rem;
  width: 100%;
`;
