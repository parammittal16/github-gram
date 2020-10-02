import * as actionTypes from 'AppConstants/actiontypes';
import { setCookie, deleteCookie, axiosGet } from 'AppShared/utility';

export const onLogin = (credentials) => (dispatch) => {
    axiosGet(`/users/${credentials.username}`, credentials)
        .then((res) => {
            if (res.status === 200) {
                setCookie('token', credentials.token);
                dispatch({
                    type: actionTypes.AUTH_SUCCESS,
                    payload: res.data.login,
                });
            }
        })
        .catch((err) => {
            dispatch({ type: actionTypes.AUTH_FAIL, payload: err });
        });
};

export const getUserByToken = (token) => (dispatch) => {
    axiosGet('/user', { token })
        .then((res) => {
            if (res.status === 200) {
                dispatch({
                    type: actionTypes.AUTH_SUCCESS,
                    payload: res.data.login,
                });
            }
        })
        .catch((err) => {
            dispatch({ type: actionTypes.AUTH_FAIL, payload: err });
        });
};

export const onLogout = () => {
    console.log('hiii');
    deleteCookie('token');
    return (dispatch) => {
        dispatch({ type: 'AUTH_LOGOUT' });
    };
};

export const clearErrorAuth = () => (dispatch) => {
    dispatch({
        type: actionTypes.CLEAR_ERROR,
    });
};
