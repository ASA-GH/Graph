import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from '../../../reducers/Reducer';
import createSagaMiddleware from 'redux-saga'
import { DataWatcher } from './Saga'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(DataWatcher);