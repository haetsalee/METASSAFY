import { useHistory } from 'react-router-dom';
import TextGroupComponent from '../components/phone/TextGroupComponent';
import Phone from '../components/UI/Phone';
import PhoneUserProfile from './phone_pages/PhoneUserProfile';
import PhoneChatingRoom from './phone_pages/PhoneChatingRoom';

function Page1() {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Page1</h1>
      {/* <Phone > */}
      <PhoneUserProfile></PhoneUserProfile>
      <PhoneChatingRoom />
      {/* 프로필 사진
      활동중 뱃지
      이름
      반
      <TextGroupComponent name='김싸피' class='구미 2반'/>
      전공
      포지션
      공통
      기술스택
      자기소개
      생일 */}
      {/* </Phone> */}
    </section>
  );
}

export default Page1;
