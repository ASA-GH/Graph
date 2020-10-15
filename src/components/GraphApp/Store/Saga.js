import { takeLatest, put, call } from 'redux-saga/effects';
import {LOAD_DATA, DRAW, GET_LABELS, LOAD_LABELS, ERROR} from '../Constants';
import axios from 'axios';
import config from '../../../config.json';

export function* LoadLabels(action) {
  try{
    const response = yield call(() => { 
      return axios.post(
     config.server_url + "/labels"
  );
});
  yield put({ type:  GET_LABELS, labels: response.data.labels, curentLabel: action.curentLabel});
}catch(e) {
    yield put({type: ERROR, e: e});
}};
const GetBody = (action) =>{
  return {
    "labels" :action.labels.length ? action.labels : []
  };
}
export function* LoadData(action) {
  try{
    const response = yield call(() => { 
      return axios.post(
        config.server_url + "/dataset",
      GetBody(action)
  );
});
    yield put({ type: DRAW, data: response.data });
}catch(e) {
    yield put({type: ERROR, e: e});
}}
export function* DataWatcher() {
 yield takeLatest(LOAD_DATA, LoadData);
 yield takeLatest(LOAD_LABELS, LoadLabels);
};
