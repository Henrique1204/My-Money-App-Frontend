import React from "react";
// Importando componentes da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";

const InputList = ({ useFormConfig, inputConfig, setState  }) => {
    const campo = useForm(...useFormConfig);

    const onChange = (e) => {
        campo.onChange(e);

        setState((lista) => {
            console.log(lista);
            const indice = lista.indexOf(lista.find((item) => item.name === inputConfig.name));

            if (indice === -1) {
                return [...lista, { name: inputConfig.name, value: campo.valor }];
            } else {
                lista[indice].value = campo.valor;
                return lista;
            }
        });
    }

    return <InputForm label="" {...inputConfig} {...campo} onChange={onChange} />
};

export default InputList;
