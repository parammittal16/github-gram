import * as actionTypes from 'AppConstants/actiontypes';

const initialState = {
    usersProfile: null,
    err: null,
};

function getAllUsersReducer(state = initialState, { type, payload }) {
    switch (type) {
    case actionTypes.USERS_GET_SUCCESS:
        return { ...state, usersProfile: payload };
    case actionTypes.DELETE_USER:
        return { ...state, usersProfile: payload };
    default:
        return state;
    }
}

export default getAllUsersReducer;
