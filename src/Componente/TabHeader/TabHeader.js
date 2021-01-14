import React from "react";
// Importando componentes da interface.
import Icon from "../Util/Icon.js";

const TabHeader = ({ icon, legenda }) => {
    return (
        <li>
            <button><Icon nome={icon} />{legenda}</button>
        </li>
    );
};

export default TabHeader;
