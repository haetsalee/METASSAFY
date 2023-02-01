import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FriendSendRequestItem from './FriendSendRequestItem';

const FriendSendRequest = () => {
  const [sendRequests, setSendRequests] = useState([]);

  const onDeleteRequest = (friend_no) => {
    axios
      .post('http://i8d211.p.ssafy.io:8088/metassafy/friend/rejectFriend', {
        friend_no: friend_no,
      })
      .then(function () {
        setSendRequests(
          sendRequests.filter((item) => item.friend_no !== friend_no)
        );
      });
  };

  useEffect(() => {
    axios
      .get(
        'http://i8d211.p.ssafy.io:8088/metassafy//friend/getSendList/' + 'ssafy'
      )
      .then((response) => {
        setSendRequests(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <FriendRequestStyle>
      <p>보낸 친구 요청</p>
      {sendRequests.map((friend) => (
        <FriendSendRequestItem
          key={friend.id}
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
