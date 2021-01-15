import React from "react";
// Importando estilo do componente.
import estilos from "./BillingCyclesForm.module.css";
// Importando componente da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";
import useFetch from "../../../Hooks/useFetch.js";
// Importando configurações da API.
import { POST_LIST, PUT_LIST } from "../../../api";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions da store.
import { adicionarFeedbacks, atualizarTimer } from "../../../store/ui.js";
import { filtrarTabs, trocarTab } from "../../../store/tabs.js";
import { limparDados } from "../../../store/form.js";

const BillingCyclesForm = ({ method }) => {
    // Estados globais.
    const { timer } = useSelector((state) => state.ui);
    const { dados } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    // Estados do formulário.
    const name = useForm(dados?.name);
    const month = useForm(dados?.month, "numero", { min: 1, max: 12 });
    const year = useForm(dados?.year, "numero", { min: 1970, max: 2070 });

    // Estados do fetch.
    const { loading, request } = useFetch();

    const handleSubmit = async (config) => {
        if (name.validar() && month.validar() && year.validar() && timer) {
            const { response, json } = await request(config.url, config.options);
            let feedkback;

            if (json?.errors) {
                feedkback = json.errors.map((item) => ({ msg: item, status: "erro" }));
            } else if (response?.ok) {
                feedkback = [{
                    msg: "Dados enviados com sucesso!",
                    status: "sucesso"
                }];

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

        const body = { name: name.valor, month: Number(month.valor), year: Number(year.valor) };
        handleSubmit(POST_LIST(body));
    }

    const handlePut = (e) => {
        e.preventDefault();

        const body = { name: name.valor, month: Number(month.valor), year: Number(year.valor) }
        handleSubmit(PUT_LIST(body, dados._id));
    }

    const eventosForm = {
        POST: handlePost,
        PUT: handlePut
    };

    React.useEffect(() => {
        if (method === "POST") dispatch(limparDados());
    }, [method, dispatch]);

    return (
        <form onSubmit={eventosForm[method]} className={estilos.form} >
            <InputForm label="Nome:" name="name" type="text" {...name} />
            <InputForm label="Mês:" name="month" type="text" {...month} />
            <InputForm label="Ano:" name="year" type="text" {...year} />

            <div className={estilos.btnBox}>
                <button
                    type="submit"
                    className={`${estilos.btn} ${estilos.btnSubmit}`}
                    disabled={loading}
                >Submit</button>

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
