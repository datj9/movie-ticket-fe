import { takeEvery, call, put, all, fork } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import { getTheatersSuccess } from "./actions";
import BaseApi from "../../api";

const api = BaseApi();

function* getTheaters() {
    const theaters = yield call(api.get, "/theaters");
    yield put(getTheatersSuccess(theaters));
}

function* onGetTheaters() {
    yield takeEvery(actionTypes.GET_THEATERS_START, getTheaters);
}

export function* theaterSagas() {
    yield all([fork(onGetTheaters)]);
}
