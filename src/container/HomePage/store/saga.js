import { call, takeEvery, put } from "redux-saga/effects";
import { set, error, add } from "./../store/transactionsSlice";
import transactionService from "../../../services/transactionService";

export const SAGA_ACTIONS = {
    FETCH_TRANSACTION_ASYNC: "FETCH_TRANSACTION_ASYNC",
    ADD_TRANSACTION_ASYNC: "ADD_TRANSACTION_ASYNC",
};

export function* fetchTransactions() {
    try {
        let result = yield call(() => transactionService.getTransactions());
        yield put(set(result.data));
    } catch (e) {
        yield put(error("transaction fetch failed.."));
    }
}

export function* addTransaction(action) {
    console.log("saga add transaction", action);
    try {
        let result = yield call(() =>
            transactionService.addTransaction(action.transaction)
        );
        yield put(add(result.data));
    } catch (e) {
        console.log('xxx error', e );
        yield put(error("transaction add failed.."));
    }
}

export default function* transactionSaga() {
    yield takeEvery(SAGA_ACTIONS.FETCH_TRANSACTION_ASYNC, fetchTransactions);
    yield takeEvery(SAGA_ACTIONS.ADD_TRANSACTION_ASYNC, addTransaction);
}
