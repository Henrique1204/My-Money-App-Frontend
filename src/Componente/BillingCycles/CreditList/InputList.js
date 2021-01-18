import React from "react";
// Importando componentes da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";
// Improtando utilitários do redux.
import { useDispatch } from "react-redux";
// Importando actions da store.
import { addCredito } from "../../../store/form.js";

const InputList = ({ useFormConfig, inputConfig, type, removido }) => {
    // Estados globais.
    const dispatch = useDispatch();

    // Estados locais.
    const campo = useForm(...useFormConfig);

    const onChange = (e) => {
        campo.onChange(e);

        if (!removido) {
            dispatch(addCredito({
                type,
                name: inputConfig.name,
                valor: e.target.value
            }));
        }
    }

    React.useEffect(() => {
        if (!removido) {
            dispatch(addCredito({
                type,
                name: inputConfig.name,
                valor: campo.valor
            }));
        }
    }, [dispatch, type, inputConfig, campo.valor, removido]);

    return <InputForm
        label=""
        {...inputConfig}
        {...campo}
        onChange={onChange}
    />
};

export default InputList;
