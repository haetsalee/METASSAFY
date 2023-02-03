import styled from 'styled-components';
import { useState } from 'react';

import MajorPositionClass from '../../components/phone/MajorPositionClass';
import TextGroupComponent from '../../components/phone/TextGroupComponent';
import BackgroundBox from '../../components/phone/BackgroundBox';
import RoundBox from '../../components/phone/RoundBox';
import TechStackBox from '../../components/phone/TechStackBox';
import InfoBox from '../../components/phone/InfoBox';
import { useEffect } from 'react';
import { fetchUserInfoById } from '../../services/auth-service';
import GetUserStack from '../../components/phone/GetUserStack';

function PhoneUserProfile(props) {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);

  // useEffect(() => {
  //   console.log('useEffect', count);
  //   const user_id = props.name;
  //   console.log('--------');
  //   console.log(user_id);
  //   const getUserInfo = async (user_id) => {
  //     const userData = await fetchUserInfoById(user_id);
  //     console.log('--------');
  //     console.log(userData);
  //     console.log('-----!!!!!!!---');
  //     setUserInfo(userData);
  //   };

  //   getUserInfo();
  // });

  // const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const user_id = props.name;
    console.log('--------');
    console.log(user_id, '유저아이디다');
    const getUserInfo = async (user_id) => {
      const userData = await fetchUserInfoById(user_id);
      console.log('--------');
      console.log(userData);
      console.log('-----!!!!!!!---');
      // setUserInfo(userData);
      // setUserInfo(userData.data);
    };

    getUserInfo(user_id);
  }, []);

  const [userInfo, setStacks] = useState({
    age: 0,
    area: '구미',
    birthday: null,
    common: null,
    common_class: '구미2반',
    common_jo: '미정',
    common_team: 13,
    current_role: null,
    email: 'ssafy@naver.com',
    first_semester: 'python',
    first_semester_class: 0,
    free: null,
    free_class: 0,
    free_jo: '미정',
    free_team: 0,
    gender: '\u0000',
    generation: 0,
    interest: 'FE',
    major: '전공',
    name: 'kim',
    profile_img:
      'https://kr.object.ncloudstorage.com/metassafy/1e149903-44a1-40ef-8720-067916b22390aaaa.png',
    profile_txt: '자기소개',
    regtime: 1675096243000,
    special: null,
    special_class: 0,
    special_jo: '미정',
    special_team: 0,
    student_no: null,
    user_id: 'ssafy',
    user_pwd: '1234',
    x: 0,
    y: 0,
    z: 0,
  });

  return (
    <PhoneUserProfileStyle>
      <div>
        <p>{count}번 클릭!</p>
        <button onClick={countUp}>Click Me</button>
      </div>
      <BackgroundBox image={userInfo.profile_img} />
      {/* <img src="https://kr.object.ncloudstorage.com/metassafy/1e149903-44a1-40ef-8720-067916b22390aaaa.png"></img> */}
      <TextGroupComponent name={userInfo.name} class={userInfo.common_class} />
      {/* 전공, 포지션, 공통 */}
      <MajorPositionClass
        major={userInfo.major}
        position={userInfo.interest}
        track={userInfo.first_semester}
      />
      {/* 기술스택 자기소개 생일 */}
      <RoundBox text={userInfo.profile_txt}></RoundBox>
      {/* <div>여기에</div> */}
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
      <GetUserStack name="ssafy"></GetUserStack>
      <InfoBox
        icon={<box-icon name="smile"></box-icon>}
        text="안녕하세요 저는 소현이에용"
      ></InfoBox>
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
