import React from "react";
// Importando estilos do componente.
import estilos from "./TabsContent.module.css";

const TabsContent = ({ children }) => {
    return (
        <div className={estilos.TabsContemt}>
            {children}
        </div>
    );
};

export default TabsContent;
