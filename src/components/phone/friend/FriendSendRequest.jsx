import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FriendSendRequestItem from './FriendSendRequestItem';
import API from '../../../utils/api';

const FriendSendRequest = () => {
  const [sendRequests, setSendRequests] = useState([]);

  let user = 'annonymous';
  if (window.localStorage.getItem('USER')) {
    user = JSON.parse(window.localStorage.getItem('USER')).user_id;
  }

  useEffect(() => {
    API.get('/friend/getSendList/' + user)
      .then((res) => {
        setSendRequests(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onDeleteRequest = (friend_no) => {
    API.post('/friend/rejectFriend/', { friend_no: friend_no })
      .then((res) => {
        setSendRequests(
          res.data.filter((item) => item.friend_no !== friend_no)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <FriendRequestStyle>
      <p>보낸 친구 요청</p>
      {sendRequests.map((friend) => (
        <FriendSendRequestItem
          key={friend.friend_no}
          friend={friend}
          onDeleteRequest={onDeleteRequest}
        />
      ))}
    </FriendRequestStyle>
  );
};

export default FriendSendRequest;

const FriendRequestStyle = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
