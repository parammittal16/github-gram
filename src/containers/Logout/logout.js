import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import * as actions from 'AppStore/actions';

// const onLogout = () => ;

const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.onLogout());
    }, []);

    return (<Redirect to="/" />);
};

// Logout.propTypes = {
//     onLogout: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//     ,
// });

export default Logout;
