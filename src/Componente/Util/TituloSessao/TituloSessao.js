import React from "react";
// Importando estilo do componente.
import estilos from "./TtituloSessao.module.css";

const TituloSessao = ({ titulo, subtitulo }) => (
    <h1 className={estilos.Titulo}>{titulo} <small>{subtitulo}</small></h1>
);

export default TituloSessao;
