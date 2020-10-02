import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Chip,
    Link,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from 'AppComponents/DashboardCard/dashboardcard.styles';

const dashboardcard = ({ data }) => (
    <Card style={styles.root}>
        <CardMedia
            style={styles.cover}
            image={data.avatar_url}
            title={data.name}
        />
        <div style={styles.details}>
            <CardContent style={styles.content}>
                <Typography component="h4" variant="h4">{data.login}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{data.name}</Typography>
                <Typography component="h6" variant="h6">{data.location}</Typography>
                <Typography component="h6" variant="h6">{data.email}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.bio}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">{data.blog}</Typography>
                <Chip style={styles.chip} label={`Followers: ${data.followers}`} />
                <Chip style={styles.chip} label={`Following: ${data.following}`} />
                <Link style={styles.link} href={data.html_url}>View on github</Link>
            </CardContent>
        </div>
    </Card>
);

dashboardcard.propTypes = {
    data: PropTypes.object,
};

dashboardcard.defaultProps = {
    data: null,
};

export default dashboardcard;
