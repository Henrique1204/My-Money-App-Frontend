import React from "react";
// Importando componentes da interface.
import InputForm from "../../Util/InputForm/InputForm.js";
// Importando hooks personalizados.
import useForm from "../../../Hooks/useForm.js";

const definirState = (valor, setState, useFormConfig, inputConfig ) => {
    setState((lista) => {
        const indice = lista.indexOf(lista.find((item) => item.name === inputConfig.name));

        if (indice === -1) {
            return [...lista, { name: inputConfig.name, value: valor }];
        } else {
            lista[indice].value = valor;
            return lista;
        }
    });
}

const InputList = ({ useFormConfig, inputConfig, setState  }) => {
    const campo = useForm(...useFormConfig);

    const onChange = (e) => {
        campo.onChange(e);

        definirState(e.target.value, setState, useFormConfig, inputConfig)
    }

    React.useEffect(() => {
        definirState(campo.valor, setState ,useFormConfig, inputConfig)
    }, [campo, setState, useFormConfig, inputConfig]);

    return <InputForm label="" {...inputConfig} {...campo} onChange={onChange} />
};

export default InputList;
