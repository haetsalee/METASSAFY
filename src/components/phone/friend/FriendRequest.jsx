import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendRequestItem from './FriendRequestItem';
import axios from 'axios';

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  const onDelete = (from_user_id) => {
    setRequests(
      requests.filter((friend) => friend.from_user_id !== from_user_id)
    );
  };

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
        setRequests(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <FriendRequestStyle>
      <p>받은 친구 요청</p>
      {requests.map((friend) => (
        <FriendRequestItem
          key={friend.id}
          friend={friend}
          onDelete={onDelete}
          onRejectFriend={onRejectFriend}
          onAcceptFriend={onAcceptFriend}
        />
      ))}
    </FriendRequestStyle>
  );
};

const FriendData = [
  {
    id: 1,
    name: '김싸피',
    state: '아직 친구가 아닙니다.',
    image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
  },
  {
    id: 2,
    name: '이싸피',
    state: '아직 친구가 아닙니다.',
    image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
  },
  {
    id: 3,
    name: '박싸피',
    state: '아직 친구가 아닙니다.',
    image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
  },
];

export default FriendRequest;

const FriendRequestStyle = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
