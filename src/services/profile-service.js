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

export const fetchUserStackById = async (id) => {
  try {
    const { data, status } = await API.get(`/user/auth/techList/${id}`);
    if (status === 200) {
      console.log('userStack', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchAllStacks = async (id) => {
  try {
    const { data, status } = await API.get('/user/allTechList');
    if (status === 200) {
      // console.log('AllStacks', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchTechSave = async (user_id, tech) => {
  const requestBody = {
    user_id: user_id,
    tech_id: tech.tech_id,
  };
  try {
    const { data, status } = await API.post('/user/addTech', requestBody);
    if (status === 200) {
      // console.log('save tech', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchProfileImage = async (formData) => {
  try {
    API.defaults.headers['Content-Type'] = 'multipart/form-data';
    const { data, status } = await API.post('/user/uploadProfileImg', formData);
    API.defaults.headers['Content-Type'] = 'application/json';
    if (status === 200) {
      console.log('save tech', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};
