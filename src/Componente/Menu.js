import React from "react";
// Importando componentes da interface.
import MenuItem from "./MenuItem.js";
import MenuTree from "./MenuTree.js";

const Menu = () => {
    return (
        <ul >
            <MenuItem rota="/" icon="dashboard" conteudo="Dashboard" />
            <MenuTree icon="edit" titulo="Cadastro" >
                <MenuItem rota="/billingCycles" icon="usd" conteudo="Ciclos de pagamento" />
            </MenuTree>
        </ul>
    );
};

export default Menu;
