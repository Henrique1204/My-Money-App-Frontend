import React from "react";
// Importando estilo do componente.
import estilos from "./SideBar.module.css";
// Importando componentes da interface.
import Menu from "../Menu.js";

const SideBar = ({ isAberto, setIsAberto }) => {
    return (
        <aside
            className={`${estilos.SideBar} ${(isAberto) ? estilos.aberto : ""}`}
            onMouseEnter={() => setIsAberto(true)}
        >
            <Menu />
        </aside>
    );
};

export default SideBar;
