import React from "react";
// Importando estilo do componente.
import estilos from "./InputRow.module.css";
// Importando componentes da interface.
import InputList from "../InputList.js";
import AcoesBtn from "../AcoesBtn/AcoesBtn.js";
// Importando utilitários do Redux.
import { useDispatch } from "react-redux";
// Importando actions da store.
import { alterarNumeroLinhas, alterarLinhaDuplicada } from "../../../../store/form.js";

const InputRow = ({ valorName, valorValue, readonly, indice }) => {
    // Estados globais.
    const dispatch = useDispatch();

    const duplicarLinhas = () => {
        dispatch(alterarLinhaDuplicada({
            name: `name_credit_${indice}`,
            value: `value_credit_${indice}`
        }));
        dispatch(alterarNumeroLinhas());
    };

    React.useEffect(() => {
        dispatch(alterarLinhaDuplicada(null));
    }, [dispatch]);

    return (
        <tr className={estilos.linha}>
            <td>
                <InputList
                    useFormConfig={[valorName, ""]}

                    inputConfig={{
                        name: `name_credit_${indice}`,
                        type:"text",
                        readonly
                    }}

                    type={"names"}
                />
            </td>

            <td>
                <InputList
                    useFormConfig={[valorValue, "numero"]}

                    inputConfig={{
                        name: `value_credit_${indice}`,
                        type: "text",
                        readonly
                    }}

                    type={"values"}
                />
            </td>

            {
                !readonly && (
                    <td>
                        <AcoesBtn click={() => dispatch(alterarNumeroLinhas())} icon="plus" estilo="add" />
                        <AcoesBtn click={duplicarLinhas} icon="clone" estilo="duplicar" />
                    </td>
                )
            }
        </tr>
    );
};

export default InputRow;
