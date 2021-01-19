import React from "react";
// Importando o estilo do componente.
import estilos from "./Logo.module.css";
// Importando componentes da interface.
import Icon from "../../Util/Icon.js";
// Importando hooks personalizados.
import useMedia from "../../../Hooks/useMedia.js";

const Logo = ({ isAberto }) => {
    const mobile = useMedia("(max-width: 800px)");

    return (
        <h1 href="/"
        className={`${estilos.Logo}
            ${(isAberto ? " menuToggleAberto " : " menuToggle ")}
            ${mobile && !isAberto ? estilos.escondido : ""}
        `} >
            <span>
                {
                    isAberto ? (
                        <>
                            <Icon nome="money" /> My
                            <span className={estilos.logoSec}> Money</span>
                        </>
                    ) : <>My <span className={estilos.logoSec}> M</span></>
                }
            </span>
        </h1>
    );
};

export default Logo;
