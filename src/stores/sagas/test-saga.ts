import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { test } from "../../services/test-service";
import {
  testFailureAction,
  testRequestAction,
  testSuccessAction,
} from "../actions/test-action";
import { ETestActions } from "../actions/test-action/constants";
import { TTestAction } from "../actions/test-action/types";

function* callApiTestSaga({ payload, cb1 }: TTestAction) {
  try {
    yield put(testRequestAction());
    const response: any = yield call(test);
    const { token, refreshToken } = response;
    yield put(testSuccessAction(response));
    cb1?.({ token, refreshToken });
  } catch (error: any) {
    yield put(testFailureAction(error));
  }
}

function* watchOnAuth() {
  yield takeLatest(ETestActions.TEST, callApiTestSaga);
}

export default function* testSaga() {
  yield all([fork(watchOnAuth)]);
}
