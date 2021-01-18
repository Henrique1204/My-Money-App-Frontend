import React from "react";
// Importando estilo do componente.
import estilos from "./Summary.module.css";
// Importando componentes da interface.
import Card from "../../../Dashboard/Card/Card.js";
import { useSelector } from "react-redux";

const somarValores = (lista, removidos) => (
    lista.values.reduce((ant, atual) => {
        const id = atual.name.substring(atual.name.lastIndexOf("_")+1);
        if (removidos.includes(Number(id))) return ant;
        return [...ant, atual.value];
    }, []).reduce((ant, atual) => {
        if (!isNaN(Number(atual))) {
            return (ant + Number(atual));
        }

        return ant;
    }, 0)
);

const Summary = ({ className }) => {
    // Estados globais.
    const { creditos, debitos, linhas } = useSelector((state) => state.form);
    // Estados local.
    const [creditosSoma, setCreditosSoma] = React.useState(0);
    const [debitosSoma, setDebitosSoma] = React.useState(0);

    React.useEffect(() => {
        setCreditosSoma(somarValores(creditos, linhas.creditos.removidas));
        setDebitosSoma(somarValores(debitos, linhas.debitos.removidas));
    }, [creditos, debitos, linhas]);

    return (
        <fieldset className={`${className} ${estilos.Summary}`}>
            <legend>Resumo</legend>

            <Card
                cor="verde"
                valor={`R$ ${creditosSoma.toLocaleString()}`}
                texto="Total de créditos" icon="bank"
            />

            <Card
                cor="vermelho"
                valor={`R$ ${debitosSoma.toLocaleString()}`}
                texto="Total de débitos"
                icon="credit-card"
            />

            <Card
                cor="azul"
                valor={`R$ ${(creditosSoma - debitosSoma).toLocaleString()}`}
                texto="Valor consolidado"
                icon="money"
            />
        </fieldset>
    )
}

export default Summary
