import TextGroupComponent from '../../components/phone/TextGroupComponent';
import classes from './PhoneUserProfile.module.css'

import MajorPositionClass from '../../components/phone/MajorPositionClass';
import BackgroundBox from '../../components/phone/BackgroundBox';

function PhoneUserProfile(props) {
  return <div className={classes.phone_user_profile}>
    {props.children}
      <BackgroundBox />
      <TextGroupComponent name='김싸피' class='구미 2반'/>
      {/* 전공, 포지션, 공통 */}
      <MajorPositionClass />
      기술스택
      자기소개
      생일
  </div>
}

export default PhoneUserProfile;