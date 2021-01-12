import React from "react";
// Importando estilo do componente.
import estilos from "./Header.module.css";
// Importando componentes da interface.
import Logo from "../Logo/Logo.js";

const Header = () => {
    return (
        <header className={estilos.Header} >
            <Logo isAberto={true} />
        </header>
    );
};

export default Header;
