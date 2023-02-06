import API from '../utils/api';

export const fetchBoardList = async ({ key, popularity, user_id, word }) => {
  const query = `key=${key}&popularity=${popularity}&user_id=${user_id}&word=${word}`;

  try {
    const { data, status } = await API.get(`/board?${query}`);
    console.log('board list', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};
