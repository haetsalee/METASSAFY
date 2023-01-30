import { io } from 'socket.io-client';

export let socket = null;

export function connectSocket() {
  socket = io.connect('http://localhost:5000', {
    path: '/socket.io',
    transports: ['websocket'],
  });
  socket.on('chating', (chating) => {
    console.log(`${chating.name}님의 메시지 ${chating.text}`, chating);
  });
}
