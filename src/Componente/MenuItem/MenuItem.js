import React from "react";
// Importando estilo do componente.
import estilos from "./MenuItem.module.css";
// Importando componentes de interface.
import Icon from "../../Util/Icon.js";

const MenuItem = ({ rota, icon, conteudo }) => {
    return (
        <li>
           <a href={rota} className={estilos.MenuItem} ><Icon nome={icon} /> {conteudo}</a>
        </li>
    );
};

export default MenuItem;
