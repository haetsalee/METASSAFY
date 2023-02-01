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
        console.log(response.data);
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
    <SearchListStyle>
      <p>유저 검색</p>
      <input onChange={getValue} />
      {searched.map((item) => (
        <FriendSearchItem
          key={item.user_id}
          {...item}
          onAddFriend={onAddFriend}
        />
      ))}
    </SearchListStyle>
  );
};

export default FriendSearch;

const SearchListStyle = styled.div`
  top: 10rem;
  height: 18rem;
`;
