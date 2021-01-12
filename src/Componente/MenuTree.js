import React from "react";
// Importando componentes da interface.
import Icon from "../Util/Icon.js";

const MenuTree = ({ icon, titulo, children }) => {
    return (
        <li>
            <a href><Icon nome={icon}/> {titulo} <Icon nome="angle-left"/></a>
            <u>
                {children}
            </u>
        </li>
    );
};

export default MenuTree;
