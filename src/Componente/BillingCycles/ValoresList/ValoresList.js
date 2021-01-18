import React from "react";
// Importando estilos do componente.
import estilos from "./ValoresList.module.css";
// Importando componentes da interface.
import InputRow from "./InputRow/InputRow.js";
// Importando utilitários do redux.
import { useDispatch, useSelector } from "react-redux";
import { alterarNumeroLinhas } from "../../../store/form";

const ValoresList = ({ method, type }) => {
    // Estados globais.
    const { dados, linhas } = useSelector((state) => state.form);
    const valor = useSelector((state) => state.form[type]);
    const dispatch = useDispatch();
    // Estados local.
    const [elementos, setElementos] = React.useState(null);

    React.useEffect(() => {
        const valores = (type === "creditos") ? dados?.credits : dados?.debts;
        let novosElementos = [];

        for (let i = 0; i < linhas[type].numero; i++) {
            let valorName;
            let valorValue;

            if (linhas[type].duplicata && true) {
                const names = valor.names.find((n) => n.name === linhas[type].duplicata.name);
                const values = valor.values.find((v) => v.name === linhas[type].duplicata.value);

                valorName = names.value;
                valorValue = values.value;
            } else {
                valorName = (valores?.length && valores[i] && valores[i].name) || "";
                valorValue = (valores?.length && valores[i] && valores[i].value) || "";
            }

            const readonly = method === "DELETE";

            novosElementos.push(<InputRow
                key={i}
                valorName={valorName}
                valorValue={valorValue}
                readonly={readonly}
                indice={i}
                type={type}
            />);
        }

        setElementos(novosElementos);
    
    }, [valor, dados, linhas, method, type]);

    React.useEffect(() => {
        const valores = (type === "creditos") ? dados?.credits : dados?.debts;

        dispatch(alterarNumeroLinhas({
            lista: type,
            valor: valores?.length || 1
        }));
    }, [dispatch, dados, type]);

    return (
        <fieldset className={estilos.ValoresList}>
            <legend>{type.replace("e", "é")}</legend>

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

export default ValoresList;
