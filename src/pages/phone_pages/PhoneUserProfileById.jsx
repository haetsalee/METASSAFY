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

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const user_id = props.name;
    console.log('--------');
    console.log(user_id, '유저아이디다');
    const getUserInfo = async (user_id) => {
      const userData = await fetchUserInfoById(user_id);
      console.log('--------');
      console.log(userData);
      console.log('-----!!!!!!!---');
      setUserInfo(userData);
      setUserInfo(userData.data);
    };

    getUserInfo(user_id);
  }, []);

  return (
    <PhoneUserProfileStyle>
      <div>
        <p>{count}번 클릭!</p>
        <button onClick={countUp}>Click Me</button>
      </div>
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
      <div>여기에</div>
      <TechStackBox stack="android"></TechStackBox>
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
