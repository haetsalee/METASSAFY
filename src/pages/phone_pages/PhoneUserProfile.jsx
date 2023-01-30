import TextGroupComponent from '../../components/phone/TextGroupComponent';

import MajorPositionClass from '../../components/phone/MajorPositionClass';
import BackgroundBox from '../../components/phone/BackgroundBox';
import RoundBox from '../../components/phone/RoundBox';
import styled from 'styled-components';

function PhoneUserProfile(props) {
  return (
    <PhoneUserProfileStyle>
      <BackgroundBox />
      <TextGroupComponent name="김싸피" class="구미2반" />
      {/* 전공, 포지션, 공통 */}
      <MajorPositionClass />
      기술스택 자기소개 생일
      <RoundBox text="자기소개"></RoundBox>
    </PhoneUserProfileStyle>
  );
}

export default PhoneUserProfile;

const PhoneUserProfileStyle = styled.div`
  /* background-color: rgb(247, 254, 255); */
  border-radius: 1rem;
  /* border: 10px rgb(121, 190, 232) solid; */
  /* width: 20rem;
  height: 40rem; */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
