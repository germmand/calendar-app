import remindersConstants from '../constants/reminders.constants';

const initialState = {
  reminders: [],
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case remindersConstants.CREATE_REMINDER:
      return Object.assign({}, state, {
        reminders: [...state.reminders, action.payload.reminder],
      });
    case remindersConstants.UPDATE_REMINDER:
      return Object.assign({}, state, {
        reminders: state.reminders.map((item) => {
          if (item.id !== action.payload.reminder.id) {
            return item;
          }
          return {
            ...item,
            ...action.payload.reminder,
          };
        }),
      });
    case remindersConstants.DELETE_REMINDER:
      return Object.assign({}, state, {
        reminders: state.reminders.filter(
          item => item.id !== action.payload.reminder.id,
        ),
      });
    default:
      return state;
  }
};

export default remindersReducer;
