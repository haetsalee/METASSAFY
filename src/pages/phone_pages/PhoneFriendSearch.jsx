import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import FriendSearch from '../../components/phone/friend/FriendSearch';
import MyProfile from '../../components/phone/friend/MyProfile';
import FriendButtonBar from '../../components/phone/friend/FriendButtonBar';
import FriendSearchItem from '../../components/phone/friend/FriendSearchItem';
import RecommendButton from '../../components/phone/friend/RecommendButton';
import RecommendList from '../../components/phone/friend/RecommendList';

function PhoneFriendSearch() {
  return (
    <Phone>
      <PhoneFriendSearchStyle>
        <MyProfile />
        <FriendButtonBar />
        <FriendSearch />
        <FriendSearchItem />
        <RecommendButton />
        <RecommendList />
      </PhoneFriendSearchStyle>
    </Phone>
  );
}

export default PhoneFriendSearch;

const PhoneFriendSearchStyle = styled.div`
  padding: 1rem;
`;
