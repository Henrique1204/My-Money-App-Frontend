import React from "react";
// Importando estilo do componente.
import estilos from "./InputRow.module.css";
// Importando componentes da interface.
import InputList from "../InputList.js";
import Icon from "../../../Util/Icon.js";
// Importando utilitários do Redux.
import { useDispatch } from "react-redux";
// Importando actions da store.
import { alterarLinhas } from "../../../../store/form.js";


const InputRow = ({ valorName, valorValue, readonly, indice }) => {
    // Estados globais.
    const dispatch = useDispatch();

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

            <td>
                    { !readonly && (
                        <button
                            type="button"
                            className={`${estilos.btn} ${estilos.btnAdd}`}
                            onClick={() => dispatch(alterarLinhas())}
                        >
                            <Icon nome="plus" />
                        </button>
                    )}
            </td>
        </tr>
    );
};

export default InputRow;
