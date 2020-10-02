import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import * as actions from 'AppStore/actions';
import loader from 'AppSrc/assets/images/loader.svg';
import DashboardCard from 'AppComponents/DashboardCard';
import WhoToFollow from 'AppContainers/WhoToFollow/whotofollow';
import snackbarCloseTime from 'AppConstants/uiconstants';
import usePrevious from '../../shared/usePrevious';

export const Dashboard = ({
    match,
    history,
}) => {
    const [open, setOpen] = useState(false);
    const userProfileData = useSelector((state) => state.getUser.userProfile);
    const isError = useSelector((state) => state.getUser.err !== null);
    const dispatch = useDispatch();
    const prevProps = usePrevious({ userProfileData });

    useEffect(() => {
        dispatch(actions.getUserProfile(match.params.user));
    }, []);

    useEffect(() => {
        if (prevProps?.userProfileData === null
            || prevProps?.userProfileData?.login !== match.params.user) {
            if (isError && prevProps?.userProfileData === null) {
                history.push('/404');
            } else if (isError) {
                history.push(`/users/${prevProps?.userProfileData?.login}`);
                setOpen(true);
                dispatch(actions.clearError());
            } else {
                dispatch(actions.getUserProfile(match.params.user));
            }
        }
    });


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Grid container>
            <Grid item xs={8}>
                <Grid container alignItems="center" justify="center" style={{ minHeight: '85vh' }}>
                    {userProfileData ? (
                        <DashboardCard data={userProfileData} />
                    ) : <img id="loader" src={loader} alt="loader" />}
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container alignItems="center" justify="center" style={{ minHeight: '85vh' }}>
                    <WhoToFollow />
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={snackbarCloseTime}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="error">
                    User Not Found !
                </Alert>
            </Snackbar>
        </Grid>
    );
};

Dashboard.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default Dashboard;
