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
    <div>
      <span>유저 검색</span>
      <input
        onChange={getValue}
        style={{
          marginLeft: '4rem',
          width: '7rem',
        }}
      />
      {searched.map((item) => (
        <FriendSearchItem
          key={item.user_id}
          {...item}
          onAddFriend={onAddFriend}
        />
      ))}
    </div>
  );
};

export default FriendSearch;
