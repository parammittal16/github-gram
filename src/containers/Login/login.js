import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    Typography,
    Snackbar,
    Input,
    Button,
    Grid,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import * as actions from 'AppStore/actions';
import { checkAuth } from 'AppShared/utility';
import logo from 'AppSrc/assets/images/github_search.svg';
import styles from 'AppContainers/Login/login.styles';
import snackbarCloseTime from 'AppConstants/uiconstants';

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState('');
    const [open, setOpen] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const isAuthenticated = useSelector(() => checkAuth());
    const isError = useSelector((state) => state.auth.err !== null);
    const username = useSelector((state) => state.auth.username);
    const dispatch = useDispatch();

    let authRedirect = null;

    const handleClick = (message) => {
        setErrMessage(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName && token) {
            dispatch(actions.onLogin({
                username: userName,
                token,
                open,
                errMessage,
            }));
        } else {
            handleClick('Please Fill the fields');
        }
    };

    useEffect(() => {
        if (isError) {
            handleClick('User Not Found');
            dispatch(actions.clearErrorAuth());
        }
    }, [isError]);

    if (isAuthenticated && username) {
        authRedirect = (<Redirect to={`/users/${username}`} />);
    }
    return (
        <div>
            {authRedirect}
            <Grid container alignItems="center" justify="center" style={styles.outerGrid}>
                <img style={styles.logo} src={logo} alt="logo" />
                <form id="loginForm" onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Typography gutterBottom variant="h2" align="center">GITHUB-GRAM</Typography>
                    <Input
                        type="text"
                        required
                        fullWidth
                        placeholder="Username"
                        name="username"
                        id="username"
                        onChange={(e) => setUserName(e.target.value)}
                        style={styles.input}
                    />
                    <Input
                        type="password"
                        required
                        fullWidth
                        name="token"
                        placeholder="Token"
                        id="token"
                        onChange={(e) => setToken(e.target.value)}
                        style={styles.input}
                    />
                    <Button id="submitBut" style={styles} type="submit" fullWidth variant="contained" color="primary"> Log In </Button>
                </form>
                <Snackbar
                    open={open}
                    autoHideDuration={snackbarCloseTime}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="error">
                        {errMessage}
                    </Alert>
                </Snackbar>
            </Grid>
        </div>
    );
};

export default Login;
