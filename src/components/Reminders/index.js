import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import Reminder from '../Reminder';
import CreateReminder from '../CreateReminder';

import remindersActions from '../../store/actions/reminders.actions';

import styles from './styles';

class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCreateReminder: false,
    };
  }

  onCreateReminderClicked = () => {
    this.setState({
      openCreateReminder: true,
    });
  }

  onCreateReminderClose = () => {
    this.setState({
      openCreateReminder: false,
    });
  }

  onReminderCreatedTriggered = (/* values */) => {
  }

  render() {
    const { classes } = this.props;
    const { openCreateReminder } = this.state;

    return (
      <div>
        <Card>
          <CardHeader title="Reminders" />
          <Divider />

          <CardContent className={classes.cardContent}>
            <Reminder text="Terminar esto..." date="10/07/2019"/>
            <Reminder text="Leer 'Gettings Things Done' de David Allen..." date="12/07/2019"/>
          </CardContent>

          <Divider />
          <CardActions>
            <Button size="small" color="primary" onClick={this.onCreateReminderClicked}>
              Create Reminder
            </Button>
          </CardActions>
        </Card>
        <CreateReminder
          isOpen={openCreateReminder}
          handleClose={this.onCreateReminderClose}
          onCreate={this.onReminderCreatedTriggered}
        />
      </div>
    );
  }
}

Reminders.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  reminders: PropTypes.arrayOf(PropTypes.obj).isRequired,
  selectedDate: PropTypes.string.isRequired,
  onCreateReminder: PropTypes.func.isRequired,
  onUpdateReminder: PropTypes.func.isRequired,
  onDeleteReminder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  reminders: state.reminders.reminders,
  selectedDate: state.calendar.selectedDate,
});

const mapDispatchToProps = dispatch => ({
  onCreateReminder: reminder => dispatch(remindersActions.onCreateReminder(reminder)),
  onUpdateReminder: reminder => dispatch(remindersActions.onUpdateReminder(reminder)),
  onDeleteReminder: reminder => dispatch(remindersActions.onDeleteReminder(reminder)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Reminders));
