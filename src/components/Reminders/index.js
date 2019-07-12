import React from 'react';
import PropTypes from 'prop-types';

import dateFns from 'date-fns';

import uuidv1 from 'uuid/v1';

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

  onDeleteReminder = (reminder) => {
    const { onDeleteReminder } = this.props;
    onDeleteReminder(reminder);
  }

  onUpdateReminder = (reminder) => {
    const { onUpdateReminder } = this.props;
    onUpdateReminder(reminder);
  }

  onReminderCreatedTriggered = (values) => {
    const { selectedDate, onCreateReminder } = this.props;
    const reminder = {
      id: uuidv1(),
      text: values.reminderText,
      time: values.reminderTime,
      selectedDate,
    };
    onCreateReminder(reminder);
  }

  render() {
    const { classes, reminders, selectedDate } = this.props;
    const { openCreateReminder } = this.state;

    return (
      <div>
        <Card>
          <CardHeader title="Reminders" />
          <Divider />

          <CardContent className={classes.cardContent}>
            {
              reminders
                .filter(reminder => dateFns.isEqual(selectedDate, reminder.selectedDate))
                .sort((a, b) => {
                  if (a.time < b.time) return -1;
                  if (b.time > a.time) return 1;
                  return 0;
                })
                .map(reminder => <Reminder
                    key={reminder.id}
                    reminder={reminder}
                    onDelete={this.onDeleteReminder}
                    onUpdate={this.onUpdateReminder}
                  />)
            }
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
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
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
