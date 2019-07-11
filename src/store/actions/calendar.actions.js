import calendarConstants from '../constants/calendar.constants';

const onChangeCurrentMonth = currentMonth => dispatch => {
    const action = {
      type: calendarConstants.CHANGE_MONTH,
      payload: { currentMonth },
    };
    dispatch(action);
};

const onChangeSelectedDate = selectedDate => dispatch => {
    const action = {
      type: calendarConstants.CHANGE_SELECTED_DATE,
      payload: { selectedDate },
    };
    dispatch(action);
};

const calendarActions = {
  onChangeCurrentMonth,
  onChangeSelectedDate,
};
export default calendarActions;
