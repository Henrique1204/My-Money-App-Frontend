import React from "react";
// Importando componentes da interface.
import ContainerSessao from "../ContainerSessao/ContainerSessao.js";
import TituloSessao from "../TituloSessao/TituloSessao.js";
import Tabs from "../Tabs/Tabs.js";
import TabsHeader from "../TabsHeader/TabsHeader.js";
import TabHeader from "../TabHeader/TabHeader.js";
import TabsContent from "../TabsContent/TabsContent.js";

const BillingCycles = () => {
    return (
        <ContainerSessao>
            <TituloSessao titulo="Ciclos de pagamentos" subtitulo="Cadastro" />

            <Tabs>
                <TabsHeader>
                    <TabHeader icon="bars" legenda="Lista" />
                    <TabHeader icon="plus" legenda="Incluir" />
                    <TabHeader icon="pencil" legenda="Alterar" />
                    <TabHeader icon="trash-o" legenda="Excluir" />
                </TabsHeader>

                <TabsContent>
                    
                </TabsContent>
            </Tabs>
        </ContainerSessao>
    );
};

export default BillingCycles;
