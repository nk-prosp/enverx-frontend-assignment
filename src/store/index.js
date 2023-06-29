import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./rootSagas";
import transactionsReducer from "../container/HomePage/store/transactionsSlice";
import filterReducer from "../container/HomePage/store/filterSlice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: { transactions: transactionsReducer, filter: filterReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(sagas);
