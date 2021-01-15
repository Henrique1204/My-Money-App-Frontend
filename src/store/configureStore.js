// Importando utilitários da toolkit do Redux.
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
// Importando reducers.
import summary from "./summary.js";
import tabs from "./tabs.js";
import billingCyclesList from "./billingCyclesList.js";
import ui from "./ui.js";

// Definindo os middlewares mantendo o que vem por padrão.
const middleware = [...getDefaultMiddleware()];
// Combinando reducers para criar o reducer da aplicação.
const reducer = combineReducers({ summary, tabs, billingCyclesList, ui });

// Criando a store passando o reducer e os middlewares.
const store = configureStore({ reducer, middleware });

export default store;
