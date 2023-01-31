import React, { useState } from 'react';
import styled from 'styled-components';
import FriendSendRequestItem from './FriendSendRequestItem';

const FriendSendRequest = () => {
  const [friends, setFriends] = useState(FriendData);
  const onDelete = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <FriendRequestStyle>
      {friends.map((friend) => (
        <FriendSendRequestItem
          key={friend.id}
          friend={friend}
          onDelete={onDelete}
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

export default FriendSendRequest;

const FriendRequestStyle = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
