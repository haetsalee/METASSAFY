import { useHistory } from 'react-router-dom';
import TextGroupComponent from '../components/phone/TextGroupComponent';
import Phone from '../components/UI/Phone';
import PhoneUserProfileById from './phone_pages/PhoneUserProfileById';
import GetUserStack from '../components/phone/GetUserStack';
import { useEffect } from 'react';

function UserProfilePage() {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>UserProfilePage</h1>
      <Phone>
        <PhoneUserProfileById name="ssafy"></PhoneUserProfileById>
        {/* <GetUserStack name="ssafy"></GetUserStack> */}
      </Phone>
      {/* ???? */}
    </section>
  );
}

export default UserProfilePage;
