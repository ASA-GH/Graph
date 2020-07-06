import { takeLatest, put, call } from 'redux-saga/effects'

export function* LoadData(action){
  const data = yield call(() => {
  return fetch('http://localhost:4000/datasets?label=' + action.title)
    .then(
      (response) => { return response.json(); }
  )
  //   .then(
  //     (response) => {
  //       console.log(response);
  //       return response ;
  // }
  // )
  });
  yield put({type: "ADD_CHIP", title: action.title, data: data });
}

export function* DataWatcher(){
  yield takeLatest("LOAD_CHIP", LoadData);
 
}