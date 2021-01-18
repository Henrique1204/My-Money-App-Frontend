import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "form",
    initialState: {
        dados: null,
        linhas: {
            numero: 1,
            duplicata: null,
            removidas: []
        },
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
        alterarNumeroLinhas(state, action) {
            state.linhas.numero = action.payload || state.linhas.numero + 1;
        },
        alterarLinhaDuplicada(state, action) {
            state.linhas.duplicata = action.payload;
        },
        addLinhasRemovidas(state, action) {
            state.linhas.removidas = [...state.linhas.removidas, action.payload];
        },
        alterarLinhasRemovidas(state, action) {
            state.linhas.removidas = action.payload;
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
        },
        alterarCredito(state, action) {
            state.creditos = action.payload;
        }
    }
});

export const {
    preencherDados,
    limparDados,
    alterarNumeroLinhas,
    alterarLinhaDuplicada,
    addLinhasRemovidas,
    alterarLinhasRemovidas,
    addCredito,
    alterarCredito
} = slice.actions; 

export default slice.reducer;
