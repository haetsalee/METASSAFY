import Phone from '../components/UI/Phone';
import Profile from '../components/profile/Profile';
// import GetUserStack from '../components/phone/GetUserStack';

import useOtherFetch from '../hooks/use-other-fetch';
import useMyFetch from '../hooks/use-my-fetch';
import useInfo from '../hooks/use-info';

function ProfilePage({ user_id }) {
  const my = useMyFetch();
  const other = useOtherFetch(user_id);
  console.log(my, other);
  const user = my.user_id === user_id ? my : other;

  return (
    <Phone>
      <Profile user={user}></Profile>
      {/* <GetUserStack name="ssafy"></GetUserStack> */}
    </Phone>
  );
}

export default ProfilePage;
