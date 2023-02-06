import API from '../utils/api';

export const getBoardList = async (key, popularity, user_id, word) => {
  const filter = {
    key: key,
    popularity: popularity || false,
    user_id: user_id,
    word: word,
  };
  const { data, status } = await fetchBoardList(filter);
  if (status === 200) {
    return data;
  }
};

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
