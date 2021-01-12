import React from "react";
// Importando componentes da interface.
import Icon from "../Util/Icon.js";

const MenuTree = ({ icon, titulo, children }) => {
    return (
        <li>
            <h4 href="/"><Icon nome={icon}/> {titulo} <Icon nome="angle-left"/></h4>
            <ul>
                {children}
            </ul>
        </li>
    );
};

export default MenuTree;
