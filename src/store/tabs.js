import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "tabs",
    initialState: {
        tab: null,
        tabsVisiveis: {}
    },
    reducers: {
        trocarTab(state, action) {
            state.tab = action.payload;
        },
        mostrarTabs(state, action) {
            state.tabsVisiveis = action.payload;
        }
    }
});

export const { trocarTab, mostrarTabs } = slice.actions;

export const  filtrarTabs = (...ids) => (dispatch) => {
    const filtro = ids.reduce((ant, atual) => ({ ...ant, [atual]: true }), {});
    dispatch(mostrarTabs(filtro));
};

export const mostrarTabPersonalizada = (payload) => (dispatch) => {
    dispatch(trocarTab(payload));
    dispatch(filtrarTabs(payload));
};

export const mostrarTabInicial = () => (dispatch) => {
    dispatch(trocarTab("tabLista"));
    dispatch(filtrarTabs("tabLista", "tabIncluir"));
} 

export default slice.reducer;
