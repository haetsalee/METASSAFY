import { io } from 'socket.io-client';

export const socket = io.connect('http://localhost:8090', {
  path: '/socket.io',
  transports: ['websocket'],
});
