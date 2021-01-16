import React from "react";
// Importando componentes da interface.
import InputForm from "../../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../../Hooks/useForm.js";

const InputList = ({ useFormConfig, inputConfig, setState  }) => {
    const campo = useForm(...useFormConfig);

    const onChange = (e) => {
        setState((lista) => {
            const indice = lista.indexOf(campo.valor);

            if (indice !== -1) {
                lista[indice] = e.target.value;
                console.log(lista);
                return lista;
            }

            return [...lista, e.target.value];
        });

        campo.onChange(e);
    }

    return <InputForm label="" {...inputConfig} {...campo} onChange={onChange} />
};

export default InputList;
