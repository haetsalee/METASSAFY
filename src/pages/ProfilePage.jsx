import Phone from '../components/UI/Phone';
import Profile from '../components/profile/Profile';
// import GetUserStack from '../components/phone/GetUserStack';

import useMyFetch from '../hooks/use-my-fetch';
import useOtherFetch from '../hooks/use-other-fetch';

function ProfilePage({ user_id }) {
  const my = useMyFetch();
  const other = useOtherFetch(user_id);
  const user = user_id ? other : my;
  console.log('profile', user);

  return (
    <Phone>
      <Profile user={user}></Profile>
      {/* <GetUserStack name="ssafy"></GetUserStack> */}
    </Phone>
  );
}

export default ProfilePage;
