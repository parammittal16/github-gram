import * as actionTypes from 'AppConstants/actiontypes';
import reducer from 'AppStore/reducers/authreducer';

describe('auth Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            username: null,
            err: null,
        });
    });

    it('should store the userbame and make error to null upon login', () => {
        expect(reducer({
            username: null,
            err: null,
        }, {
            type: actionTypes.AUTH_SUCCESS,
            payload: 'sample-username',
        })).toEqual({
            username: 'sample-username',
            err: null,
        });
    });

    it('should store the error message object catched in error upon login Failed', () => {
        expect(reducer({
            username: null,
            err: null,
        }, {
            type: actionTypes.AUTH_FAIL,
            payload: { message: 'Not Found' },
        })).toEqual({
            username: null,
            err: { message: 'Not Found' },
        });
    });

    it('should store null in username and error upon logout', () => {
        expect(reducer({
            username: 'sample-username',
            err: null,
        }, {
            type: actionTypes.AUTH_LOGOUT,
        })).toEqual({
            username: null,
            err: null,
        });
    });

    it('should store null error do not alter username upon clearError', () => {
        expect(reducer({
            username: null,
            err: { message: 'Not Found' },
        }, {
            type: actionTypes.CLEAR_ERROR,
        })).toEqual({
            username: null,
            err: null,
        });
    });
});
