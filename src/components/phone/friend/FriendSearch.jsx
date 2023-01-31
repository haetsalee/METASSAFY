import React, { useState, useEffect } from 'react';
import FriendSearchItem from './FriendSearchItem';
import styled from 'styled-components';
import axios from 'axios';

const FriendSearch = () => {
  const [userInput, setUserInput] = useState('');
  const [allUserList, setAllUserList] = useState([]);

  // const allUser = async () => {
  //   console.log('fetch');
  //   try {
  //     const response = await API.get('/user/allUser');
  //     setAllUserList(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   allUser();
  // }, []);

  useEffect(() => {
    axios
      .get('http://i8d211.p.ssafy.io:8088/metassafy/user/allUser')
      .then((response) => {
        setAllUserList(response.data);
      });
  }, []);

  const getValue = (event) => {
    setUserInput(event.target.value);
  };

  const searched = allUserList.filter((item) => item.name.includes(userInput));

  return (
    <SearchListStyle>
      <input onChange={getValue} />
      {searched.map((item) => (
        <FriendSearchItem key={item.user_id} {...item} />
      ))}
    </SearchListStyle>
  );
};

export default FriendSearch;

const SearchListStyle = styled.div`
  top: 10rem;
  height: 18rem;
`;
