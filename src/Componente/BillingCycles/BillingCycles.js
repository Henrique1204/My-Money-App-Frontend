import React from "react";
// Importando componentes da interface.
import ContainerSessao from "../Util/ContainerSessao/ContainerSessao.js";
import TituloSessao from "../Util/TituloSessao/TituloSessao.js";
import Tabs from "./Tabs/Tabs.js";
// Importando utilitários do Redux.
import { useDispatch } from "react-redux";
import { mostrarTabInicial } from "../../store/tabs.js";

const BillingCycles = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(mostrarTabInicial());;
    }, [dispatch]);

    return (
        <ContainerSessao>
            <TituloSessao titulo="Ciclos de pagamentos" subtitulo="Cadastro" />

            <Tabs />
        </ContainerSessao>
    );
};

export default BillingCycles;
