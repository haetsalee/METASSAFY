import API from '../utils/api';
import { setLocalUserInfo } from '../utils/local-storage';

export const fetchProfileModify = async (info) => {
  try {
    console.log(info);
    const response = await API.post('/user/auth/update', info, {
      'Content-Type': 'application/json',
      // 'jwt-auth-token': TOKEN,
    });
    console.log(response);
    const { data, status } = response;
    if (data === 'Success') {
      console.log('Success');
      setLocalUserInfo(info);
    }
    console.log('profile_modify', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};
