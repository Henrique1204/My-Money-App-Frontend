import React from "react";
// Importando estilo do componente.
import estilos from "./Mensagem.module.css";
// Importando componentes da interface.
import Icon from "../../Icon.js";

const Mensagem = ({ msg, status }) => {
    const [condicao, setCondicao] = React.useState(null);

    React.useEffect(() => {
        setCondicao(msg && status && true);
    }, [msg, status]);

    if (condicao) {
        return (
            <div className={`${estilos.Mensagem} ${estilos[status]}`} >
                <Icon nome={(status === "erro") ? "exclamation-circle" : "check-circle"}  />
                <h6>{status}</h6>
                <small>{msg}</small>
                <span className={estilos.animacao} ></span>
            </div>
        );
    }

    return null;
};

export default Mensagem;
