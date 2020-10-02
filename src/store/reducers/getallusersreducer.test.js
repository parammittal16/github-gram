import * as actionTypes from 'AppConstants/actiontypes';
import reducer from 'AppStore/reducers/getallusersreducer';

describe('Get All Users', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            usersProfile: null,
            err: null,
        });
    });

    it('should store response object in usersProfile not alter error state when user fetch successfully', () => {
        expect(reducer({
            usersProfile: null,
            err: null,
        }, {
            type: actionTypes.USERS_GET_SUCCESS,
            payload: { sample: 'sample' },
        })).toEqual({
            usersProfile: { sample: 'sample' },
            err: null,
        });
    });

    it('should update response object in usersProfile not alter error state when user fetch successfully', () => {
        expect(reducer({
            usersProfile: { sample: 'sample' },
            err: null,
        }, {
            type: actionTypes.DELETE_USER,
            payload: { sample: 'sample2' },
        })).toEqual({
            usersProfile: { sample: 'sample2' },
            err: null,
        });
    });
});
