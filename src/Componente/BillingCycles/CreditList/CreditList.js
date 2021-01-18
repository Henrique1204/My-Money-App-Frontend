import React from "react";
// Importando estilos do componente.
import estilos from "./CreditList.module.css";
// Importando componentes da interface.
import InputRow from "./InputRow/InputRow.js";
// Importando utilitários do redux.
import { useDispatch, useSelector } from "react-redux";
import { alterarNumeroLinhas } from "../../../store/form";

const CreditList = ({ method }) => {
    // Estados globais.
    const { dados, linhas, creditos } = useSelector((state) => state.form);
    const dispatch = useDispatch();
    // Estados local.
    const [elementos, setElementos] = React.useState(null);

    React.useEffect(() => {
        setElementos([]);
        const credits = dados?.credits;

        for (let i = 0; i < linhas.numero; i++) {
            let valorName;
            let valorValue;

            if (linhas.duplicata && true) {
                const names = creditos.names.find((n) => n.name === linhas.duplicata.name);
                const values = creditos.values.find((v) => v.name === linhas.duplicata.value);

                valorName = names.value;
                valorValue = values.value;
            } else {
                valorName = (credits?.length && credits[i] && credits[i].name) || "";
                valorValue = (credits?.length && credits[i] && credits[i].value) || "";
            }

            const readonly = method === "DELETE";

            const novoElemento = (<InputRow
                key={i}
                valorName={valorName}
                valorValue={valorValue}
                readonly={readonly}
                indice={i}
            />);

            setElementos((elementos) => [...elementos, novoElemento]);
        }
    
    }, [creditos.names, creditos.values, dados?.credits, linhas.duplicata, linhas.numero, method]);

    React.useEffect(() => {
        dispatch(alterarNumeroLinhas(dados?.credits?.length || 1));
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
                    { elementos?.map((elementos) => elementos) }
                </tbody>
            </table>
        </fieldset>
    );
};

export default CreditList;
