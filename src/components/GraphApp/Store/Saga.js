import { takeLatest, put, call } from 'redux-saga/effects';
import {ERROR_RESP, IS_CONTAINS, ADD_CHIP, LOAD_DATA, DRAW, GET_LABELS, LOAD_LABELS, ERROR} from '../Constants';
import axios from 'axios';

export function* LoadLabels(action) {
  try{
    const response = yield call(() => { 
      return axios.request({
      method: 'POST',
      url: "http://localhost:8080/labels",
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      },
      body: '{}'
  });
});
    yield put({ type:  GET_LABELS , labels: response.data.labels, curentLabel: action.curentLabel});
}catch(e) {
    yield put({type: ERROR, e: e});
}
};

const GetBody = (action) =>{
  return {
    "labels" :action.labels.length ? action.labels : []
  };
}


export function* LoadData(action) {
  try{
    const response = yield call(() => { 
      return axios.post(
      "http://localhost:8080/dataset",
      
      GetBody(action)
  );
});
    yield put({ type: DRAW, data: response.data });
}catch(e) {
    yield put({type: ERROR, e: e});
}
}

// export function* LoadData(action) {
//   const data = yield call(() => {
//    let query = 'http://localhost:8080/dataset';
//     if (!action.labels.length){
//      query += '?label=""';
//   }
//    for (const [index, value] of action.labels.entries()) {
//       query += (index) ? '&' : '?';
//       query += 'label=' + value.title;
//    }
//     return fetch(query)
//       .then(
//         (response) => { return response.json(); }
//       )
//   });
//   yield put({ type: DRAW, data: data});
// };

export function* DataWatcher() {
 yield takeLatest(LOAD_DATA, LoadData);
 yield takeLatest(LOAD_LABELS, LoadLabels);
};
