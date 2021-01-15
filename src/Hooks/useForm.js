import React from "react";

const tipos = {
    email: {
        regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        menssagem: "Preencha um e-mail válido."
    },
    senha: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        menssagem: "Mínimo 8 caractes, 1 letra maiúscula e 1 numero."
    },
    numero: {
        regex: /^\d+$/,
        menssagem: "Utilize apenas números"
    }
}

const useForm = (tipo) => {
    const [valor, setValor] = React.useState("");
    const [erro, setErro] = React.useState(null);

    function validar(valor) {
        // Testa se foi pedido validação.
        if (tipo === false) return true;

        // Testa se está vázio.
        if (valor.length === 0) {
            setErro("Preencha um valor.");
            return false;
        } else if (tipos[tipo] && !tipos[tipo].regex.test(valor)) {
            setErro(tipos[tipo].menssagem);
            return false;
        } else {
            setErro(null);
            return true;
        }
    }

    return {
        valor,
        erro,
        setValor,
        onChange: ({target}) => {
            if (erro) validar(valor);
            setValor(target.value);
        },
        validar: () => validar(valor),
        onBlur: () => validar(valor)
    }
};

export default useForm;
