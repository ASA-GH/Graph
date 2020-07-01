import { createStore, applyMiddleware } from 'redux'
import {reducer} from './reducer'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)