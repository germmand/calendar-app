import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

class CreateReminder extends React.Component {
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
    const { onCreate } = this.props;
    const { values } = this.state;
    onCreate(values);
  }

  render() {
    const { isOpen, handleClose, classes } = this.props;
    const { values } = this.state;

    return (
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="create-reminder-dialog">
        <DialogTitle id="create-reminder-dialog">Create Reminder</DialogTitle>
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
            Create
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

CreateReminder.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateReminder);
