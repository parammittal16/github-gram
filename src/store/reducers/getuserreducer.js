import * as actionTypes from 'AppConstants/actiontypes';

const initialState = {
    userProfile: null,
    err: null,
};

function geUserReducer(state = initialState, { type, payload }) {
    switch (type) {
    case actionTypes.USER_GET_SUCCESS:
        return { ...state, userProfile: payload };
    case actionTypes.USER_GET_FAIL:
        return { ...state, err: payload };
    case actionTypes.CLEAR_ERROR:
        return { ...state, err: null };
    default:
        return state;
    }
}

export default geUserReducer;
