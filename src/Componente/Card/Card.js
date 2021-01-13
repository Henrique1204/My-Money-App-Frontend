import React from "react";
//  Importando estilo do componente.
import estilos from "./Card.module.css";
// Importando componentes da interface.
import Icon from "../Util/Icon.js";

const Card = ({ cor, valor, texto, icon }) => {
    return (
        <div className={`${estilos.Card} ${estilos[cor]}`}>
            <h2>{valor}</h2>
            <p>{texto}</p>
            <Icon nome={icon} />
        </div>
    );
};

export default Card;
