import { all, fork } from "redux-saga/effects";
import { theaterSagas } from "./theater/sagas";

export default function* () {
    yield all([fork(theaterSagas)]);
}
