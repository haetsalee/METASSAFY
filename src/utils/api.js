import axios from 'axios';

const API = axios.create({
  baseURL: 'http://i8d211.p.ssafy.io:8088/metassafy',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
