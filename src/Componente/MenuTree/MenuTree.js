import React from "react";
// Importando estilo do componente.
import estilos from "./MenuTree.module.css";
// Importando componentes da interface.
import Icon from "../Util/Icon.js";

const MenuTree = ({ icon, titulo, children }) => {
    const [isAtivo, setIsAtivo] = React.useState(false);

    return (
        <li className={`${estilos.subMenu} ${(isAtivo) ? estilos.ativo : ""}`} >
            <h4 href="/" className={estilos.MenuTree} onClick={() => setIsAtivo((valor) => !valor)} >
                <span><Icon nome={icon}/> {titulo}</span>
                <Icon nome="angle-left"/>
            </h4>

            <ul>{children}</ul>
        </li>
    );
};

export default MenuTree;
