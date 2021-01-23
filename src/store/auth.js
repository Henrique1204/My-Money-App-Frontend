// Importando utilitários do redux.
import { createSlice } from "@reduxjs/toolkit";
// Importando actions da store.
import { mostrarFeedback } from "./ui.js";
// Importando configurações da API.
import { VALIDAR_TOKEN } from "../api.js";

const storageKey = "token";

const slice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        validToken: false,
        token: localStorage.getItem(storageKey) || null,
        loading: null
    },
    reducers: {
        tokenValidated(state, action) {
            if (action.payload) {
                state.validToken = true;
            } else {
                localStorage.removeItem(storageKey)
                state.validToken = false;
                state.user = null;
            }
        },
        userFetched(state, action) {
            localStorage.setItem(storageKey, action.payload.token);
            state.user = action.payload;
            state.validToken = true;
        },
        atualizarLoading(state, action) {
            state.loading = action.payload;
        }
    }
});

export const { tokenValidated, userFetched, atualizarLoading } = slice.actions;

export const submit = ({ url, options }) => async (dispatch) => {
    try {
        dispatch(atualizarLoading(true));
        const res = await fetch(url, options);
        const json = await res.json();

        if (res.ok === false) {
            const feedbacks = json.errors.map((error) => ({
                msg: error,
                status: "erro"
            }));

            dispatch(mostrarFeedback(feedbacks));
        } else {
            dispatch(userFetched(json));
        }

    } catch ({ message }) {
        dispatch(mostrarFeedback([{
            msg: message,
            status: "erro"
        }]))
    } finally {
        dispatch(atualizarLoading(false));
    }
}

export const logout = () => (dispatch) => {
    dispatch(tokenValidated(false));
}

export const validarToken = (payload) => async (dispatch) => {
    try {
        if (payload) {
            const { url, options } = VALIDAR_TOKEN(payload);
            const res = await fetch(url, options);
            const json = await res.json();

            if (res.ok === false) throw new Error("Erro no fetch!");

            dispatch(tokenValidated(json.valid));
        } else {
            dispatch(tokenValidated(false));
        }
    } catch (e) {
        dispatch(tokenValidated(false));
    }
}

export default slice.reducer;
