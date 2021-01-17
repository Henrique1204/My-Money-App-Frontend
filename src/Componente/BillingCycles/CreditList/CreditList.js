import React from "react";
// Importando estilos do componente.
import estilos from "./CreditList.module.css";
// Importando componentes da interface.
import InputRow from "./InputRow/InputRow.js";
// Importando utilitários do redux.
import { useDispatch, useSelector } from "react-redux";
import { alterarLinhas } from "../../../store/form";

const CreditList = ({ method }) => {
    // Estados globais.
    const { dados, linhas } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const gerarCampos = (credits) => {
        let elementos = [];

        for (let i = 0; i < linhas; i++) {
            const valorName = (credits?.length && credits[i] && credits[i].name) || "";
            const valorValue = (credits?.length && credits[i] && credits[i].value) || "";
            const readonly = method === "DELETE";

            elementos.push(
                <InputRow
                    key={i}
                    valorName={valorName}
                    valorValue={valorValue}
                    readonly={readonly}
                    indice={i}
                />
            );
        }

        return elementos;
    }

    React.useEffect(() => {
        dispatch(alterarLinhas(dados?.credits?.length || 1));
    }, [dispatch, dados]);

    return (
        <fieldset className={estilos.CreditList}>
            <legend>Créditos</legend>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {gerarCampos(dados?.credits).map((campo) => campo)}
                </tbody>
            </table>
        </fieldset>
    );
};

export default CreditList;
