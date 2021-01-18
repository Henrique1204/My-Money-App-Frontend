import React from "react";
// Importando componentes da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";
// Improtando utilitários do redux.
import { useDispatch } from "react-redux";
// Importando actions da store.
import { addValores } from "../../../store/form.js";

const InputList = ({ useFormConfig, inputConfig, type, lista, removido }) => {
    // Estados globais.
    const dispatch = useDispatch();

    // Estados locais.
    const campo = useForm(...useFormConfig);

    const onChange = (e) => {
        campo.onChange(e);

        if (!removido) {
            dispatch(addValores({
                type,
                lista,
                name: inputConfig.name,
                valor: e.target.value
            }));
        }
    }

    React.useEffect(() => {
        if (!removido) {
            dispatch(addValores({
                type,
                lista,
                name: inputConfig.name,
                valor: campo.valor
            }));
        }
    }, [dispatch, lista, inputConfig, campo.valor, removido, type]);

    return <InputForm
        label=""
        {...inputConfig}
        {...campo}
        onChange={onChange}
    />
};

export default InputList;
