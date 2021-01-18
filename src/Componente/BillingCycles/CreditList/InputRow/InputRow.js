import React from "react";
// Importando estilo do componente.
import estilos from "./InputRow.module.css";
// Importando componentes da interface.
import InputList from "../InputList.js";
import AcoesBtn from "../AcoesBtn/AcoesBtn.js";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions da store.
import {
    alterarNumeroLinhas,
    alterarLinhaDuplicada,
    addLinhasRemovidas
} from "../../../../store/form.js";

const InputRow = ({ valorName, valorValue, readonly, indice }) => {
    // Estados globais.
    const { linhas } = useSelector((state) => state.form );
    const dispatch = useDispatch();

    // Estados local.
    const [removido, setRemovido] = React.useState(false);

    const duplicarLinhas = () => {
        dispatch(alterarLinhaDuplicada({
            name: `name_credit_${indice}`,
            value: `value_credit_${indice}`
        }));
        dispatch(alterarNumeroLinhas());
    };

    const removerLinhas = () => {
        if (linhas.numero <= linhas.removidas.length) {
            dispatch(addLinhasRemovidas(indice));
        }
    };

    React.useEffect(() => {
        dispatch(alterarLinhaDuplicada(null));
    }, [dispatch]);

    React.useEffect(() => {
        setRemovido(() => linhas.removidas.reduce((ant, atual) => {
                if (ant) return ant;
                return atual === indice
            }, false)
        );
    }, [linhas.removidas, indice]);

    return (
        <tr id={`linha${indice}`} className={`${estilos.linha} ${(removido) ? estilos.removido : ""}`}>
            <td>
                <InputList
                    useFormConfig={[valorName, ""]}

                    inputConfig={{
                        name: `name_credit_${indice}`,
                        type:"text",
                        readonly
                    }}

                    type={"names"}
                    removido={removido}
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
                    removido={removido}
                />
            </td>

            {
                !readonly && (
                    <td>
                        <AcoesBtn click={() => dispatch(alterarNumeroLinhas())} icon="plus" estilo="add" />
                        <AcoesBtn click={duplicarLinhas} icon="clone" estilo="duplicar" />
                        <AcoesBtn click={removerLinhas} icon="trash-o" estilo="remover" />
                    </td>
                )
            }
        </tr>
    );
};

export default InputRow;
