import { takeLatest, put, call } from 'redux-saga/effects'
import {ERROR_RESP, IS_CONTAINS, ADD_CHIP, LOAD_DATA, LOAD_SCALE, DRAW} from '../Constants'

export function* IsContains(action) {
  const data = yield call(() => {
    return fetch('http://localhost:8080/contains?label=' + action.title)
      .then(
        (response) => { return response.json(); }
      )
  });
  yield put({ type: data.contains == "yes" ? ADD_CHIP : ERROR_RESP, title: action.title});
}
export function* LoadData(action) {
  const data = yield call(() => {
    return fetch('http://localhost:8080/dataset?label=' + action.title)
      .then(
        (response) => { return response.json(); }
      )
  });
  yield put({ type: DRAW, data: data});
}
// export function* LoadScale(action) {
//   const data = yield call(() => {
//     return fetch('http://localhost:8080/dataset?label=' + action.title)
//       .then(
//         (response) => { return response.json(); }
//       )
//   });
//   yield put({ type:  LOAD_SCALE,   scale: scale});
// }

export function* DataWatcher() {
  yield takeLatest(IS_CONTAINS, IsContains);

}
export function* DataWatcher() {
  yield takeLatest( LOAD_DATA, LoadData);

}