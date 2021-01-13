import React from "react";
// Importando estilo do componente.
import estilos from "./Footer.module.css";

const Footer = () => {
    const ano = new Date().getFullYear()

    return (
        <footer className={estilos.Footer}>
            <strong>
                Copyright &copy; {ano} 
                <a
                    href="https://github.com/Henrique1204"
                    target="_blank"
                    rel="noreferrer"
                > Henrique1204
                </a>.
            </strong>
        </footer>
    );
};

export default Footer;
