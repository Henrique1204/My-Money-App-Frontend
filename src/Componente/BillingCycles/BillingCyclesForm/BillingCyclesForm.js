import React from "react";
// Importando estilo do componente.
import estilos from "./BillingCyclesForm.module.css";
// Importando componente da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
import ValoresList from "../ValoresList/ValoresList.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";
import useFetch from "../../../Hooks/useFetch.js";
// Importando configurações da API.
import { DELETE_CYCLE, POST_CYCLE, PUT_CYCLE } from "../../../api";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions da store.
import { adicionarFeedbacks, atualizarTimer } from "../../../store/ui.js";
import { filtrarTabs, trocarTab } from "../../../store/tabs.js";
import {
    limparDados,
    alterarNumeroLinhas,
    alterarValores,
    alterarLinhasRemovidas
} from "../../../store/form.js";

const gerarJsonValores = (listaName, listaValue, removidos, type) => {
    const listaValores = listaName.reduce((ant, atual) => {
        const id = atual.name.substring(atual.name.lastIndexOf("_")+1);
        const valueCorrespondente = listaValue.find((item) => item.name === `value_${type}_${id}`);

        if (removidos.includes(Number(id))) {
            return ant;
        }

        return [...ant, { name: atual.value, value: valueCorrespondente.value }];
    }, []);

    return listaValores;
}

const BillingCyclesForm = ({ method }) => {
    // Estados globais.
    const { timer } = useSelector((state) => state.ui);
    const { dados, creditos, debitos ,linhas } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    // Estados do formulário.
    const name = useForm(dados?.name);
    const month = useForm(dados?.month, "numero", { min: 1, max: 12 });
    const year = useForm(dados?.year, "numero", { min: 1970, max: 2100 });

    // Estados do fetch.
    const { loading, request } = useFetch();

    const handleSubmit = async (config, sucesso) => {
        if (name.validar() && month.validar() && year.validar() && timer) {
            const { response, json } = await request(config.url, config.options);
            let feedkback;

            if (json?.errors) {
                feedkback = json.errors.map((item) => ({ msg: item, status: "erro" }));
            } else if (response?.ok) {
                feedkback = [{ msg: sucesso, status: "sucesso" }];

                dispatch(trocarTab("tabLista"));
                dispatch(filtrarTabs("tabLista", "tabIncluir"));
            } else {
                feedkback = [{
                    msg: "Falha ao enviar os dados!",
                    status: "erro"
                }];
            }

            dispatch(adicionarFeedbacks(feedkback));
            dispatch(atualizarTimer(false));
        }
    };

    const handlePost = (e) => {
        e.preventDefault();

        const credits = gerarJsonValores(
            creditos.names,
            creditos.values,
            linhas["creditos"].removidas,
            "creditos"
        );

        const debts = gerarJsonValores(
            debitos.names,
            debitos.values,
            linhas["debitos"].removidas,
            "debitos"
        );

        const body = {
            name: name.valor,
            month: Number(month.valor),
            year: Number(year.valor),
            credits,
            debts
        };

        handleSubmit(POST_CYCLE(body), "Dados adicionados com sucesso!");
    }

    const handlePut = async (e) => {
        e.preventDefault();

        const credits = gerarJsonValores(
            creditos.names,
            creditos.values,
            linhas["creditos"].removidas,
            "creditos"
        );

        const debts = gerarJsonValores(
            debitos.names,
            debitos.values,
            linhas["debitos"].removidas,
            "debitos"
        );

        const body = {
            name: name.valor,
            month: Number(month.valor),
            year: Number(year.valor),
            credits,
            debts
        };

        await handleSubmit(PUT_CYCLE(body, dados._id), "Dados atualizados com sucesso!");
        dispatch(limparDados());
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await handleSubmit(DELETE_CYCLE(dados._id), "Dados removidos com sucesso!");
        dispatch(limparDados());
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
            dispatch(alterarNumeroLinhas({
                lista: "creditos",
                valor: 1
            }));

            dispatch(alterarValores({
                type: "creditos",
                valor: { names: [], values: [] }
            }));

            dispatch(alterarLinhasRemovidas({
                lista: "creditos",
                valor: []
            }));

            dispatch(alterarNumeroLinhas({
                lista: "debitos",
                valor: 1
            }));

            dispatch(alterarValores({
                type: "debitos",
                valor: { names: [], values: [] }
            }));

            dispatch(alterarLinhasRemovidas({
                lista: "debitos",
                valor: []
            }));
        };
    }, [dispatch])

    return (
        <form onSubmit={eventosForm[method]} className={estilos.form} >
            <InputForm label="Nome:" name="name" type="text" readonly={method === "DELETE"} {...name} />
            <InputForm label="Mês:" name="month" type="text" readonly={method === "DELETE"} {...month} />
            <InputForm label="Ano:" name="year" type="text" readonly={method === "DELETE"} {...year} />
        
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
                            onClick={() => {
                                dispatch(limparDados());
                                dispatch(trocarTab("tabLista"));
                                dispatch(filtrarTabs("tabLista", "tabIncluir"));
                            }}
                        >Cancelar</button>
                    )
                }
            </div>
        </form>
    );
};

export default BillingCyclesForm;
