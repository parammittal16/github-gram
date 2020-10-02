import * as actionTypes from 'AppConstants/actiontypes';
import { axiosGetWithoutToken } from 'AppShared/utility';

export const getAllUsers = () => (dispatch) => {
    axiosGetWithoutToken(`/users?since=${Math.floor(Math.random() * (10000000 - 0 + 1) + 0)}&per_page=3`)
        .then((res) => {
            if (res.status === 200) {
                dispatch({
                    type: actionTypes.USERS_GET_SUCCESS,
                    payload: res.data,
                });
            }
        })
        .catch((err) => {
            dispatch({ type: actionTypes.USERS_GET_FAIL, payload: err });
        });
};

export const deleteUser = (newData, lastId) => (dispatch) => {
    axiosGetWithoutToken(`/users?since=${lastId}&per_page=1`)
        .then((res) => {
            if (res.status === 200) {
                newData.push(res.data[0]);
                dispatch({
                    type: actionTypes.DELETE_USER,
                    payload: newData,
                });
            }
        })
        .catch((err) => {
            dispatch({ type: actionTypes.USERS_GET_FAIL, payload: err });
        });
};
