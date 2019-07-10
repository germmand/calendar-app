import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/styles';
import Reminder from '../Reminder';

import styles from './styles';

class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Card>
        <CardHeader title="Reminders" />
        <Divider />

        <CardContent className={classes.cardContent}>
            <Reminder text="Terminar esto..." date="10/07/2019"/>
            <Reminder text="Leer 'Gettings Things Done' de David Allen..." date="12/07/2019"/>
        </CardContent>

        <Divider />
        <CardActions>
          <Button size="small" color="primary">
            Create Reminder
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Reminders.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Reminders);
