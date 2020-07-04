import { takeLatest, put, call } from 'redux-saga/effects'

//dispatch({ type: "LOAD_CHIP", chip: Chip });
const Load = async (title) => {
   return {
    label: '3',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#36A2EB',
    borderColor: '#36A2EB',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#36A2EB',
    pointBackgroundColor: '#36A2EB',
    pointBorderWidth: 10,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#36A2EB',
    pointHoverBorderColor: '#36A2EB',
    pointHoverBorderWidth: 2,
    pointRadius: 10,
    pointHitRadius: 10,
    data: [80, 40, 60, 70, 40, 40, 80, 50, 50]
  };
}


export function* LoadData(action){
  const data = yield call(Load, action.title);
  yield put({type: "ADD_CHIP", title: action.title, data: data });
}

export function* DataWatcher(){
  yield takeLatest("LOAD_CHIP", LoadData);
 
}