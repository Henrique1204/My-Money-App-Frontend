import { createSlice } from '@reduxjs/toolkit';

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      dados: null,
      erro: null,
      ...config.initialState
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.dados = action.payload;
        state.erro = null;
      },
      fetchFail(state, action) {
        state.loading = false;
        state.dados = null;
        state.erro = action.payload;
      },
      ...config.reducers
    }
  });

  const { fetchStarted, fetchSuccess, fetchFail } = slice.actions;

  const asyncActions = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      const dados = await response.json();

      if (response.ok === false) throw new Error(dados.message);

      return dispatch(fetchSuccess(dados));
    } catch ({ message }) {
      return dispatch(fetchFail(message));
    }
  };

  return { ...slice, asyncActions };
};

export default createAsyncSlice;