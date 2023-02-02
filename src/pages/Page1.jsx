// import { useHistory } from 'react-router-dom';
// import TextGroupComponent from '../components/phone/TextGroupComponent';
import Phone from '../components/UI/Phone';
import React from 'react';
import PhoneUserProfile from './phone_pages/PhoneUserProfile';
import PhoneFriendPage from './phone_pages/PhoneFriendPage';

function Page1() {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Phone>
        <PhoneUserProfile></PhoneUserProfile>
      </Phone>
      <PhoneFriendPage />
    </section>
  );
}

export default Page1;
