import React from "react";
// Importando estilos do componente.
import estilos from "./SelectList.module.css";
// Importando utilitários do React.
import { useDispatch } from "react-redux";
// Importando actions da store.
import { addValores } from "../../../../store/form.js";

const options = ["PAGO", "PENDENTE", "AGENDADO"];

const SelectList = ({ valorInicial, selectConfig, removido }) => {
    // Estados globais.
    const dispatch = useDispatch();

    // Estados local.
    const [select, setSelect] = React.useState(valorInicial);

    const onChange = ({ target }) => {
        setSelect(target.value);

        if (!removido) {
            dispatch(addValores({
                type: "debitos",
                lista: "status",
                name: selectConfig.name,
                valor: target.value
            }));
        }
    }

    React.useEffect(() => {
        if (!removido) {
            dispatch(addValores({
                type: "debitos",
                lista: "status",
                name: selectConfig.name,
                valor: select
            }));
        }
    }, [dispatch, selectConfig.name, select, removido]);


    return (
        <select
            className={`${estilos.SelectList} ${(selectConfig.readonly) ? estilos.readonly : ""}`}
            name={selectConfig.name}
            value={select}
            onChange={onChange}
        >
            <option disabled value="">Selecione a opção...</option>
            {
                options.map((op) => (
                    <option key={op} value={op}>{op}</option>
                ))
            }
        </select>
    );
};

export default SelectList;
