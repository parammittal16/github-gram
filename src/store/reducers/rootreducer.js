import { combineReducers } from 'redux';

import authReducer from 'AppStore/reducers/authreducer';
import getUserReducer from 'AppStore/reducers/getuserreducer';
import getAllUsersReducer from 'AppStore/reducers/getallusersreducer';


const rootReducer = combineReducers({
    auth: authReducer,
    getUser: getUserReducer,
    getAllUsers: getAllUsersReducer,
});

export default rootReducer;
