import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Calendar from '../../components/Calendar';
import Reminders from '../../components/Reminders';

// import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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

export default Home;
