import { all } from "redux-saga/effects";
import transactionSaga from "../container/HomePage/store/saga";

export default function* sagas() {
    yield all([transactionSaga()]);
}
