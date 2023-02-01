import React, { useState, useEffect } from 'react';
import FriendSearchItem from './FriendSearchItem';
import styled from 'styled-components';
import axios from 'axios';

const FriendSearch = () => {
  const [userInput, setUserInput] = useState('');
  const [allUserList, setAllUserList] = useState([]);

  useEffect(() => {
    axios
      .get('http://i8d211.p.ssafy.io:8088/metassafy/user/allUser')
      .then((response) => {
        setAllUserList(response.data);
      });
  }, []);

  const onAddFriend = (to_user_id) => {
    axios({
      method: 'get',
      url:
        'http://i8d211.p.ssafy.io:8088/metassafy/friend/call/notify/' +
        'ssafy/' +
        to_user_id,
    }).then(function (response) {
      console.log(response.data);
      if (response.data === true) {
        alert('신청 보냄');
      } else {
        alert('이미 친구거나 방치한 친구요청이 있습니다.');
      }
    });
  };

  const getValue = (event) => {
    setUserInput(event.target.value);
  };

  const searched = allUserList.filter((item) => item.name.includes(userInput));

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
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: #e0f4ff;
    border-radius: 6px;
  }
`;
