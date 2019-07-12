import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import remindersConstants from '../../../store/constants/reminders.constants';
import remindersActions from '../../../store/actions/reminders.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('onCreateReminder action', () => {
  let store;
  const { onCreateReminder } = remindersActions;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches correct action with given reminder', () => {
    const reminder = {
      id: 'dummy-id',
      text: 'dummy-test',
      time: '15:04',
      selectedDate: new Date(2019, 8, 15),
    };
    store.dispatch(onCreateReminder(reminder));
    const expectedPayload = {
      type: remindersConstants.CREATE_REMINDER,
      payload: {
        reminder,
      },
    };
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedPayload);
  });
});

describe('onUpdateReminder action', () => {
  let store;
  const { onUpdateReminder } = remindersActions;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches correct action with given reminder', () => {
    const reminder = {
      id: 'dummy-id',
      text: 'dummy-test',
      time: '15:04',
      selectedDate: new Date(2019, 8, 15),
    };
    store.dispatch(onUpdateReminder(reminder));
    const expectedPayload = {
      type: remindersConstants.UPDATE_REMINDER,
      payload: {
        reminder,
      },
    };
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedPayload);
  });
});

describe('onDeleteReminder action', () => {
  let store;
  const { onDeleteReminder } = remindersActions;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches correct action with given reminder', () => {
    const reminder = {
      id: 'dummy-id',
      text: 'dummy-test',
      time: '15:04',
      selectedDate: new Date(2019, 8, 15),
    };
    store.dispatch(onDeleteReminder(reminder));
    const expectedPayload = {
      type: remindersConstants.DELETE_REMINDER,
      payload: {
        reminder,
      },
    };
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedPayload);
  });
});
