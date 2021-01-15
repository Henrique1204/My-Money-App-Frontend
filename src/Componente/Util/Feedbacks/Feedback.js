import React from "react";
// Importando estilo do componente.
import estilos from "./Feedback.module.css";
// Importando componentes da interface.
import Mensagem from "./Mensagem/Mensagem.js";
// Importando utilitários do redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions da store.
import { atualizarTimer, removerFeedbacks } from "../../../store/ui.js";

const Feedback = () => {
    // Estados globais.
    const { feedbacks } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(atualizarTimer(true));
            dispatch(removerFeedbacks());
        }, 3900);
    
        return () => {
            clearTimeout(timeOut);
        }
    }, [feedbacks, dispatch]);

    if (feedbacks) {
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
