import { takeLatest, put, call } from 'redux-saga/effects'
import {ERROR_RESP, IS_CONTAINS, ADD_CHIP} from '../Constants'

export function* IsContains(action) {
  const data = yield call(() => {
    return fetch('http://localhost:8080/contains?label=' + action.title)
      .then(
        (response) => { return response.json(); }
      )
  });
  yield put({ type: data.contains == "yes" ? ADD_CHIP : ERROR_RESP, title: action.title});
}

export function* DataWatcher() {
  yield takeLatest(IS_CONTAINS, IsContains);

}