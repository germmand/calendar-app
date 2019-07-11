import remindersConstants from '../constants/reminders.constants';

const onCreateReminder = reminder => (dispatch) => {
  const action = {
    type: remindersConstants.CREATE_REMINDER,
    reminder,
  };
  dispatch(action);
};

const onUpdateReminder = reminder => (dispatch) => {
  const action = {
    type: remindersConstants.UPDATE_REMINDER,
    reminder,
  };
  dispatch(action);
};

const onDeleteReminder = reminder => (dispatch) => {
  const action = {
    type: remindersConstants.DELETE_REMINDER,
    reminder,
  };
  dispatch(action);
};

const remindersActions = {
  onCreateReminder,
  onUpdateReminder,
  onDeleteReminder,
};
export default remindersActions;
