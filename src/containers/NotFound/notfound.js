import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import notFound from 'AppSrc/assets/images/404.svg';
import styles from 'AppContainers/NotFound/notfound.styles';

const NotFound = () => (
    <Grid container alignItems="center" justify="center" style={{ minHeight: '85vh' }}>
        <Typography component="h1" variant="h1">404</Typography>
        <img style={styles.img} src={notFound} alt="notFoundImage" />
    </Grid>
);

export default NotFound;
