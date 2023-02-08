import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendListItem from './FriendListItem';
import axios from 'axios';
import API from '../../../utils/api';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  const onDeleteFriend = (user_id) => {
    axios
      .post(
        'http://i8d211.p.ssafy.io:8088/metassafy/friend/deleteFriend/' +
          'ssafy/' +
          user_id,
        {
          user_id: user_id,
        }
      )
      .then(function () {
        console.log(user_id);
        setFriends(friends.filter((item) => item.user_id !== user_id));
      });
  };

  let user = 'annonymous';
  if (window.localStorage.getItem('USER')) {
    user = JSON.parse(window.localStorage.getItem('USER')).user_id;
  }

  useEffect(() => {
    API.get('/friend/getFriendList/' + user)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul>
      <FriendListStyle>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.user_id}
            friend={friend}
            onDeleteFriend={onDeleteFriend}
          />
        ))}
      </FriendListStyle>
    </ul>
  );
};

export default FriendList;

const FriendListStyle = styled.div`
  /* padding: 1rem; */
  border-radius: 1rem 1rem 1rem 0rem;
`;
