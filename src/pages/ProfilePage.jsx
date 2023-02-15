import PhoneOutLine from '../components/UI/PhoneOutLine';
import Profile from '../components/profile/Profile';
// import GetUserStack from '../components/phone/GetUserStack';

import useOtherFetch from '../hooks/use-other-fetch';
import useMyFetch from '../hooks/use-my-fetch';
// import useInfo from '../hooks/use-info';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function ProfilePage() {
  const params = useParams();
  const user_id = params.user_id;
  const my = useMyFetch();
  const other = useOtherFetch(user_id);
  // console.log(my, other, '-----');
  const user = my.user_id === user_id ? my : other;

  return (
    <DivStyle>
      <PhoneOutLine>
        <WhiteBox />
        <ProfileDiv>
          <Profile user={user}></Profile>
          {/* <GetUserStack name="ssafy"></GetUserStack> */}
        </ProfileDiv>
      </PhoneOutLine>
    </DivStyle>
  );
}

export default ProfilePage;

const DivStyle = styled.div`
  margin-top: 4rem;
`;

const ProfileDiv = styled.div`
  width: 100%;
  height: 100%;
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
