import calendarConstants from '../../../store/constants/calendar.constants';
import calendarReducer from '../../../store/reducers/calendar.reducer';

describe('calendar reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      selectedDate: new Date(2015, 7, 15),
      currentMonth: new Date(2015, 9, 12),
    };
  });

  it('returns the initial state', () => {
    const returnedState = calendarReducer(undefined, {});
    expect(Object.keys(returnedState)).toEqual(Object.keys(initialState));
  });

  it('updates state with current month on change month action', () => {
    const currentMonthUpdated = new Date(2016, 8, 15);
    const action = {
      type: calendarConstants.CHANGE_MONTH,
      payload: {
        currentMonth: currentMonthUpdated,
      },
    };
    const expectedState = {
      ...initialState,
      currentMonth: currentMonthUpdated,
    };
    expect(calendarReducer(initialState, action)).toEqual(expectedState);
  });

  it('updated state with selected date on change selected date', () => {
    const selectedDateUpdated = new Date(2016, 8, 15);
    const action = {
      type: calendarConstants.CHANGE_SELECTED_DATE,
      payload: {
        selectedDate: selectedDateUpdated,
      },
    };
    const expectedState = {
      ...initialState,
      selectedDate: selectedDateUpdated,
    };
    expect(calendarReducer(initialState, action)).toEqual(expectedState);
  });
});
