export const setTokens = (headers) => {
  localStorage.setItem('auth', headers['jwt-auth-token']);
  localStorage.setItem('refresh', headers['jwt-refresh-token']);
};

export const getAuthToken = () => {
  return localStorage.getItem('auth');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refresh');
};

export const removeTokens = () => {
  localStorage.clear();
};
