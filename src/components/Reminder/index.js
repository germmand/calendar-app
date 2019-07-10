import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

const Reminder = ({ text, date, classes }) => (
    <Card className={classes.card}>
        <CardContent>
            <Typography gutterBottom variant="body2" component="p" className={classes.text}>
                {text}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
                {date}
            </Typography>
        </CardContent>
        <Divider variant="middle"/>
        <CardActions>
            <IconButton color="secondary" aria-label="Delete Reminder">
                <Icon>delete</Icon>
            </IconButton>
            <IconButton color="primary" aria-label="Edit Reminder">
                <Icon>edit</Icon>
            </IconButton>
        </CardActions>
    </Card>
);

Reminder.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default withStyles(styles)(Reminder);
