import React from "react";
import { useSelector } from "react-redux";
// Importando estilos do componente.
import estilos from "./TabContent.module.css";

const TabContent = ({ id, children }) => {
    const { tab } = useSelector((state) => state.tabs);

    return (
        <div
            id={id}
            className={`${estilos.TabContent} ${(tab === id) ? estilos.selecionado : ""}`}
        >
            {children}
        </div>
    );
};

export default TabContent;
