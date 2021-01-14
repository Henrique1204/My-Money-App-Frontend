import React from "react";
// Importando estilos do componente.
import estilos from "./BillingCyclesList.module.css";
// Importando componentes da interface.
import Loading from "../Util/Loading/Loading.js";
import Erro from "../Util/Erro/Erro.js";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions do reducer.
import { fetchList } from "../../store/billingCyclesList.js";

const BillingCyclesList = () => {
    const { dados, loading, erro } = useSelector((state) => state.billingCyclesList);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    React.useEffect(() => {
        console.log(dados);
    }, [dados]);

    if (loading) return <div className={estilos.containerFeedBack}><Loading /></div>;

    if (erro) return <div className={estilos.containerFeedBack}><Erro msg={erro} /></div>;

    if (dados) {
        return (
            <table className={estilos.BillingCyclesList}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    { dados.map(({_id, name, month, year}) => (
                        <tr key={_id}>
                            <td>{name}</td>
                            <td>{month}</td>
                            <td>{year}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        );
    }

    return null;
};

export default BillingCyclesList;
