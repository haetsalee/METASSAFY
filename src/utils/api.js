import axios from 'axios';
import {
  setLocalAccessToken,
  getLocalAccessToken,
  getLocalRefreshToken,
} from './local-storage';

const API = axios.create({
  baseURL: 'http://i8d211.p.ssafy.io:8088/metassafy',
  headers: {
    'Content-Type': 'application/json',
    // 'jwt-auth-token': TOKEN,
  },
});

API.interceptors.request.use(
  (config) => {
    console.log(config.url);
    // 인증 관련 요청일 경우
    if (config.url.includes('/auth')) {
      // 로그인 안한 상태
      if (!getLocalAccessToken()) {
        if (window.alert('로그인이 필요한 서비스입니다.')) {
          window.location.href = '/';
        }
        return;
      }
      // 헤더에 토큰이 없는 상태
      if (!API.defaults.headers['jwt-auth-token']) {
        API.defaults.headers['jwt-auth-token'] = getLocalAccessToken();
        API.defaults.headers['jwt-refresh-token'] = getLocalRefreshToken();
      }
      return config;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      response: { status },
    } = error;
    console.log(error);

    if (status === 401) {
      console.log('401');

      try {
        const response = await API.get('/user/getNewAccessToken');

        // 새 access token을 헤더와 localStorage에 저장
        const newAccessToken = response.headers['jwt-auth-token'];
        API.defaults.headers['jwt-auth-token'] = newAccessToken;
        error.config.headers['jwt-auth-token'] = newAccessToken;
        setLocalAccessToken(newAccessToken);

        const originalResponse = await API.request(error.config);
        return originalResponse;
      } catch (err) {
        console.log(err);
        new Error(err);
      }
    }
    return Promise.reject(error);
  }
);

export default API;