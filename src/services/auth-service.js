import API from '../utils/api';
import { setTokens } from '../utils/token';

export const fetchLogin = async ({ id, password }) => {
  const requestBody = {
    user_id: id,
    user_pwd: password,
  };

  try {
    const response = await API.post('/user/login', requestBody);
    setTokens(response.headers);
    console.log('api', response);
    const { data, status } = response;
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
    user_studentId: studentId,
    user_generation: generation,
    area: area,
  };

  try {
    const response = await API.post('/user/regist', requestBody);
    const { data, status } = response;
    return { data, status, error: null };
  } catch (error) {
    // return { data: error.message, status: error.response.status, error };
    return error;
  }
};
