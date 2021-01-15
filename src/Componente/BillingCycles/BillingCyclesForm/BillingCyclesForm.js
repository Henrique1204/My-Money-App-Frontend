import React from "react";
// Importando estilo do componente.
import estilos from "./BillingCyclesForm.module.css";
// Importando configurações da API.
import { POST_LIST } from "../../../api";

const BillingCyclesForm = ({ method }) => {
    // Estados do formulário.
    const [name, setName] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState("");
    // Estados do fetch.
    const [fetchConfig, setFetchConfig] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (method === "POST") {
            setFetchConfig(POST_LIST({ name, month: Number(month), year: Number(year) }));
        }

        if (fetchConfig) {
            try {
                await fetch(fetchConfig.url, fetchConfig.options);
            } catch({message}) {
                console.log(message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className={estilos.form} >
            <div className={estilos.campo}>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
            </div>

            <div className={estilos.campo}>
                <label htmlFor="month">Mês:</label>
                <input
                    type="text"
                    name="month"
                    id="month"
                    value={month}
                    onChange={({ target }) => setMonth(target.value)}
                />
            </div>

            <div className={estilos.campo}>
                <label htmlFor="year">Ano:</label>
                <input
                    type="text"
                    name="year"
                    id="year"
                    value={year}
                    onChange={({ target }) => setYear(target.value)}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default BillingCyclesForm;
