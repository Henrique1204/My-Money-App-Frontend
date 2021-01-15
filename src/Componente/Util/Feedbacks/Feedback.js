import React from "react";
// Importando estilo do componente.
import estilos from "./Feedback.module.css";
// Importando componentes da interface.
import Mensagem from "./Mensagem/Mensagem.js";

const Feedback = ({ feedbacks }) => {
    const [condicao, setCondicao] = React.useState(null);

    React.useEffect(() => {
        setCondicao(feedbacks?.length);

        const timeOut = setTimeout(() => setCondicao(false), 3900);
    
        return () => {
            clearTimeout(timeOut);
        }
    }, [feedbacks]);

    if (condicao) {
        return (
            <div className={estilos.card}>
                {
                    feedbacks?.map(({ msg, status }) => (
                        <Mensagem msg={msg} status={status} />
                    ))
                }
            </div>
        );
    }

    return null;
};

export default Feedback;
