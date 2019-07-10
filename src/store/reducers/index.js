import { combineReducers } from 'redux';

import remindersReducer from './reminders.reducer';

const rootReducer = combineReducers({
  remindersReducer,
});

export default rootReducer;
