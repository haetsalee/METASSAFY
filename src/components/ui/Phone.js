import MajorPositionClass from '../phone/MajorPositionClass';
import TextGroupComponent from '../phone/TextGroupComponent';
import classes from './Phone.module.css'

function Phone(props) {
  return <div className={classes.phone}>
    {props.children}
    프로필 사진
      활동중 뱃지
      이름
      반
      <TextGroupComponent name='김싸피' class='구미 2반'/>
      <MajorPositionClass />
      전공
      포지션
      공통
      기술스택
      자기소개
      생일
  </div>
}

export default Phone;