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
    const {
      data: { message },
      status,
    } = error.response;
    return { data: message, status, error };
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
    user_name: name,
    user_email: email,
    user_studentId: studentId,
    user_generation: generation,
    user_area: area,
  };

  try {
    const { data, status } = await API.post('/user/register', requestBody);
    return { data, status, error: null };
  } catch (error) {
    const {
      data: { message },
      status,
    } = error.response;
    return { data: message, status, error };
  }
};
