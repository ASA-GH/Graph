import { takeLatest, put, call } from 'redux-saga/effects'
import {ERROR_RESP, IS_CONTAINS, ADD_CHIP, LOAD_DATA, DRAW, GET_LABELS, LOAD_LABELS} from '../Constants'

export function* IsContains(action) {
  console.log('IsContains')

  const data = yield call(() => {
    

    return fetch('http://localhost:8080/contains?label=' + action.title)
      .then(
        (response) => { return response.json(); }
      )
  });
  yield put({ type: data.contains == "yes" ? ADD_CHIP : ERROR_RESP, title: action.title});
}
export function* LoadLabels(action) {
  //  console.log('LoadLabels'+ action)
  const data = yield call(() => {
      return fetch('http://localhost:8080/labels' )
      .then(
        (response) => { return response.json(); }
      )
  });
  // console.log('LoadLabels data.labels: ',data.labels)

  yield put({ type:  GET_LABELS , labels: data.labels, curentLabel: action.curentLabel});
}
export function* LoadData(action) {
  console.log('LoadData')

  const data = yield call(() => {
    let query = 'http://localhost:8080/dataset';

   if (!action.labels.length){
     query += '?label=""';
   }

   for (const [index, value] of action.labels.entries()) {
      query += (index) ? '&' : '?';
      query += 'label=' + value.title;
   }

    return fetch(query)
      .then(
        (response) => { return response.json(); }
      )
  });
  yield put({ type: DRAW, data: data})
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
  yield takeLatest(LOAD_DATA, LoadData);
  yield takeLatest(LOAD_LABELS, LoadLabels);

}
// }