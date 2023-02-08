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

export const fetchBoardLikePost = async ({ type, no, user_id }) => {
  const requestBody = {
    like_type: type,
    user_id: user_id,
    no: no,
  };

  try {
    const { data, status } = await API.post('/board/like', requestBody);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};

export const fetchBoardLikeDelete = async ({ type, no, user_id }) => {
  const requestBody = {
    like_type: type,
    user_id: user_id,
    no: no,
  };

  try {
    const { data, status } = await API.delete('/board/like', {
      data: requestBody,
    });
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};

export const fetchBoardImage = async (formData) => {
  try {
    API.defaults.headers['Content-Type'] = 'multipart/form-data';
    const { data, status } = await API.post(
      '/board/uploadAndgetLink',
      formData
    );
    API.defaults.headers['Content-Type'] = 'application/json';
    if (status === 200) {
      console.log('upload img', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchBoardPost = async ({
  user_id,
  title,
  content,
  thumbnail,
}) => {
  const requestBody = {
    user_id: user_id,
    title: title,
    content: content,
    thumbnail: thumbnail,
  };
  console.log(requestBody);

  try {
    const { data, status } = await API.post('/board/writeSimple', requestBody);
    if (status === 200) {
      console.log('board write', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};
