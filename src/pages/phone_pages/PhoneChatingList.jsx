import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import ChatRoomSearch from '../../components/phone/chat/ChatRoomSearch';
import ChatRoomSearchResult from '../../components/phone/chat/ChatRoomSearchResult';
import MyChatRoomList from '../../components/phone/chat/MyChatRoomList';
import ChatRoomNav from '../../components/phone/chat/ChatRoomNav';
import ChatInviteList from '../../components/phone/chat/ChatInviteList';

import { useState, useEffect } from 'react';

import API from '../../utils/api';

function PhoneChatingList() {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [inviteList, setInviteList] = useState([]);

  useEffect(() => {
    API.get(`/user/searchUser/${search}`)
      .then((res) => {
        console.log(res);
        setSearchList(res.data);
        console.log(searchList);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <Phone>
      <ChatRoomNav />
      <PhoneChatingListStyle>
        <ChatInviteList setInviteList={setInviteList} />
        <ChatRoomSearch setSearch={setSearch} />
        <ChatRoomSearchResult setSearchList={searchList} />
        <MyChatRoomList />
      </PhoneChatingListStyle>
    </Phone>
  );
}

export default PhoneChatingList;

const PhoneChatingListStyle = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #617485;
  }
`;
