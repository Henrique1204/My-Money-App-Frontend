import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "form",
    initialState: {
        dados: null,
        linhas: {
            creditos: {
                numero: 1,
                duplicata: null,
                removidas: []
            },
            debitos: {
                numero: 1,
                duplicata: null,
                removidas: []
            }
        },
        creditos: {
            names: [],
            values: []
        },
        debitos: {
            names: [],
            values: [],
            status: []
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
            const { lista, valor } = action.payload;
            state.linhas[lista].numero = valor || state.linhas[lista].numero + 1;
        },
        alterarLinhaDuplicada(state, action) {
            const { lista, duplicata } = action.payload;
            state.linhas[lista].duplicata = duplicata;
        },
        addLinhasRemovidas(state, action) {
            const { lista, valor } = action.payload;
            state.linhas[lista].removidas = [...state.linhas[lista].removidas, valor];
        },
        alterarLinhasRemovidas(state, action) {
            const { lista, valor } = action.payload;
            state.linhas[lista].removidas = valor;
        },
        addValores(state, action) {
            const { type ,lista, name, valor } = action.payload;
            const stateValor = state[type][lista]

            const indice = stateValor
            .indexOf(stateValor.find((item) => item.name === name));

            if (indice === -1) {
                state[type][lista] = [...stateValor, {
                    name: name,
                    value: valor
                }];
            } else {
                state[type][lista][indice].value = valor;
            }
        },
        alterarValores(state, action) {
            state[action.payload.type] = action.payload.valor;
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
    addValores,
    alterarValores
} = slice.actions;

export const resetarForm = () => (dispatch) => {
    const valores = ["creditos", "debitos"];

    valores.forEach((valor) => {
        dispatch(alterarNumeroLinhas({
            lista: valor,
            valor: 1
        }));
    
        const valorValores = (valor === "debitos")
        ? { names: [], values: [], status: [] } 
        : { names: [], values: [] };

        dispatch(alterarValores({
            type: valor,
            valor: valorValores
        }));
    
        dispatch(alterarLinhasRemovidas({
            lista: valor,
            valor: []
        }));
    });

    dispatch(limparDados());
};

export const duplicarLinha = (payload) => (dispatch) => {
    const { type, indice } = payload;

    const duplicata = (type === "debitos")
    ? {
        name: `name_${type}_${indice}`,
        value: `value_${type}_${indice}`,
        status: `status_${type}_${indice}`
    } : {
        name: `name_${type}_${indice}`,
        value: `value_${type}_${indice}`
    };

    dispatch(alterarLinhaDuplicada({
        lista: type,
        duplicata
    }));
    dispatch(alterarNumeroLinhas({ lista: type }));
};

export default slice.reducer;
