import React from "react";
// Importando estilo do componente.
import estilos from "./SideBar.module.css";
// Importando componentes da interface.
import Menu from "./Menu.js";

const SideBar = ({ isAberto, setIsAberto }) => {
    return (
        <aside
            className={`${estilos.SideBar} ${(isAberto) ? "menuToggleAberto" : "menuToggle"}`}
            onMouseEnter={() => setIsAberto(true)}
        >
            { isAberto && <Menu />}
        </aside>
    );
};

export default SideBar;
