import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("token") || null,
        validToken: false
    },
    reducers: {
        tokenValidated(state, action) {
            if (action.payload) {
                state.validToken = true;
            } else {
                state.validToken = false;
                state.user = null;
            }
        },
        userFetched(state, action) {
            localStorage.setItem("token", action.payload);
            state.user = action.payload;
            state.validToken = true;
        }
    }
});

export default slice.reducer;
