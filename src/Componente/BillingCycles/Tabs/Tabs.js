import React from "react";
// Importando estilo do componente.
import estilos from "./Tabs.module.css";
// Importando componentes da interface.
import TabsHeader from "./TabsHeader/TabsHeader.js";
import TabHeader from "./TabsHeader/TabHeader/TabHeader.js";
import TabsContent from "./TabsContent/TabsContent.js";
import TabContent from "./TabsContent/TabContent.js";
import BillingCyclesList from "../BillingCyclesList/BillingCyclesList.js";
import BillingCyclesForm from "../BillingCyclesForm/BillingCyclesForm.js";

const Tabs = () => {
    return (
        <div className={estilos.Tabs}>
            <TabsHeader>
                <TabHeader alvo="tabLista" icon="bars" legenda="Lista" />
                <TabHeader alvo="tabIncluir" icon="plus" legenda="Incluir" />
                <TabHeader alvo="tabAlterar" icon="pencil" legenda="Alterar" />
                <TabHeader alvo="tabExcluir" icon="trash-o" legenda="Excluir" />
            </TabsHeader>

            <TabsContent>
                <TabContent id="tabLista" >
                    <BillingCyclesList />
                </TabContent>
                <TabContent id="tabIncluir" >
                    <BillingCyclesForm method="POST" />
                </TabContent>
                <TabContent id="tabAlterar" >
                    <BillingCyclesForm method="PUT" />
                </TabContent>
                <TabContent id="tabExcluir" ><h2>Excluir</h2></TabContent>
            </TabsContent>
        </div>
    );
};

export default Tabs;
