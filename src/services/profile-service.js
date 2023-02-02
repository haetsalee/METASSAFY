import API from '../utils/api';

export const fetchProfileModify = async (userInfo) => {
  const requestBody = {
    user_id: id,
    user_pwd: password,
  };

  try {
    const response = await API.post('/user/auth/update', requestBody);
    const { data, status } = response;
    if (data === 'Success') {
      //   await loginProcess(response.headers); // 토큰 저장
    }
    console.log('profile_modify', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};
