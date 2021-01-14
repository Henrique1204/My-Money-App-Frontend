import React from "react";
// Importando estilo do componente.
import estilos from "./Dashboard.module.css";
// Importando componentes da interface.
import ContainerSessao from "../ContainerSessao/ContainerSessao.js";
import TituloSessao from "../TituloSessao/TituloSessao.js";
import Card from "../Card/Card.js";
import Loading from "../Util/Loading/Loading.js";
// Importando utilitários do redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions do reducer.
import { fetchSummary } from "../../store/summary.js";

const Dashboard = () => {
    const { dados, loading } = useSelector((state) => state.summary);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchSummary());
    }, [dispatch]);

    if (loading) return <Loading />;

    return (
        <ContainerSessao>
            <TituloSessao titulo="Dashboard" subtitulo="Versão 1.0" />

            { dados && (
                <div className={estilos.cards}>
                    <Card cor="verde" valor={`R$ ${dados.credit.toLocaleString()}`} texto="Total de créditos" icon="bank" />
                    <Card cor="vermelho" valor={`R$ ${dados.debt.toLocaleString()}`} texto="Total de débitos" icon="credit-card" />
                    <Card cor="azul" valor={`R$ ${(dados.credit - dados.debt).toLocaleString()}`} texto="Valor consolidado" icon="money" />
                </div>
            ) }
        </ContainerSessao>
    );
};

export default Dashboard;
