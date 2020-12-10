import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../../../actions/actions';

import axios from 'axios';
import config from '../../../config.json';

export function* LoadLabels(action) {
  try {
    const response = yield call(() => {
      return axios.post(
        config.server_url + "/labels"
      );
    });
    yield put(actions.fetchLabelsSuccess(response.data.labels));
  } catch(e) {
    yield put(actions.fetchLabelsFailure(e));
  }
};

const GetBody = (chips) =>{
  return {
    "labels": chips.length ? chips : []
  };
}

export function* LoadData(action) {
  try{
    const response = yield call(() => {
      return axios.post(config.server_url + "/dataset", GetBody(action.payload));
    });
    yield put(actions.fetchDataSuccess(response.data));
  } catch(e) {
      yield put(actions.fetchDataFailure(e));
  }
}

export function* DataWatcher() {
 yield takeLatest(actions.fetchData.toString(), LoadData);
 yield takeLatest(actions.fetchLabels.toString(), LoadLabels);
};