import React from 'react';
import PropTypes from 'prop-types';
import {
    Input,
    Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import theme from 'AppSrc/theme';
import styles from 'AppShared/Navbar/NavbarSearch/navbarsearch.styles';

export default function NavbarSearch({ getSubmitedForm, getChange }) {
    return (
        <div style={styles.search}>
            <form id="loginForm" onSubmit={(e) => getSubmitedForm(e)} noValidate autoComplete="off">
                <Input
                    type="text"
                    required
                    placeholder="Search…"
                    id="searchValue"
                    name="searchValue"
                    onChange={(e) => getChange(e)}
                    style={theme.whiteText}
                />
                <Button type="submit" color="inherit"><SearchIcon /></Button>
            </form>
        </div>
    );
}

NavbarSearch.propTypes = {
    getChange: PropTypes.func,
    getSubmitedForm: PropTypes.func,
};

NavbarSearch.defaultProps = {
    getChange: null,
    getSubmitedForm: null,
};
