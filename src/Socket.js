// import { io } from 'socket.io-client';

// export const socket = io.connect('http://localhost:8090', {
//   // export const socket = io.connect('http://i8d211.p.ssafy.io:8090/', {
//   path: '/socket.io',
//   transports: ['websocket'],
// });

import { io } from 'socket.io-client';
import { getJsonLocalUserInfo } from './utils/local-storage';

export let socket = null;

export function connectSocket() {
  // socket = io.connect('http://i8d211.p.ssafy.io:8090/', {
  socket = io.connect('http://localhost:8090/', {
    path: '/socket.io',
    transports: ['websocket'],
  });
  socket.on('chating', (chating) => {
    console.log(`${chating.name}님의 메시지 ${chating.text}`, chating);
  });
}
