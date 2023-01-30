import React, { useState } from 'react';
import styled from 'styled-components';
import FriendItem from './FriendItem';

const FriendList = () => {
  const [friends, setFriends] = useState(FriendData);
  const onDelete = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <ul>
      <FriendListStyle>
        {friends.map((friend) => (
          <FriendItem key={friend.id} friend={friend} onDelete={onDelete} />
        ))}
      </FriendListStyle>
    </ul>
  );
};

const FriendData = [
  {
    id: 1,
    name: '김싸피',
    state: '접속중 : 회의실',
    image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
  },
  {
    id: 2,
    name: '이싸피',
    state: '자리비움 : 로비',
    image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
  },
  {
    id: 3,
    name: '박싸피',
    state: '미접속',
    image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
  },
];

export default FriendList;

const FriendListStyle = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
