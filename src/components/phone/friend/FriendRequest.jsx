import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendRequestItem from './FriendRequestItem';
// import axios from 'axios';

const FriendRequest = () => {
  const [requests, setRequests] = useState(FriendData);
  const onDelete = (id) => {
    setRequests(requests.filter((friend) => friend.id !== id));
  };

  // const getNotifyList = async () => {
  //   try {
  //     const response = await API.get('/friend/getNotifyList/', {
  //       params: {
  //         user_id: 'test',
  //       },
  //     });
  //     setRequests(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getNotifyList();
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get('http://i8d211.p.ssafy.io:8088/metassafy//friend/getNotifyList/test')
  //     .then((response) => {
  //       setRequests(response.data.user_id);
  //     });
  // }, []);

  return (
    <FriendRequestStyle>
      {requests.map((friend) => (
        <FriendRequestItem key={friend.id} friend={friend} />
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
