import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

class ReminderManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        reminderText: '',
        reminderTime: '',
      },
    };
  }

  onChangeField = (field, value) => {
    const newState = { ...this.state };
    newState.values[field] = value;
    this.setState(newState);
  }

  onSubmitForm = () => {
    const { onCreate, handleClose, isUpdate } = this.props;
    const { values } = this.state;
    if (!isUpdate) {
      onCreate(values);
    } else {
      const { reminder, onUpdate } = this.props;
      const updatedReminder = {
        ...reminder,
        text: values.reminderText,
        time: values.reminderTime,
      };
      onUpdate(updatedReminder);
    }
    handleClose();
  }

  render() {
    const {
      isUpdate, isOpen, handleClose, classes,
    } = this.props;
    const { values } = this.state;

    return (
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="create-reminder-dialog">
        <DialogTitle id="create-reminder-dialog">{ isUpdate ? 'Update' : 'Create' } Reminder</DialogTitle>
        <form className={classes.container}>
          <TextField
            id="reminder-text"
            label="Reminder Text"
            fullWidth
            helperText="30 Chars Max."
            className={classes.textField}
            value={values.reminderText}
            onChange={event => this.onChangeField('reminderText', event.target.value)}
          />
          <TextField
            id="reminder-time"
            label="Reminder Time"
            fullWidth
            type="time"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
            value={values.reminderTime}
            onChange={event => this.onChangeField('reminderTime', event.target.value)}
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
            onClick={this.onSubmitForm}
          >
            {isUpdate ? 'Update' : 'Create'}
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={handleClose}
            className={classes.button}
          >
            Cancel
          </Button>
        </form>
      </Dialog>
    );
  }
}

ReminderManager.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isUpdate: PropTypes.bool,
  onUpdate: PropTypes.func,
  onCreate: PropTypes.func,
  reminder: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    selectedDate: PropTypes.string.isRequired,
  }),
};

ReminderManager.defaultProps = {
  isUpdate: false,
  onUpdate: () => { },
  onCreate: () => { },
  reminder: undefined,
};

export default withStyles(styles)(ReminderManager);
