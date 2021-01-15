import React from "react";
// Importando estilo do componente.
import estilos from "./MenuItem.module.css";
// Importando componentes de interface.
import Icon from "../../Util/Icon.js";
// Importando componente do react-router-dom
import { NavLink } from "react-router-dom";

const MenuItem = ({ rota, icon, conteudo }) => {
    return (
        <li>
           <NavLink to={rota} className={estilos.MenuItem} ><Icon nome={icon} /> {conteudo}</NavLink>
        </li>
    );
};

export default MenuItem;
