import TextGroupComponent from '../../components/phone/TextGroupComponent';
import classes from './PhoneUserProfile.module.css'

import MajorPositionClass from '../../components/phone/MajorPositionClass';
import BackgroundBox from '../../components/phone/BackgroundBox';

function PhoneUserProfile(props) {
  return <div className={classes.phone_user_profile}>
      <BackgroundBox />
      <TextGroupComponent name='??' class='???'/>
      {/* 전공, 포지션, 공통 */}
      <MajorPositionClass />
      기술스택
      자기소개
      생일
  </div>
}

export default PhoneUserProfile;