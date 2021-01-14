import React from "react";
// Importando estilo do componente.
import estilos from "./Tabs.module.css";

const Tabs = ({ children }) => {
    return (
        <div className={estilos.Tabs}>
            {children}
        </div>
    );
};

export default Tabs;
