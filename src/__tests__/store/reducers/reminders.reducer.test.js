import remindersConstants from '../../../store/constants/reminders.constants';
import remindersReducer from '../../../store/reducers/reminders.reducer';

describe('reminders reducer', () => {
  let reminder;

  beforeEach(() => {
    reminder = {
      id: 'dummy-id',
      text: 'dummy-text',
      time: '15:06',
      selectedDate: new Date(2019, 6, 6),
    };
  });

  it('returns initial state', () => {
    const initialState = {
      reminders: [],
    };
    expect(remindersReducer(undefined, {})).toEqual(initialState);
  });

  it('creates new reminders correctly', () => {
    const initialState = {
      reminders: [],
    };
    const action = {
      type: remindersConstants.CREATE_REMINDER,
      payload: {
        reminder,
      },
    };
    const expectedState = {
      ...initialState,
      reminders: [reminder],
    };
    expect(remindersReducer(initialState, action)).toEqual(expectedState);
  });

  it('updates an existing reminder correctly', () => {
    const initialState = {
      reminders: [reminder],
    };
    const updatedReminder = {
      ...reminder,
      text: 'updated dummy text',
      time: '13:04',
    };
    const action = {
      type: remindersConstants.UPDATE_REMINDER,
      payload: {
        reminder: updatedReminder,
      },
    };
    const expectedState = {
      ...initialState,
      reminders: [updatedReminder],
    };
    expect(remindersReducer(initialState, action)).toEqual(expectedState);
  });

  it('deletes existing reminder correctly', () => {
    const initialState = {
      reminders: [reminder],
    };
    const action = {
      type: remindersConstants.DELETE_REMINDER,
      payload: {
        reminder,
      },
    };
    const expectedState = {
      ...initialState,
      reminders: [],
    };
    expect(remindersReducer(initialState, action)).toEqual(expectedState);
  });
});
