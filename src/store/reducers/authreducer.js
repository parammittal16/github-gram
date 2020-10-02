import * as actionTypes from 'AppConstants/actiontypes';
import { checkAuth } from 'AppShared/utility';

const initialState = {
    username: null,
    err: null,
    checkAuth: checkAuth(),
};

function authReducer(state = initialState, { type, payload }) {
    switch (type) {
    case actionTypes.AUTH_SUCCESS:
        return { ...state, err: null, username: payload };
    case actionTypes.AUTH_FAIL:
        return { ...state, err: payload };
    case actionTypes.AUTH_LOGOUT:
        return { ...state, username: null, err: null };
    case actionTypes.CLEAR_ERROR:
        return { ...state, err: null };
    default:
        return state;
    }
}

export default authReducer;
