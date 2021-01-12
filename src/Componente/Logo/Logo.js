import React from "react";
// Importando o estilo do componente.
import estilos from "./Logo.module.css";
// Importando componentes da interface.
import Icon from "../../Util/Icon.js";

const Logo = ({ isAberto }) => {
    return (
        <a href="/" className={`${estilos.Logo} ${(isAberto ? estilos.aberto : "")} px-3 py-1`} >
            <span>
                {isAberto && <Icon nome="fa-money" />} My
                <span className={estilos.logoSec}> M{ isAberto && "oney" }</span>
            </span>
        </a>
    );
};

export default Logo;
