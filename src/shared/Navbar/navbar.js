import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    Button,
    Typography,
    Toolbar,
    AppBar,
} from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import * as actions from 'AppStore/actions/index';
import theme from 'AppSrc/theme';
import { getCookie } from 'AppShared/utility';
import styles from 'AppShared/Navbar/navbar.styles';
import NavbarSearch from 'AppShared/Navbar/NavbarSearch/navbarsearch';

export const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [redirect, setRedirect] = useState(null);
    const loggedInUsername = useSelector((state) => state.auth.username);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setRedirect(<Redirect to={`/users/${searchValue}`} />);
    };

    useEffect(() => {
        if (loggedInUsername === null) {
            console.log('null one');
            dispatch(actions.getUserByToken(getCookie('token')));
        }
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <div style={styles.root}>
                {redirect}
                <AppBar position="static">
                    <Toolbar>
                        <Typography style={styles.title}>
                            Hi,
                            {loggedInUsername ? <Link style={styles.link} to={`/users/${loggedInUsername}`}>{loggedInUsername}</Link> : null}
                        </Typography>
                        <NavbarSearch
                            getSubmitedForm={handleSubmit}
                            getChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button component={Link} to="/logout" color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </MuiThemeProvider>
    );
};

export default Navbar;
