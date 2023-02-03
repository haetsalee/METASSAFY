import Phone from '../components/UI/Phone';
import PhoneUserProfileById from './phone_pages/PhoneUserProfileById';
// import GetUserStack from '../components/phone/GetUserStack';

import useMyFetch from '../hooks/use-my-fetch';
import useOtherFetch from '../hooks/use-other-fetch';

function Profile({ user_id }) {
  const my = useMyFetch();
  const other = useOtherFetch(user_id);
  const user = user_id ? other : my;
  console.log('profile', user);

  return (
    <Phone>
      <PhoneUserProfileById user={user}></PhoneUserProfileById>
      {/* <GetUserStack name="ssafy"></GetUserStack> */}
    </Phone>
  );
}

export default Profile;
