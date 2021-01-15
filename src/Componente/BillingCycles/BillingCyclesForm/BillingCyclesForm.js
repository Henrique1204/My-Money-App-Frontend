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

const BillingCyclesForm = ({ method }) => {
    // Estados do formulário.
    const name = useForm();
    const month = useForm("numero");
    const year = useForm("numero");

    // Estados do fetch.
    const { erro, loading, request } = useFetch();

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

        if (config && name.validar() && month.validar() && year.validar()) {
            await request(config.url, config.options);
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
