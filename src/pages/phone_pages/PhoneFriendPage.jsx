import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import FriendList from '../../components/phone/friend/FriendList';
import MyProfile from '../../components/phone/friend/MyProfile';
import FriendButtonBar from '../../components/phone/friend/FriendButtonBar';

function PhoneFriendPage() {
  return (
    <Phone>
      <PhoneFriendPageStyle>
        <MyProfile />
        <FriendButtonBar />
        <FriendList />
      </PhoneFriendPageStyle>
    </Phone>
  );
}

export default PhoneFriendPage;

const PhoneFriendPageStyle = styled.div`
  padding: 1rem;
`;
