import React, { useState } from 'react';
import styled from 'styled-components';
import RecommendListItem from './RecommendListItem';

const RecommendList = () => {
  const [friends, setFriends] = useState(FriendData);

  return (
    <FriendListStyle>
      {friends.map((friend) => (
        <RecommendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListStyle>
  );
};

const FriendData = [
  {
    id: 1,
    name: '김싸피',
    user_id: '@aaaaa',
    image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
  },
];

export default RecommendList;

const FriendListStyle = styled.div`
  padding: 0.5rem;
  border-radius: 1rem 1rem 1rem 0rem;
`;
