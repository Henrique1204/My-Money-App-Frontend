import React from "react";
// Importando utilitários do Redux.
import { useSelector } from "react-redux";

const TabContent = ({ id, children }) => {
    const { tab } = useSelector((state) => state.tabs);

    if (tab === id) return <div id={id} className="aparecer">{children}</div>;

    return null;
};

export default TabContent;
