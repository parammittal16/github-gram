import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import axios from 'AppSrc/axiosconfig';
import * as actions from 'AppStore/actions';
import { getCookie } from 'AppShared/utility';
import loader from 'AppSrc/assets/images/loader.svg';
import WhoToFollowCard from 'AppComponents/WhoToFollowCard';
import styles from 'AppContainers/WhoToFollow/whotofollow.styles';
import snackbarCloseTime from 'AppConstants/uiconstants';

export const FollowCard = () => {
    const [open, setOpen] = useState(false);
    const userProfileData = useSelector((state) => state.getAllUsers.usersProfile);
    const dispatch = useDispatch();
    let usersData = (<img id="loader" src={loader} alt="loader" />);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const handleDeletedUser = (delId) => {
        const newUsersProfile = userProfileData.filter((element) => element.id !== delId);
        dispatch(actions.deleteUser(newUsersProfile, userProfileData[2].id));
    };

    const handleUserToBeFollowed = (username, delId) => {
        axios.put(`/user/following/${username}`, null, {
            headers: {
                Authorization: `Bearer ${getCookie('token')}`,
            },
        }).then(() => {
            handleClick();
            const newUsersProfile = userProfileData.filter((element) => element.id !== delId);
            dispatch(actions.deleteUser(newUsersProfile, userProfileData[2].id));
        }).catch((err) => {
            console.log(err);
        });
    };


    useEffect(() => {
        dispatch(actions.getAllUsers());
    }, []);

    if (userProfileData) {
        usersData = userProfileData.map((userData) => (
            <WhoToFollowCard
                key={userData.id}
                data={userData}
                getDeletedUserId={handleDeletedUser}
                getUserToBeFollowed={handleUserToBeFollowed}
            />
        ));
    }
    return (
        <div>
            <div style={styles.centerText}><h2>Who To Follow</h2></div>
            {usersData}
            <Snackbar
                open={open}
                autoHideDuration={snackbarCloseTime}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success">
                    Following Success !!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default FollowCard;
