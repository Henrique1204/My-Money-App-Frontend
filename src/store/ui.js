import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "ui",
    initialState: {
        feedbacks: null,
        timer: null
    },
    reducers: {
        adicionarFeedbacks(state, action) {
            state.feedbacks = action.payload;
        },
        removerFeedbacks(state) {
            state.feedbacks = null;
        },
        atualizarTimer(state, action) {
            state.timer = action.payload;
        }
    }
});

export const { adicionarFeedbacks, removerFeedbacks, atualizarTimer } = slice.actions;
export default slice.reducer;
