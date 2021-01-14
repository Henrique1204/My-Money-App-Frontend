import React from "react";
// Importando estilo do componente.
import estilos from "./Erro.module.css";

const Erro = ({ msg }) => {
    return (
        <div className={estilos.Erro}>
            <p>{msg}</p>
        </div>
    );
};

export default Erro;
