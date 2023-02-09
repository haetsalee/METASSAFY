import Phone from '../components/UI/Phone';
import Profile from '../components/profile/Profile';
// import GetUserStack from '../components/phone/GetUserStack';

import useOtherFetch from '../hooks/use-other-fetch';
import useMyFetch from '../hooks/use-my-fetch';
import useInfo from '../hooks/use-info';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function ProfilePage() {
  const params = useParams();
  const user_id = params.user_id;
  const my = useMyFetch();
  const other = useOtherFetch(user_id);
  console.log(my, other, '-----');
  const user = my.user_id === user_id ? my : other;

  return (
    <Phone>
      <WhiteBox />
      <ProfileDiv>
        <Profile user={user}></Profile>
        {/* <GetUserStack name="ssafy"></GetUserStack> */}
      </ProfileDiv>
    </Phone>
  );
}

export default ProfilePage;

const ProfileDiv = styled.div`
  width: 100%;
  height: 85%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #617485;
  }
`;

const WhiteBox = styled.div`
  width: 100%;
  height: 5%;
`;
