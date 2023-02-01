import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendRequestItem from './FriendRequestItem';
import API from '../../../utils/api';

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);

  let user = 'annonymous';
  if (window.localStorage.getItem('USER')) {
    user = JSON.parse(window.localStorage.getItem('USER')).user_id;
  }

  useEffect(() => {
    API.get('/friend/getNotifyList/' + user)
      .then((res) => {
        setRequests(res.data.filter((request) => request.accept === false));
      })
      .catch((err) => console.log(err));
  }, []);

  const onRejectFriend = (friend_no) => {
    API.post('friend/rejectFriend', {
      friend_no: friend_no,
    })
      .then(() => {
        setRequests(
          requests.filter((request) => request.friend_no !== friend_no)
        );
      })
      .catch((err) => console.log(err));
  };

  const onAcceptFriend = (friend_no) => {
    console.log('수락');
    API.post('friend/acceptFriend', {
      friend_no: friend_no,
    })
      .then(() => {
        setRequests(
          requests.filter((request) => request.friend_no !== friend_no)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <FriendRequestStyle>
      <p>받은 친구 요청</p>
      {requests.map((friend) => (
        <FriendRequestItem
          key={friend.friend_no}
          friend={friend}
          onRejectFriend={onRejectFriend}
          onAcceptFriend={onAcceptFriend}
        />
      ))}
    </FriendRequestStyle>
  );
};

export default FriendRequest;

const FriendRequestStyle = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
