import * as actionTypes from 'AppConstants/actiontypes';
import { axiosGetWithoutToken } from 'AppShared/utility';

export const getUserProfile = (username) => (dispatch) => {
    axiosGetWithoutToken(`/users/${username}`)
        .then((res) => {
            if (res.status === 200) {
                dispatch({
                    type: actionTypes.USER_GET_SUCCESS,
                    payload: res.data,
                });
            }
        })
        .catch((err) => {
            dispatch({ type: actionTypes.USER_GET_FAIL, payload: err });
        });
};

export const clearError = () => (dispatch) => {
    dispatch({
        type: actionTypes.CLEAR_ERROR,
    });
};
