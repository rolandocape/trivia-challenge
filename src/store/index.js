import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import quizReducer from './reducers/quiz';
import quizSaga from './sagas/quiz';

const generateStore = () => {
    const composeEnhancers =
        (process.env.NODE_ENV === 'development'
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : null)
        || compose;

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(quizReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(quizSaga);

    return store;
}

export default generateStore;