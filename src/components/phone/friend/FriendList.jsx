import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendListItem from './FriendListItem';
import axios from 'axios';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  const onDelete = (user_id) => {
    setFriends(friends.filter((friend) => friend.user_id !== user_id));
  };

  useEffect(() => {
    axios
      .get(
        'http://i8d211.p.ssafy.io:8088/metassafy/friend/getFriendList/' +
          'ssafy'
      )
      .then((response) => {
        setFriends(response.data);
      });
  }, []);

  return (
    <ul>
      <FriendListStyle>
        <p>친구 목록</p>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.user_id}
            friend={friend}
            onDelete={onDelete}
          />
        ))}
      </FriendListStyle>
    </ul>
  );
};

export default FriendList;

const FriendListStyle = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
