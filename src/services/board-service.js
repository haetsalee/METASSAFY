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

export const fetchBoardPost = async (formData) => {
  try {
    const { data, status } = await API.post('/board', formData, {
      headers: {
        'Contest-Type': 'multipart/form-data',
      },
      transformRequest: (formData) => formData,
    });
    if (status === 200) {
      console.log('board write', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchBoardPut = async ({ user_id, title, content, thumbnail }) => {
  const requestBody = {
    user_id: user_id,
    title: title,
    content: content,
    thumbnail: thumbnail,
  };

  try {
    const { data, status } = await API.put('/board/writeSimple', requestBody);
    if (status === 200) {
      console.log('board write', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchBoardGet = async (article_no, user_id) => {
  const requestBody = {
    article_no,
    user_id,
  };

  try {
    const { data, status } = await API.post('/board/article', requestBody);
    if (status === 200) {
      console.log('board get', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchBoardDelete = async (article_no) => {
  try {
    const { data, status } = await API.delete(`/board/${article_no}`);
    if (status === 200) {
      console.log('board delete', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchCommentPost = async ({ article_no, content, user_id }) => {
  const requestBody = {
    article_no,
    content,
    user_id,
  };

  try {
    const { data, status } = await API.post('/memo', requestBody);
    if (status === 200) {
      console.log('memo write', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchCommentGet = async (article_no, user_id) => {
  try {
    const { data, status } = await API.get(
      `/memo?article_no=${article_no}&user_id=${user_id}`
    );
    console.log('memo list', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};

export const fetchCommentDelete = async (memo_no) => {
  try {
    const { data, status } = await API.delete(`/memo/${memo_no}`);
    if (status === 200) {
      console.log('memo delete', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

// 대댓글
export const fetchCocommentPost = async ({ article_no, content, user_id }) => {
  const requestBody = {
    article_no,
    content,
    user_id,
  };

  try {
    const { data, status } = await API.post('/mememo', requestBody);
    if (status === 200) {
      console.log('memo write', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};

export const fetchCocommentGet = async (memo_no, user_id) => {
  try {
    const { data, status } = await API.get(
      `/mememo?memo_no=${memo_no}&user_id=${user_id}`
    );
    console.log('memo list', data, status);
    return { data, status, error: null };
  } catch (error) {
    return { data: error.message, status: error.response.status, error };
  }
};

export const fetchCocommentDelete = async (memo_no) => {
  try {
    const { data, status } = await API.delete(`/mememo/${memo_no}`);
    if (status === 200) {
      console.log('memo delete', data);
      return { data, status, error: null };
    }
    return { data, status, error: 'Fail' };
  } catch (error) {
    return { data: error.message, status: error.response?.status, error };
  }
};
