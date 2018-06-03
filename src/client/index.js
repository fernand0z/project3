import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { persistState, getInitialState } from './utils/stateLocalStorage.js';
import backendSync from './middleware/backendSync';

const store = createStore(
  reducers,
  getInitialState(),
  composeWithDevTools(applyMiddleware(thunk, backendSync))
);

persistState(store);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);