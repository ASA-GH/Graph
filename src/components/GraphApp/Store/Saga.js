import { takeLatest, put, call } from 'redux-saga/effects'
import {ERROR_RESP, LOAD_CHIP, ADD_CHIP} from '../Constants'

export function* LoadData(action) {
  const data = yield call(() => {
    return fetch('http://localhost:4000/datasets?label=' + action.title)
      .then(
        (response) => { return response.json(); }
      )
  });
  yield put({ type: data.length ? ADD_CHIP : ERROR_RESP, title: action.title, data: data });
}

export function* DataWatcher() {
  yield takeLatest(LOAD_CHIP, LoadData);

}