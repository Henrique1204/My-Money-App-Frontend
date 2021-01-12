import React from "react";
// Importando componentes de interface.
import Icon from "../Util/Icon.js";

const MenuItem = ({ rota, icon, conteudo }) => {
    return (
        <li>
           <a href={rota}><Icon nome={icon} /> {conteudo}</a>
        </li>
    );
};

export default MenuItem;
