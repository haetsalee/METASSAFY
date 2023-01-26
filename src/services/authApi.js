import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const authAxios = axios.create({
  baseURL: 'http://localhost:9999/metassafy/user/',
});

const authApi = {
  login: (id, password) =>
    authAxios.post(
      'login',
      {
        user_id: id,
        user_pwd: password,
      },
      config
    ),
};

export default authApi;
