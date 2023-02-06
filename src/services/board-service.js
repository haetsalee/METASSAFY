import API from '../utils/api';

export const fetchBoardList = async ({ key, popularity, user_id, word }) => {
  let query = key ? `key=${key}` : '';
  query += popularity ? `popularity=${popularity}` : '';
  query += user_id ? `user_id=${user_id}` : '';
  query += word ? `word=${word}` : '';

  try {
    const { data, status } = await API.get(`/board/${query}`);
    console.log('board list', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};
