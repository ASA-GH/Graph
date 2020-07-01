import {takeLatest, call, put} from 'redux-saga/effects'

export function* loadDataWatcher(){
  yield takeLatest('LOAD_DATA', loadDataFlow)
}

function* loadDataFlow(action) {
  console.log("++++")
  const data = yield call(getData, action.chip)
  console.log(' ----', data)
  yield put(dispatch({ type: "ADD_CHIP", chip: action.chip, data: data }))
}

export const getData = async () => {

 return {
    id:Math.random(),
    label: '1',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#f27173',
    borderColor: '#f27173',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#f27173',
    pointBackgroundColor: '#f27173',
    pointBorderWidth: 10,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#f27173',
    pointHoverBorderColor: '#f27173',
    pointHoverBorderWidth: 2,
    pointRadius: 10,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40, 80, 70],
  };

  
 // return fetch("http://localhost:4000/notes").then(res => res.json())
}