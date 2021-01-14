import React from "react";
// Importando estilos do componente.
import estilos from "./TabHeader.module.css";
// Importando componentes da interface.
import Icon from "../Util/Icon.js";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions do reducer.
import { trocarTab } from "../../store/tabs.js";

const TabHeader = ({ alvo, icon, legenda }) => {
    const { tab, tabsVisiveis } = useSelector((state) => state.tabs);
    const dispatch = useDispatch();

    if (!tabsVisiveis[alvo]) return null;

    return (
        <li>
            <button
                onClick={() => dispatch(trocarTab(alvo))}
                className={`${estilos.Tab} ${(tab === alvo) ? estilos.selecionada : ""}`}
            >
                <Icon nome={icon} />{legenda}
            </button>
        </li>
    );
};

export default TabHeader;
