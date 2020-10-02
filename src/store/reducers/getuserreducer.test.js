import * as actionTypes from 'AppConstants/actiontypes';
import reducer from 'AppStore/reducers/getuserreducer';

describe('get user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            userProfile: null,
            err: null,
        });
    });

    it('should store response object in userProfile do not alter error state when user fetch successfully', () => {
        expect(reducer({
            userProfile: null,
            err: null,
        }, {
            type: actionTypes.USER_GET_SUCCESS,
            payload: { sample: 'sample' },
        })).toEqual({
            userProfile: { sample: 'sample' },
            err: null,
        });
    });

    it('should store the error message object catched in error upon fetch user failed', () => {
        expect(reducer({
            userProfile: null,
            err: null,
        }, {
            type: actionTypes.USER_GET_FAIL,
            payload: { message: 'Not Found' },
        })).toEqual({
            userProfile: null,
            err: { message: 'Not Found' },
        });
    });

    it('should store the error message object catched in error upon fetch user failed', () => {
        expect(reducer({
            userProfile: { sample: 'sample' },
            err: null,
        }, {
            type: actionTypes.USER_GET_FAIL,
            payload: { message: 'Not Found' },
        })).toEqual({
            userProfile: { sample: 'sample' },
            err: { message: 'Not Found' },
        });
    });

    it('should store null error do not alter userProfile upon clearError', () => {
        expect(reducer({
            userProfile: null,
            err: { message: 'Not Found' },
        }, {
            type: actionTypes.CLEAR_ERROR,
        })).toEqual({
            userProfile: null,
            err: null,
        });
    });

    it('should store null error do not alter userProfile upon clearError', () => {
        expect(reducer({
            userProfile: { sample: 'sample' },
            err: { message: 'Not Found' },
        }, {
            type: actionTypes.CLEAR_ERROR,
        })).toEqual({
            userProfile: { sample: 'sample' },
            err: null,
        });
    });
});
