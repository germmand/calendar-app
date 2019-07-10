const LOCAL_STORAGE_STATE_KEY = 'calendar-app-localStorage-key';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_STATE_KEY, serializedState);
  } catch (error) {
    // Ignore errors.
  }
};

export default {
  loadState,
  saveState,
};
