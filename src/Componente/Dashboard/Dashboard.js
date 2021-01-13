import React from "react";
// Importando estilo do componente.
import estilos from "./Dashboard.module.css";
// Importando componentes da interface.
import ContainerSessao from "../ContainerSessao/ContainerSessao.js";
import TituloSessao from "../TituloSessao/TituloSessao.js";
import Card from "../Card/Card.js";

const Dashboard = () => {
    return (
        <ContainerSessao>
            <TituloSessao titulo="Dashboard" subtitulo="Versão 1.0" />

            <div className={estilos.cards}>
                <Card cor="verde" valor="R$ 10" texto="Total de créditos" icon="bank" />
                <Card cor="vermelho" valor="R$ 10" texto="Total de débitos" icon="credit-card" />
                <Card cor="azul" valor="R$ 0" texto="Valor consolidado" icon="money" />
            </div>
        </ContainerSessao>
    );
};

export default Dashboard;
