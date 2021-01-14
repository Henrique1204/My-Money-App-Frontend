import React from "react";
// Importando componentes da interface.
import Dashboard from "../Componente/Dashboard/Dashboard.js";
import BillingCycles from "../Componente/BillingCycles/BillingCycles.js";
// Importando componentes do react-router-dom.
import { Routes, Route, Navigate  } from "react-router-dom";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="cicloPagamentos" element={<BillingCycles />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Rotas;
