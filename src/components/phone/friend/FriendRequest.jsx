import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendRequestItem from './FriendRequestItem';
import axios from 'axios';

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);

  const onRejectFriend = (friend_no) => {
    axios
      .post('http://i8d211.p.ssafy.io:8088/metassafy/friend/rejectFriend', {
        friend_no: friend_no,
      })
      .then(function () {
        setRequests(requests.filter((item) => item.friend_no !== friend_no));
      });
  };

  const onAcceptFriend = (friend_no) => {
    console.log('수락');
    axios
      .post('http://i8d211.p.ssafy.io:8088/metassafy/friend/acceptFriend', {
        friend_no: friend_no,
      })
      .then(function () {
        setRequests(requests.filter((item) => item.friend_no !== friend_no));
      });
  };

  useEffect(() => {
    axios
      .get(
        'http://i8d211.p.ssafy.io:8088/metassafy/friend/getNotifyList/' +
          'ssafy'
      )
      .then((response) => {
        setRequests(response.data.filter((item) => item.accept === false));
      });
  }, []);

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
