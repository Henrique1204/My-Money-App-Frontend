import React from "react";
// Importando componentes da interface.
import Dashboard from "../Componente/Dashboard/Dashboard.js";
// Importando componentes do react-router-dom.
import { Routes, Route, Navigate  } from "react-router-dom";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="billingCycles" element={<h1>BillingCycles</h1>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Rotas;
