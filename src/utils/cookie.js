import cookie from 'react-cookies';

export const setCookie = (key, value) => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);

  cookie.save(key, value, {
    path: '/',
    expires,
    httpOnly: true,
    // secure: true,
  });
};

export const getCookie = (key) => {
  return cookie.load(key);
};

export const removeCookie = (key) => {
  cookie.remove(key, { path: '/' });
};
