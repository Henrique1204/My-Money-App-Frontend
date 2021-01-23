import React from "react";
// Importando estilos do componente.
import estilos from "./NavBar.module.css";
// Importando componentes da interface.
import Icon from "../../Util/Icon.js";
// Importando utilitários do redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions dos reducers.
import { logout } from "../../../store/auth.js";

const NavBar = () => {
    // Estados globais.
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // Estados local.
    const [aberto, setAberto] = React.useState(false);

    const sair = () => {
        dispatch(logout());
    }

    return (
        <div className={estilos.container} onMouseLeave={() => setAberto(false)}>
            <button
                className={estilos.btn}
                onClick={() => setAberto((state) => !state)}
            >
                <span><Icon nome="user" /></span>{user.name}
            </button>

            {aberto && (
                <div className={estilos.modal}>
                    <div className={estilos.modalConteudo}>
                        <span>{user.name}</span>
                        <span className={estilos.email}>{user.email}</span>
                    </div>
    
                    <div className={estilos.modalFooter} onClick={sair}>
                        <button className={estilos.logout}>Sair</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
