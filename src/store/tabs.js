import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "tabs",
    initialState: {
        tab: "tabLista",
    },
    reducers: {
        trocarTab(state, action) {
            state.tab = action.payload;
        }
    }
});

export const { trocarTab } = slice.actions;

export default slice.reducer;
