import React from "react";
// Importando estilos do componente.
import estilos from "./TabsContent.module.css";

const TabsContent = ({ children }) => {
    return (
        <div className={estilos.TabsContete}>
            { children }
        </div>
    )
}

export default TabsContent
