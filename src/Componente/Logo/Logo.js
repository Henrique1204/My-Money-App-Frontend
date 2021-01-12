import React from "react";
// Importando o estilo do componente.
import estilos from "./Logo.module.css";
// Importando componentes da interface.
import Icon from "../../Util/Icon.js";

const Logo = ({ isAberto }) => {
    return (
        <h1 href="/" className={`${estilos.Logo} ${(isAberto ? "menuToggleAberto" : "menuToggle")}`} >
            <span>
                {isAberto && <Icon nome="money" />} My
                <span className={estilos.logoSec}> M{ isAberto && "oney" }</span>
            </span>
        </h1>
    );
};

export default Logo;
