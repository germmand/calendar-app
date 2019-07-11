import remindersConstants from '../constants/reminders.constants';

const onCreateReminder = reminder => (dispatch) => {
  const action = {
    type: remindersConstants.CREATE_REMINDER,
    payload: { reminder },
  };
  dispatch(action);
};

const onUpdateReminder = reminder => (dispatch) => {
  const action = {
    type: remindersConstants.UPDATE_REMINDER,
    payload: { reminder },
  };
  dispatch(action);
};

const onDeleteReminder = reminder => (dispatch) => {
  const action = {
    type: remindersConstants.DELETE_REMINDER,
    payload: { reminder },
  };
  dispatch(action);
};

const remindersActions = {
  onCreateReminder,
  onUpdateReminder,
  onDeleteReminder,
};
export default remindersActions;
