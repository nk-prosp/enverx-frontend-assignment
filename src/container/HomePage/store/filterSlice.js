import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
    searchKey: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            return {
                ...state,
                category: action.payload,
            };
        },
        setSearchKey: (state, action) => {
            return {
                ...state,
                searchKey: action.payload,
            };
        },
    },
});

export const { setCategory, setSearchKey } = filterSlice.actions;
export default filterSlice.reducer;
