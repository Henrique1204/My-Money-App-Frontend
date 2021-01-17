import React from "react";
// Importando estilos do componente.
import estilos from "./CreditList.module.css";
// Importando componentes da interface.
import InputList from "./InputList.js";
import Icon from "../../Util/Icon.js";
// Importando utilitários do redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions da store.
import { addLinhas } from "../../../store/form.js";

const CreditList = ({ method }) => {
    // Estados globais.
    const { dados, linhas } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const gerarCampos = (credits) => {
        const numeroLinhas = credits?.length || linhas;

        let elementos = [];

        for (let i = 0; i < numeroLinhas; i++) {
            const valorName = (credits?.length && credits[i].name) || "";
            const valorValue = (credits?.length && credits[i].value) || "";

            elementos.push(
                <tr key={i}>
                    <td>
                        <InputList
                            useFormConfig={[valorName, ""]}

                            inputConfig={{
                                name: `name_credit_${i}`,
                                type:"text",
                                readonly: (method === "DELETE")
                            }}

                            type={"names"}
                        />
                    </td>

                    <td>
                        <InputList
                            useFormConfig={[valorValue, "numero"]}

                            inputConfig={{
                                name: `value_credit_${i}`,
                                type: "text",
                                readonly: (method === "DELETE")
                            }}

                            type={"values"}
                        />
                    </td>

                    <td>
                            { method !== "DELETE" && (
                                <button
                                    type="button"
                                    className={`${estilos.btn} ${estilos.btnAdd}`}
                                    onClick={() => dispatch(addLinhas())}
                                >
                                    <Icon nome="plus" />
                                </button>
                            )}
                    </td>
                </tr>
            );
        }

        return elementos;
    }

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
