import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core';
import { Close, GitHub } from '@material-ui/icons';

import styles from 'AppComponents/WhoToFollowCard/whotofollowcard.styles';

const WhoToFollowCard = ({
    data,
    getDeletedUserId,
    getUserToBeFollowed,
}) => (
    <Card style={styles.root}>
        <Link to={`/users/${data.login}`}>
            <CardMedia
                style={styles.cover}
                image={data.avatar_url}
                title={data.name}
            />
        </Link>
        <div style={styles.details}>
            <CardContent style={styles.content}>
                <Typography variant="subtitle1" color="textSecondary">{data.login}</Typography>
                <IconButton variant="link" target="_blank" href={`${data.html_url}`}><GitHub style={styles.githubIcon} /></IconButton>
                <Button onClick={() => getUserToBeFollowed(data.login, data.id)} size="small" variant="outlined" color="primary">Follow</Button>
                <IconButton
                    onClick={() => getDeletedUserId(data.id)}
                    style={styles.closeButton}
                >
                    <Close />
                </IconButton>
            </CardContent>
        </div>
    </Card>
);

WhoToFollowCard.propTypes = {
    data: PropTypes.object.isRequired,
    getUserToBeFollowed: PropTypes.func.isRequired,
    getDeletedUserId: PropTypes.func.isRequired,
};

export default WhoToFollowCard;
