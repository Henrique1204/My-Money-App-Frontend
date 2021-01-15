import React from "react";
// Importando estilo do componente.
import estilos from "./Header.module.css";
// Importando componentes da interface.
import Logo from "./Logo/Logo.js";

const Header = ({ isAberto, setIsAberto }) => {
    return (
        <header className={estilos.Header} >
            <Logo isAberto={isAberto} />

            <nav>
                <button className={`${estilos.btnMenu}`} onClick={() => setIsAberto((valor) => !valor)} >
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
