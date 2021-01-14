import React from "react";
// Importando componentes da interface.
import ContainerSessao from "../ContainerSessao/ContainerSessao.js";
import TituloSessao from "../TituloSessao/TituloSessao.js";
import Tabs from "../Tabs/Tabs.js";
import TabsHeader from "../TabsHeader/TabsHeader.js";
import TabHeader from "../TabHeader/TabHeader.js";
import TabsContent from "../TabsContent/TabsContent.js";
import TabContent from "../TabContent/TabContent.js";

const BillingCycles = () => {
    return (
        <ContainerSessao>
            <TituloSessao titulo="Ciclos de pagamentos" subtitulo="Cadastro" />

            <Tabs>
                <TabsHeader>
                    <TabHeader alvo="tabLista" icon="bars" legenda="Lista" />
                    <TabHeader alvo="tabIncluir" icon="plus" legenda="Incluir" />
                    <TabHeader alvo="tabAlterar" icon="pencil" legenda="Alterar" />
                    <TabHeader alvo="tabExcluir" icon="trash-o" legenda="Excluir" />
                </TabsHeader>

                <TabsContent>
                    <TabContent id="tabLista" ><h2>Lista</h2></TabContent>
                    <TabContent id="tabIncluir" ><h2>Incluir</h2></TabContent>
                    <TabContent id="tabAlterar" ><h2>Alterar</h2></TabContent>
                    <TabContent id="tabExcluir" ><h2>Excluir</h2></TabContent>
                </TabsContent>
            </Tabs>
        </ContainerSessao>
    );
};

export default BillingCycles;