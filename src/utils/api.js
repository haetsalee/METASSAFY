import axios from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './local-storage';

const TOKEN = getAccessToken();
console.log(TOKEN);

const API = axios.create({
  baseURL: 'http://i8d211.p.ssafy.io:8088/metassafy',
  headers: {
    'Content-Type': 'application/json',
    'jwt-auth-token': TOKEN,
  },
});

API.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    console.log(error);

    const originalRequest = config;

    if (status === 403) {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      console.log('403');

      try {
        const { data } = await axios({
          method: 'post',
          url: '/user/getNewAccessToken',
          data: { accessToken, refreshToken },
        });
        console.log('get new', data);
        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;
        originalRequest.headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + newAccessToken,
        };
        setAccessToken('ACCESS_TOKEN', newAccessToken);
        setRefreshToken('REFRESH_TOKEN', newRefreshToken);
        console.log(getAccessToken(), getRefreshToken());
        return await axios(originalRequest);
      } catch (err) {
        console.log(err);
        new Error(err);
      }
    }
    return Promise.reject(error);
  }
);

export default API;
