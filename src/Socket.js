// import { io } from 'socket.io-client';

// export const socket = io.connect('http://localhost:8090', {
//   // export const socket = io.connect('http://i8d211.p.ssafy.io:8090/', {
//   path: '/socket.io',
//   transports: ['websocket'],
// });

import { io } from 'socket.io-client';

export let socket = null;

export function connectSocket() {
  // 빌드용
  // socket = io.connect('http://i8d211.p.ssafy.io:8090/', {
  // 로컬 테스트용 -
  socket = io.connect('http://localhost:8090/', {
    path: '/socket.io',
    transports: ['websocket'],
  });
  socket.on('chating', (chating) => {
    console.log(`${chating.name}님의 메시지 ${chating.text}`, chating);
  });
}
