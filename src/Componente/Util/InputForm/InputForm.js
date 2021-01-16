import React from "react";
// Importando estilo do componente.
import estilos from "./InputForm.module.css";

const InputForm = ({ label, type, name, valor, onChange, onBlur, erro, readonly }) => {
    return (
        <div className={estilos.campo}>
            <label htmlFor={name}>{label}</label>

            <input
                type={type}
                name={name}
                id={name}
                value={valor}
                onChange={onChange}
                onBlur={onBlur}
                readOnly={readonly}
            />

            <small className={estilos.erro} >{erro}</small>
        </div>
    )
}

export default InputForm
