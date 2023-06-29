import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    error: "",
};

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        set: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
        add: (state, action) => {
            console.log("transaction slice - add", action);
            return {
                ...state,
                value: [...state.value, action.payload],
            };
        },
        error: (state, action) => {
            return {
                ...state,
                error: action.payload,
            };
        },
    },
});

export const { set, add, error } = transactionsSlice.actions;
export default transactionsSlice.reducer;
