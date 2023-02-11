import styled from 'styled-components';

import MajorPositionClass from '../components/phone/MajorPositionClass';
import TextGroupComponent from '../components/profile/common/TextGroupComponent';
import BackgroundBox from '../components/profile/common/BackgroundBox';
import RoundBox from '../components/profile/common/RoundBox';
import InfoBox from '../components/profile/common/InfoBox';
import TechStackList from '../components/profile/TechStackList';
import {
  FaRegSmile,
  FaBirthdayCake,
  FaCreativeCommonsBy,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useMyFetch from '../hooks/use-my-fetch';
import useOtherFetch from '../hooks/use-other-fetch';

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

function Profile() {
  // function Profile() {

  const params = useParams();
  const user_id = params.user_id;
  const my = useMyFetch();
  const other = useOtherFetch(user_id);
  // console.log(my, other, '-----');
  const user = my.user_id === user_id ? my : other;

  if (!Object.keys(user).length) {
    return;
    // console.log('!@@@@@@2!!', user);
  }

  return (
    <PhoneUserProfileStyle>
      <WidthDiv>
        <BackgroundBox image={user.profile_img} who={user.user_id} />
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
          {user.gender !== 'z' && (
            <InfoBox
              icon={<FaCreativeCommonsBy />}
              text={user.gender === 'w' ? '여성' : '남성'}
            ></InfoBox>
          )}
          <InfoBox icon={<HiOutlineMail />} text={user.email}></InfoBox>
        </InfoListStyle>
      </WidthDiv>
    </PhoneUserProfileStyle>
  );
}

export default Profile;

const PhoneUserProfileStyle = styled.div`
  border-radius: 1rem;
  width: 100%;
  max-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

const InfoListStyle = styled.div`
  padding: 0 1rem;
  width: 100%;
`;

const WidthDiv = styled.div`
  width: 20rem;
`;
