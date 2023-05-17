import {all, fork} from 'redux-saga/effects';

import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {SET_DATA} from '../../utils/actionTypes';
// import { REDUCER_TYPES, SAGA_TYPES } from '../../ReducerOne/types';

function* increaseCounter(action: any) {
  console.log('payloadjhjhjhjhjhjhjhjhj', action);
  try {
    yield delay(4000);
    yield put({
      type: SET_DATA,
      payload: action.payload,
    });
  } catch (err) {
    console.log('ERR : ', err);
  }
}

function* watchIncreaseCounter() {
  yield takeLatest('SagaInc', increaseCounter);
}

export default function* Saga() {
  yield all([
    fork(watchIncreaseCounter),
    // fork(sagaTwo.watchIncreaseCounter),
  ]);
}
