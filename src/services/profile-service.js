import API from '../utils/api';
import { setLocalUserInfo } from '../utils/local-storage';

export const fetchProfileModify = async (userInfo) => {
  try {
    const response = await API.post('/user/auth/update', userInfo);
    const { data, status } = response;
    if (data === 'Success') {
      console.log('Success');
      setLocalUserInfo(userInfo);
    }
    console.log('profile_modify', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};
