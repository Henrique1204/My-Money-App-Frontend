import React from "react";
// Importando estilos do componente.
import estilos from "./TabsHeader.module.css";

const TabsHeader = ({ children }) => {
    return (
        <ul className={estilos.TabsHeader}>
            {children}
        </ul>
    )
}

export default TabsHeader
