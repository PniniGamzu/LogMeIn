import { call, takeEvery, put } from "redux-saga/effects";
import { createAction } from "redux-actions";
import { fork } from 'redux-saga/effects';
import { API_REQUEST } from "../constants/action-types";

function* fetchData(action) {
  const { nextAction, method, url, data } = action.payload;
  const headers =  {
    "content-type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*"
  };

  try {
      yield put(
        createAction(
          nextAction.pending,
          () => action.payload,
          () => action.meta
        )()
      );

      const request = yield call(fetch, url, {
        method,
        header: headers,
        body: data && JSON.stringify(data)
      });

      const fetchResult = yield request.json();
  
      if (fetchResult && !!fetchResult.errorMessage) {
        throw fetchResult.errorMessage;
      }

      yield put(
        createAction(
          nextAction.success,
          () => fetchResult,
          () => action.meta
        )(fetchResult)
      );
    } 
    catch (e) {
      yield put(
        createAction(
          nextAction.error,
          () => e,
          () => action.meta
        )(e)
      );
    }
}

function* apiSaga() {
    yield takeEvery(API_REQUEST, fetchData);
}
  
export default function* rootSaga() {
    yield fork(apiSaga);
}