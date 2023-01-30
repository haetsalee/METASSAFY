import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.100.56:9999/metassafy',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
