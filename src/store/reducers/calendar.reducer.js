import calendarConstants from '../constants/calendar.constants';

const initialState = {
  selectedDate: new Date(),
  currentMonth: new Date(),
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case calendarConstants.CHANGE_MONTH:
      return Object.assign({}, state, {
        currentMonth: action.payload.currentMonth,
      });
    case calendarConstants.CHANGE_SELECTED_DATE:
      return Object.assign({}, state, {
        selectedDate: action.payload.selectedDate,
      });
    default:
      return state;
  }
};

export default calendarReducer;
