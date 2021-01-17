import React from "react";
// Importando estilos do componente.
import estilos from "./AcoesBtn.module.css";
// Importando componentes da interface.
import Icon from "../../../Util/Icon.js";

const AcoesBtn = ({ click, estilo, icon }) => {
    return (
        <button type="button" className={`${estilos.btn} ${estilos[estilo]}`} onClick={click}>
            <Icon nome={icon} />
        </button>
    );
};

export default AcoesBtn;
