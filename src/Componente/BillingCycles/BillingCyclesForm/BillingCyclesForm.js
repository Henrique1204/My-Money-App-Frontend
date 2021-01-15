import React from "react";
// Importando estilo do componente.
import estilos from "./BillingCyclesForm.module.css";
// Importando componente da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";
import useFetch from "../../../Hooks/useFetch.js";
// Importando configurações da API.
import { POST_LIST } from "../../../api";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions da store.
import { adicionarFeedbacks, atualizarTimer } from "../../../store/ui.js";
import { trocarTab } from "../../../store/tabs.js";

const BillingCyclesForm = ({ method }) => {
    // Estados globais.
    const { timer } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    // Estados do formulário.
    const name = useForm();
    const month = useForm("numero", { min: 1, max: 12 });
    const year = useForm("numero", { min: 1970, max: 2070 });

    // Estados do fetch.
    const { loading, request } = useFetch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let config;

        if (method === "POST") {
            config = POST_LIST({
                name: name.valor,
                month: Number(month.valor),
                year: Number(year.valor)
            });
        }

        if (config && name.validar() && month.validar() && year.validar() && timer) {
            const { response, json } = await request(config.url, config.options);
            let feedkback;

            if (json?.errors) {
                feedkback = json.errors.map((item) => ({ msg: item, status: "erro" }));
            } else if (response?.ok) {
                feedkback = [{
                    msg: "Dados enviados com sucesso!",
                    status: "sucesso"
                }];
                dispatch(trocarTab("tabLista"));
            } else {
                feedkback = [{
                    msg: "Falha ao enviar os dados!",
                    status: "erro"
                }];
            }

            dispatch(adicionarFeedbacks(feedkback));
            dispatch(atualizarTimer(false));
        }
    };

    return (
        <form onSubmit={handleSubmit} className={estilos.form} >
            <InputForm label="Nome:" name="name" type="text" {...name} />
            <InputForm label="Mês:" name="month" type="text" {...month} />
            <InputForm label="Ano:" name="year" type="text" {...year} />

            <button type="submit" disabled={loading}>Submit</button>
        </form>
    );
};

export default BillingCyclesForm;
