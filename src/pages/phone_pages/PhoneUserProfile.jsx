import styled from 'styled-components';
import { useState } from 'react';

import MajorPositionClass from '../../components/phone/MajorPositionClass';
import TextGroupComponent from '../../components/phone/TextGroupComponent';
import BackgroundBox from '../../components/phone/BackgroundBox';
import RoundBox from '../../components/phone/RoundBox';
import TechStackBox from '../../components/phone/TechStackBox';
import InfoBox from '../../components/phone/InfoBox';
import { useEffect } from 'react';
import { fetchUserInfo } from '../../services/auth-service';

function PhoneUserProfile(props) {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      const userData = await fetchUserInfo();
      setUserInfo(userData.data);
    };

    getUserInfo();
  }, []);

  // const [userinfo, setStacks] = useState({
  //   name: '배싸피',
  //   class: '구미2반',
  //   major: 'Java',
  //   position: 'FE',
  //   track: 'D211ER',
  //   stacks: ['Python', 'android', 'Java', 'C', 'C++', 'vuejs', 'svelte'],
  //   introduce:
  //     'React 가라사대 뉴진스가 있었으니...하루만에 모든 서비스 페이지가 만들어졌다. 그리고 6주가 남았다더라',
  // });
  // const [userinfo, setStacks] = useState({
  //   age: 0,
  //   area: '구미',
  //   birthday: null,
  //   common: null,
  //   common_class: 0,
  //   common_jo: '미정',
  //   common_team: 13,
  //   current_role: null,
  //   email: 'ssafy@naver.com',
  //   first_semester: null,
  //   first_semester_class: 0,
  //   free: null,
  //   free_class: 0,
  //   free_jo: '미정',
  //   free_team: 0,
  //   gender: '\u0000',
  //   generation: 0,
  //   interest: null,
  //   major: null,
  //   name: 'kim',
  //   profile_img:
  //     'https://kr.object.ncloudstorage.com/metassafy/1e149903-44a1-40ef-8720-067916b22390aaaa.png',
  //   profile_txt: null,
  //   regtime: 1675096243000,
  //   special: null,
  //   special_class: 0,
  //   special_jo: '미정',
  //   special_team: 0,
  //   student_no: null,
  //   user_id: 'ssafy',
  //   user_pwd: '1234',
  //   x: 0,
  //   y: 0,
  //   z: 0,
  // });

  // console.log(userinfo.profile_img);
  // const stackDivs = userinfo.stacks.map((s, index) => {
  //   return <TechStackBox stack={s} key={index}></TechStackBox>;
  // });

  return (
    <PhoneUserProfileStyle>
      <BackgroundBox image={userInfo.profile_img} />
      {/* <img src="https://kr.object.ncloudstorage.com/metassafy/1e149903-44a1-40ef-8720-067916b22390aaaa.png"></img> */}
      <TextGroupComponent name={userInfo.name} class={userInfo.class} />
      {/* 전공, 포지션, 공통 */}
      <MajorPositionClass
        major={userInfo.major}
        position={userInfo.position}
        track={userInfo.track}
      />
      {/* 기술스택 자기소개 생일 */}
      <RoundBox text={userInfo.introduce}></RoundBox>
      {/* <TechStackBox stack="android"></TechStackBox> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '20rem',
        }}
      >
        {/* {stackDivs} */}
      </div>
      <InfoBox icon={<box-icon name="smile"></box-icon>} text="?????"></InfoBox>
    </PhoneUserProfileStyle>
  );
}

export default PhoneUserProfile;

const PhoneUserProfileStyle = styled.div`
  /* background-color: rgb(247, 254, 255); */
  border-radius: 1rem;
  /* border: 10px rgb(121, 190, 232) solid; */
  width: 22rem;
  /* height: 40rem; */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
