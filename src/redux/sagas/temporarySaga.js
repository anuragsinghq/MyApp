import React from 'react';
import { put, takeEvery, call } from 'redux-saga/effects';
import {ACTION_CONSTANT,setApiData, setLoadingData} from '../actions';

const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
   return data;
  };

function* handleGetApiData() {
  try {
    setLoadingData(true);
    const response = yield call(fetchData);
    console.log('response======',response, );
    if (response) {
        setLoadingData(false);
      yield put(setApiData(response));
    }
  } catch (error) {
    setLoadingData(false);
    console.log('error',JSON.stringify(error));
  }
}



export function* watchGetApiData() {
  yield takeEvery(ACTION_CONSTANT.GET_API_DATA, handleGetApiData);
}
