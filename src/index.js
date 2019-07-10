import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import * as serviceWorker from './serviceWorker';

import Wrappers from './wrappers';
import configureStore from './store';

import persistedStateManager from './utils/storage/persistedStateManager';

const { Root } = Wrappers;

const persistedState = persistedStateManager.loadState();
const store = configureStore(persistedState);
store.subscribe(throttle(() => {
  // Everytime the global state getsu pdated,
  // it'll be updated within the localStorage as well.
  persistedStateManager.saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
