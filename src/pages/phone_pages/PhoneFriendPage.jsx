import { useState } from 'react';
import Phone from '../../components/UI/Phone';
import styled from 'styled-components';

import FriendList from '../../components/phone/friend/FriendList';
import MyProfile from '../../components/phone/friend/MyProfile';
import FriendButtonBar from '../../components/phone/friend/FriendButtonBar';
import FriendRequest from '../../components/phone/friend/FriendRequest';
import FriendSendRequest from '../../components/phone/friend/FriendSendRequest';
import FriendSearch from '../../components/phone/friend/FriendSearch';
import RecommendButton from '../../components/phone/friend/RecommendButton';
import RecommendList from '../../components/phone/friend/RecommendList';
import { getLocalUserInfo } from '../../utils/local-storage';
import { fetchUserInfo } from '../../services/auth-service';

function PhoneFriendPage() {
  const [user, setUser] = useState(getLocalUserInfo());

  const userHandler = async () => {
    const { error } = await fetchUserInfo();
    if (!error) {
      setUser(getLocalUserInfo());
    }
  };

  const [show, setShow] = useState({
    Page: true,
    Request: false,
    SendRequest: false,
    Search: false,
  });

  const onClickPage = () => {
    setShow({
      Page: true,
      Request: false,
      SendRequest: false,
      Search: false,
    });
    userHandler();
  };

  const onClickRequest = () => {
    setShow({
      Page: false,
      Request: true,
      SendRequest: false,
      Search: false,
    });
  };

  const onClickSendRequest = () => {
    setShow({
      Page: false,
      Request: false,
      SendRequest: true,
      Search: false,
    });
  };

  const onClickSearch = () => {
    setShow({
      Page: false,
      Request: false,
      SendRequest: false,
      Search: true,
    });
  };

  return (
    <Phone>
      <PhoneFriendPageStyle>
        <MyProfile />
        <FriendButtonBar
          onClickPage={onClickPage} user={user}
          onClickRequest={onClickRequest}
          onClickSearch={onClickSearch}
          onClickSendRequest={onClickSendRequest}
        />

        {show.Page && <FriendList />}
        {show.Request && <FriendRequest />}
        {show.SendRequest && <FriendSendRequest />}
        {show.Search && (
          <>
            <FriendSearch />
            <RecommendButton />
            <RecommendList />
          </>
        )}
      </PhoneFriendPageStyle>
    </Phone>
  );
}

export default PhoneFriendPage;

const PhoneFriendPageStyle = styled.div`
  padding: 1rem;
  height: 100%;
`;
