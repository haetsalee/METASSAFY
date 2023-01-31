import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import FriendRequest from '../../components/phone/friend/FriendRequest';
import MyProfile from '../../components/phone/friend/MyProfile';
import FriendButtonBar from '../../components/phone/friend/FriendButtonBar';

function PhoneFriendRequest() {
  return (
    <Phone>
      <PhoneFriendPageStyle>
        <MyProfile />
        <FriendButtonBar />
        <FriendRequest />
      </PhoneFriendPageStyle>
    </Phone>
  );
}

export default PhoneFriendRequest;

const PhoneFriendPageStyle = styled.div`
  padding: 1rem;
`;
