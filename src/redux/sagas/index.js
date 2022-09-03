import {all, fork} from 'redux-saga/effects';
import { watchGetApiData } from './temporarySaga';

export default function* rootSaga() {
  yield all([
   fork(watchGetApiData)
  ]);
}
