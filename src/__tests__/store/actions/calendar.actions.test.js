import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import calendarConstants from '../../../store/constants/calendar.constants';
import calendarActions from '../../../store/actions/calendar.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('onChangeCurrentMonth action', () => {
  let store;
  const { onChangeCurrentMonth } = calendarActions;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches correct action with month changed', () => {
    const currentMonth = new Date(2019, 8, 15);
    store.dispatch(onChangeCurrentMonth(currentMonth));
    const expectedPayload = {
      type: calendarConstants.CHANGE_MONTH,
      payload: {
        currentMonth,
      },
    };
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedPayload);
  });
});

describe('onChangeSelectedDate action', () => {
  let store;
  const { onChangeSelectedDate } = calendarActions;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches correct action with date changed', () => {
    const selectedDate = new Date(2019, 8, 15);
    store.dispatch(onChangeSelectedDate(selectedDate));
    const expectedPayload = {
      type: calendarConstants.CHANGE_SELECTED_DATE,
      payload: {
        selectedDate,
      },
    };
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedPayload);
  });
});
