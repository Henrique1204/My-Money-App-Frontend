import React from "react";
// Importando estilo do componente.
import estilos from "./ContainerSessao.module.css";

const ContainerSessao = ({ children }) => {
    return (
        <section className={`${estilos.Container} aparecer`} >{children}</section>
    );
};

export default ContainerSessao;
