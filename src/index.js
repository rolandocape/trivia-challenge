import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import quizReducer from './store/reducers/quiz';
import * as serviceWorker from './serviceWorker';
import { quizSaga } from './store/sagas/quiz';

const composeEnhancers =
    (process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null)
    || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(quizReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(quizSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
