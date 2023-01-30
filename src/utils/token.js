export const setTokens = (headers) => {
  localStorage.setItem('auth', headers['jwt-auth-token']);
  localStorage.setItem('refresh', headers['jwt-refresh-token']);
};

export const getAuthToken = () => {
  localStorage.getItem('auth');
};

export const getRefreshToken = () => {
  localStorage.getItem('refresh');
};

export const removeTokens = () => {
  localStorage.clear();
};
