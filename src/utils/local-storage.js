export const setTokens = (headers) => {
  localStorage.setItem('ACCESS_TOKEN', headers['jwt-auth-token']);
  localStorage.setItem('REFRESH_TOKEN', headers['jwt-refresh-token']);
};

export const removeTokens = () => {
  localStorage.clear();
};

export const getAccessToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem('ACCESS_TOKEN', accessToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem('REFRESH_TOKEN');
};

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem('REFRESH_TOKEN', refreshToken);
};

export const getUserInfo = () => {
  return localStorage.getItem('USER');
};

export const setUserInfo = (userInfo) => {
  localStorage.setItem('USER', JSON.stringify(userInfo));
};
