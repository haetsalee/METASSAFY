import React, { useState, useEffect } from 'react';
import FriendSearchItem from './FriendSearchItem';
import styled from 'styled-components';
import API from '../../../utils/api';

const FriendSearch = () => {
  const [userInput, setUserInput] = useState('');
  const [searchUser, setSearchUser] = useState([]);

  let user = 'annonymous';
  if (window.localStorage.getItem('USER')) {
    user = JSON.parse(window.localStorage.getItem('USER')).user_id;
  }

  // const onChange = (event) => {
  //   setUserInput(event.target.value);
  //   setSearchUser(event.target.value);
  //   console.log(event.target.value);
  // };

  useEffect(() => {
    API.get('/user/allUser')
      .then((res) => {
        setSearchUser(res.data.filter((item) => item.user_id !== user));
      })
      .catch((err) => console.log(err));
  }, []);

  const onAddFriend = (to_user_id) => {
    API.get('friend/call/notify/' + user + '/' + to_user_id)
      .then((res) => {
        if (res.data === true) {
          alert('신청 보냄');
        } else {
          alert('이미 친구거나 방치한 친구요청이 있습니다.');
        }
      })
      .catch((err) => console.log(err));
  };

  const getValue = (event) => {
    setUserInput(event.target.value);
  };

  const searched = searchUser.filter((item) => item.name.includes(userInput));
  return (
    <FriendListStyle>
      <span>유저 검색</span>
      <input onChange={getValue} />
      {searched.map((item) => (
        <FriendSearchItem
          key={item.user_id}
          {...item}
          onAddFriend={onAddFriend}
        />
      ))}
    </FriendListStyle>
  );
};

export default FriendSearch;

const FriendListStyle = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 0rem;
  height: 23rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: #e0f4ff;
    border-radius: 6px;
  }
`;
