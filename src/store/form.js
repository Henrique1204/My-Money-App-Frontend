import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "form",
    initialState: {
        dados: null,
        linhas: 1,
        creditos: {
            names: [],
            values: []
        }
    },
    reducers: {
        preencherDados(state, action) {
            state.dados = action.payload;
        },
        limparDados(state) {
            state.dados = null;
        },
        alterarLinhas(state, action) {
            state.linhas = action.payload || state.linhas + 1;
        },
        addCredito(state, action) {
            const { type, name, valor } = action.payload;
            const stateDebito = state.creditos[type]

            const indice = stateDebito
            .indexOf(stateDebito.find((item) => item.name === name));

            if (indice === -1) {
                state.creditos[type] = [...stateDebito, {
                    name: name,
                    value: valor
                }];
            } else {
                state.creditos[type][indice].value = valor;
            }
        }
    }
});

export const { preencherDados, limparDados, addCredito, alterarLinhas } = slice.actions; 

export default slice.reducer;
