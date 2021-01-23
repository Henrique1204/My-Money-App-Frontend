import React from "react";
// Importando estilos do componente.
import estilos from "./NavBar.module.css";
// Importando utilitários do redux.
import { useSelector } from "react-redux";
import Icon from "../../Util/Icon";

const NavBar = () => {
    // Estados globais.
    const { user } = useSelector((state) => state.auth);

    // Estados local.
    const [aberto, setAberto] = React.useState(false);    

    return (
        <div className={estilos.container} onMouseLeave={() => setAberto(false)}>
            <button
                className={estilos.btn}
                onClick={() => setAberto((state) => !state)}
            >
                <span><Icon nome="user" /></span>teste
            </button>

            {aberto && (
                <div class={estilos.modal}>
                    <div className={estilos.modalConteudo}>
                        <span>Teste</span>
                        <span className={estilos.email}>teste@gmail.com</span>
                    </div>
    
                    <div className={estilos.modalFooter}>
                        <button className={estilos.logout}>Sair</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
