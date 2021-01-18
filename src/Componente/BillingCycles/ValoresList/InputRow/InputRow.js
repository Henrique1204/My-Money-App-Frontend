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
    duplicarLinha,
    addLinhasRemovidas
} from "../../../../store/form.js";

const InputRow = ({ valorName, valorValue, readonly, indice, type }) => {
    // Estados globais.
    const { linhas } = useSelector((state) => state.form );
    const dispatch = useDispatch();

    // Estados local.
    const [removido, setRemovido] = React.useState(false);

    const adicionarLinha = () => {
        dispatch(alterarNumeroLinhas({ lista: type }));
    };

    const duplicarLinhas = () => {
        dispatch(duplicarLinha({ type, indice }))
    };

    const removerLinhas = () => {
        if (linhas[type].numero > (linhas[type].removidas.length + 1)) {
            dispatch(addLinhasRemovidas({ lista: type, valor: indice }));
        }
    };

    React.useEffect(() => {
        dispatch(alterarLinhaDuplicada({
            lista: type,
            duplicata: null
        }));
    }, [dispatch, type]);

    React.useEffect(() => {
        setRemovido(() => linhas[type].removidas.reduce((ant, atual) => {
                if (ant) return ant;
                return atual === indice
            }, false)
        );
    }, [linhas, indice, type]);

    return (
        <tr id={`linha${indice}`} className={`${estilos.linha} ${(removido) ? estilos.removido : ""}`}>
            <td>
                <InputList
                    useFormConfig={[valorName, ""]}

                    inputConfig={{
                        name: `name_${type}_${indice}`,
                        type: "text",
                        readonly
                    }}

                    type={type}
                    lista={"names"}
                    removido={removido}
                />
            </td>

            <td>
                <InputList
                    useFormConfig={[valorValue, "numero"]}

                    inputConfig={{
                        name: `value_${type}_${indice}`,
                        type: "text",
                        readonly
                    }}

                    type={type}
                    lista={"values"}
                    removido={removido}
                />
            </td>

            {
                !readonly && (
                    <td className={estilos.acoes}>
                        <AcoesBtn click={adicionarLinha} icon="plus" estilo="add" />
                        <AcoesBtn click={duplicarLinhas} icon="clone" estilo="duplicar" />
                        <AcoesBtn click={removerLinhas} icon="trash-o" estilo="remover" />
                    </td>
                )
            }
        </tr>
    );
};

export default InputRow;
