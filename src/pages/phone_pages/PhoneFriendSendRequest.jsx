import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import FriendSendRequest from '../../components/phone/friend/FriendSendRequest';
import MyProfile from '../../components/phone/friend/MyProfile';
import FriendButtonBar from '../../components/phone/friend/FriendButtonBar';

function PhoneFriendSendRequest() {
  return (
    <Phone>
      <PhoneFriendPageStyle>
        <MyProfile />
        <FriendButtonBar />
        <FriendSendRequest />
      </PhoneFriendPageStyle>
    </Phone>
  );
}

export default PhoneFriendSendRequest;

const PhoneFriendPageStyle = styled.div`
  padding: 1rem;
`;
