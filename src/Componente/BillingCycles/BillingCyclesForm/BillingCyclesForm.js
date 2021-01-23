import React from "react";
// Importando estilo do componente.
import estilos from "./BillingCyclesForm.module.css";
// Importando componente da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
import ValoresList from "../ValoresList/ValoresList.js";
import Summary from "./Summary/Summary.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";
import useFetch from "../../../Hooks/useFetch.js";
// Importando configurações da API.
import { DELETE_CYCLE, POST_CYCLE, PUT_CYCLE } from "../../../api";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions da store.
import { mostrarFeedback } from "../../../store/ui.js";
import { mostrarTabInicial } from "../../../store/tabs.js";
import { resetarForm } from "../../../store/form.js";

const gerarJsonValores = (listaName, listaValue, removidos, type, listaStatus) => {
    return listaName.reduce((ant, atual) => {
        const id = atual.name.substring(atual.name.lastIndexOf("_")+1);
        const valueCorrespondente = listaValue.find((item) => item.name === `value_${type}_${id}`);
        const status = listaStatus?.find((item) => item.name === `status_${type}_${id}`);

        if (removidos.includes(Number(id))) {
            return ant;
        }

        if (status?.value) {
            return [...ant, {
                name: atual.value,
                value: valueCorrespondente.value,
                status: status.value
            }];
        }

        return [...ant, { name: atual.value, value: valueCorrespondente.value }];
    }, []).filter(({ name, value }) => name && value);
};

const BillingCyclesForm = ({ method }) => {
    // Estados globais.
    const { timer } = useSelector((state) => state.ui);
    const { dados, creditos, debitos, linhas } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    // Estados do formulário.
    const name = useForm(dados?.name);
    const month = useForm(dados?.month, "numero", { min: 1, max: 12 });
    const year = useForm(dados?.year, "numero", { min: 1970, max: 2100 });

    // Estados do fetch.
    const { loading, request } = useFetch();

    const gerarBody = () => {
        let body = {
            name: name.valor,
            month: Number(month.valor),
            year: Number(year.valor),
        };

        const credits = gerarJsonValores(
            creditos.names,
            creditos.values,
            linhas["creditos"].removidas,
            "creditos"
        );

        if (credits.length) body = {...body, credits};

        const debts = gerarJsonValores(
            debitos.names,
            debitos.values,
            linhas["debitos"].removidas,
            "debitos",
            debitos.status
        );

        if (debts.length) body = {...body, debts};

        return body;
    }

    const handleSubmit = async (config, sucesso) => {
        if (name.validar() && month.validar() && year.validar() && timer) {
            const { response, json } = await request(config.url, config.options);
            let feedkback;

            if (json?.errors) {
                feedkback = json.errors.map((item) => ({ msg: item, status: "erro" }));
            } else if (response?.ok) {
                feedkback = [{ msg: sucesso, status: "sucesso" }];

                dispatch(mostrarTabInicial());
            } else {
                feedkback = [{
                    msg: "Falha ao enviar os dados!",
                    status: "erro"
                }];
            }

            dispatch(mostrarFeedback(feedkback));
        }
    };

    const handlePost = (e) => {
        e.preventDefault();

        handleSubmit(
            POST_CYCLE(gerarBody(), localStorage.getItem("token")),
            "Dados adicionados com sucesso!"
        );
    }

    const handlePut = async (e) => {
        e.preventDefault();


        await handleSubmit(
            PUT_CYCLE(gerarBody(), dados._id, localStorage.getItem("token")),
            "Dados atualizados com sucesso!"
        );
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await handleSubmit(
            DELETE_CYCLE(dados._id, localStorage.getItem("token")),
            "Dados removidos com sucesso!"
        );
    }

    const eventosForm = {
        POST: handlePost,
        PUT: handlePut,
        DELETE: handleDelete
    };

    const textoBtn = {
        POST: "Enviar",
        PUT: "Alterar",
        DELETE: "Excluir"
    }

    React.useEffect(() => {
        return () => {
            dispatch(resetarForm());
        };
    }, [dispatch])

    return (
        <form onSubmit={eventosForm[method]} className={estilos.form} >
            <InputForm label="Nome:" name="name" type="text" readonly={method === "DELETE"} {...name} />
            <InputForm label="Mês:" name="month" type="text" readonly={method === "DELETE"} {...month} />
            <InputForm label="Ano:" name="year" type="text" readonly={method === "DELETE"} {...year} />
        
            <Summary className={estilos.summary} />

            <ValoresList method={method} type={"creditos"} />
            <ValoresList method={method} type={"debitos"} />

            <div className={estilos.btnBox}>
                <button
                    type="submit"
                    className={`${estilos.btn} ${estilos.btnSubmit}`}
                    disabled={loading || !timer}
                >
                    {textoBtn[method]}
                </button>

                {
                    method !== "POST" && (
                        <button
                            type="button"
                            className={`${estilos.btn} ${estilos.btnCancelar}`}
                            onClick={() => dispatch(mostrarTabInicial())}
                        >Cancelar</button>
                    )
                }
            </div>
        </form>
    );
};

export default BillingCyclesForm;
