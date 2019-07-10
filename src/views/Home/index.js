import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Calendar from '../../components/Calendar';
import Reminders from '../../components/Reminders';

import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Calendar />
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <Reminders />
                </Paper>
            </Grid>
        </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Home);
