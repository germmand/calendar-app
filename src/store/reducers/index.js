import { combineReducers } from 'redux';

import remindersReducer from './reminders.reducer';
import calendarReducer from './calendar.reducer';

const rootReducer = combineReducers({
  reminders: remindersReducer,
  calendar: calendarReducer,
});

export default rootReducer;
