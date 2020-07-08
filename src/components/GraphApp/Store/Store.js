import { createStore, applyMiddleware } from 'redux';
import { reducer } from './Reducer';
import createSagaMiddleware from 'redux-saga'
import { DataWatcher } from './Saga'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(DataWatcher);