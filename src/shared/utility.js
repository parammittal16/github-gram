import cookie from 'react-cookies';

import axios from 'AppSrc/axiosconfig';

export const checkAuth = () => typeof cookie.load('token') !== 'undefined';

export const setCookie = (key, value) => {
    cookie.save(key, value, { path: '/' });
};

export const deleteCookie = () => {
    cookie.remove('token', { path: '/' });
};

export const getCookie = (key) => cookie.load(key);

export const axiosGet = (path, data) => axios.get(path, { headers: { Authorization: `Bearer ${data.token}` } });
export const axiosGetWithoutToken = (path) => axios.get(path, { headers: { Authorization: `Bearer ${getCookie('token')}` } });
