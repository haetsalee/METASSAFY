import API from '../utils/api';
import { setTokens, setUserInfo } from '../utils/local-storage';

export const fetchLogin = async ({ id, password }) => {
  const requestBody = {
    user_id: id,
    user_pwd: password,
  };

  try {
    const response = await API.post('/user/login', requestBody);
    const { data, status } = response;
    if (data === 'Success') {
      setTokens(response.headers); // 토큰 저장
    }
    console.log('login', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};

export const fetchRegister = async ({
  id,
  password,
  name,
  email,
  studentId,
  generation,
  area,
}) => {
  const requestBody = {
    user_id: id,
    user_pwd: password,
    name: name,
    email: email,
    student_no: studentId,
    // user_generation: generation,
    area: area,
  };

  try {
    const { data, status } = await API.post('/user/regist', requestBody);
    console.log('register', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};

export const fetchIsExistId = async (id) => {
  try {
    const { data, status } = await API.get(`/user/isExist/${id}`);
    console.log('id check', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};

export const fetchUserInfo = async () => {
  try {
    const { data, status } = await API.get(`/user/auth/getUser`);
    setUserInfo(data);
    console.log('userinfo', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};
