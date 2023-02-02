import FriendChatBox from '../../components/phone/chat/FriendChatBox';
import Phone from '../../components/UI/Phone';

import styled from 'styled-components';
import ChatRoomNav from '../../components/phone/chat/ChatRoomNav';
import MyChatBox from '../../components/phone/chat/MyChatBox';
import ChatRoomForm from '../../components/phone/chat/ChatRoomForm';

import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import { useState, useEffect } from 'react';

import API from '../../utils/api';

const room = 1;
let user = 'annonymous';
if (window.localStorage.getItem('USER')) {
  user = JSON.parse(window.localStorage.getItem('USER')).user_id;
}

let stompClient;

function PhoneChatingRoom() {
  const [chatList, setChatList] = useState([]);
  const [chatRoom, setRoomList] = useState({});
  const [chat, setChat] = useState('');

  const connect = () => {
    const socket = new SockJS('http://i8d211.p.ssafy.io:8088/metassafy/ws');
    stompClient = Stomp.over(socket);

    // connect(header,연결 성공시 콜백,에러발생시 콜백)
    stompClient.connect(
      {},
      function () {
        //subscribe(subscribe url,해당 url로 메시지를 받을때마다 실행할 함수)
        stompClient.subscribe('/sub/chat/room/' + room, async function (e) {
          //e.body에 전송된 data가 들어있다
          const content = JSON.parse(e.body);

          console.log(content.message);
          content.user_id = user;

          // last_read_chat_id 최신화
          await API.put(
            `/participant/last_read_chat_id`,
            JSON.stringify(content)
          )
            .then((res) => {})
            .catch((err) => console.log(err));
          // await fetch(
          //   `http://i8d211.p.ssafy.io:8088/metassafy/participant/last_read_chat_id`,
          //   {
          //     method: 'put',
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //     body: JSON.stringify(content),
          //   }
          // );

          console.log(1);

          // not_read 최신화
          await API.put(`/chat`, JSON.stringify(content))
            .then((res) => {})
            .catch((err) => console.log(err));

          // await fetch(`http://i8d211.p.ssafy.io:8088/metassafy/chat`, {
          //   method: 'put',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(content),
          // });

          console.log(2);

          let temp = [];

          // chat 리스트 다시 불러오기
          // 대화목록 가져오기
          await API.get(`/chat`, {
            params: {
              start_no: 0,
              user_id: user,
              croom_no: room,
            },
          })
            .then((res) => {
              temp = res.data;
              console.log(res.data);
            })
            .catch((err) => console.log(err));

          // await fetch(
          //   `http://i8d211.p.ssafy.io:8088/metassafy/chat?start_no=0&user_id=ssafy&croom_no=${room}`
          // )
          //   .then((res) => res.json())
          //   .then((data) => (temp = data));
          console.log(temp);
          setChatList(temp);
          // setChatList((_chat_list) => [..._chat_list, content]);

          console.log(3);
        });

        // const data = {
        //   croom_no: room,
        //   user_id: user,
        //   name: 'seok',
        //   message: chat,
        // };
        // // send(destination,헤더,페이로드)
        // stompClient.send('/pub/chat/room/message', {}, JSON.stringify(data));
      },
      function (e) {
        alert('에러발생!!!!!!');
      }
    );
  };

  const send = () => {
    const data = {
      croom_no: room,
      user_id: user,
      name: 'seok',
      message: chat,
    };
    console.log(data);
    // send(destination,헤더,페이로드)
    stompClient.send('/pub/chat/room/message', {}, JSON.stringify(data));
  };

  useEffect(() => {
    connect();

    // return () => disconnect();
  }, []);

  useEffect(() => {
    const data = {
      croom_no: room,
      user_id: user,
    };
    // not_read 갱신하기
    API.put('/chat', JSON.stringify(data))
      .then((res) => console.log(res))
      .then(() => {
        API.get('/chat', {
          params: {
            start_no: 0,
            user_id: 'ssafy',
            croom_no: room,
          },
        })
          .then((res) => {
            setChatList(res.data);
          })
          .catch((err) => console.log(err));
      });
  }, []);

  useEffect(() => {
    API.get(`/chat/room`, {
      params: {
        croom_no: room,
      },
    })
      .then((res) => {
        setRoomList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Phone>
      <ChatRoomNav chatRoom={chatRoom} />
      <ChatRoomDiv>
        <PhoneChatingRoomStyle>
          {chatList.map((chat) => {
            if (chat.user_id === user) {
              return <MyChatBox chat={chat} key={chat.chat_no} />;
            } else {
              return <FriendChatBox chat={chat} key={chat.chat_no} />;
            }
          })}
        </PhoneChatingRoomStyle>
      </ChatRoomDiv>
      <ChatRoomForm setChat={setChat} send={send} />
    </Phone>
  );
}

export default PhoneChatingRoom;

const PhoneChatingRoomStyle = styled.div`
  padding: 0.5rem;
  display: grid;
  width: 100%;
`;

const ChatRoomDiv = styled.div`
  width: 100%;
  height: 82%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #617485;
  }
`;
