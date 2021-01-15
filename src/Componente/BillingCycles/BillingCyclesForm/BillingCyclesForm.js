import React from "react";
// Importando estilo do componente.
import estilos from "./BillingCyclesForm.module.css";
// Importando componente da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";
// Importando configurações da API.
import { POST_LIST } from "../../../api";

const BillingCyclesForm = ({ method }) => {
    // Estados do formulário.
    const name = useForm();
    const month = useForm("numero");
    const year = useForm("numero");

    // Estados do fetch.
    const [fetchConfig, setFetchConfig] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (method === "POST") {
            setFetchConfig(POST_LIST({
                name: name.valor,
                month: Number(month.valor),
                year: Number(year.valor)
            }));
        }

        if (fetchConfig && name.validar() && month.validar() && year.validar()) {
            try {
                await fetch(fetchConfig.url, fetchConfig.options);
            } catch({message}) {
                console.log(message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className={estilos.form} >
            <InputForm label="Nome:" name="name" type="text" {...name} />
            <InputForm label="Mês:" name="month" type="text" {...month} />
            <InputForm label="Ano:" name="year" type="text" {...month} />

            <button type="submit">Submit</button>
        </form>
    );
};

export default BillingCyclesForm;
