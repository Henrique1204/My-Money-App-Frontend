import React from "react";
// Importando componentes da interface.
import ContainerSessao from "../ContainerSessao/ContainerSessao.js";
import TituloSessao from "../TituloSessao/TituloSessao.js";

const Dashboard = () => {
    return (
        <ContainerSessao>
            <TituloSessao titulo="Dashboard" subtitulo="Versão 1.0" />
        </ContainerSessao>
    );
};

export default Dashboard;
