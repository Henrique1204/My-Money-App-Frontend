import React from "react";
// Importando estilo do componente.
import estilos from "./Auth.module.css";
// Importando componentes da interface.
import InputForm from "../Util/InputForm/InputForm.js";
import Icon from "../Util/Icon.js";
// Importando utilitários do redux.
import { useDispatch } from "react-redux";
// Importando actions do reducer.
import { submit } from "../../store/auth.js";
// Importando configurações da API.
import { LOGIN, SIGNUP } from "../../api.js";
// Importando hooks personalizados.
import useForm from "../../Hooks/useForm.js";

const Auth = () => {
    // Estados globais.
    const dispatch = useDispatch();

    // Estados local.
    const name = useForm("");
    const email = useForm("");
    const password = useForm("");
    const [login, setLogin] = React.useState(true);

    const trocarForm = () => {
        name.setValor("");
        name.setErro("");

        email.setValor("");
        email.setErro("");

        password.setValor("");
        password.setErro("");

        setLogin((state) => !state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.validar && email.validar && password.validar) {
            const body = {
                name: name.valor,
                email: email.valor,
                password: password.valor,
                confirm_password: password.valor
            };

            const { url, options } = (login) ? LOGIN(body) : SIGNUP(body);
    
            dispatch(submit({ url, options }));
        }
    };

    return (
        <section className={`${estilos.sessao} ${(login) ? estilos.login : ""}`}>
            <h1><span>My</span> Money</h1>

            <form className={estilos.form} onSubmit={handleSubmit}>
                <h2>{(login) ? "Login" : "Cadastro"}</h2>

                { !login && <div><InputForm label="Nome:" type="text" name="name" {...name} /></div> }

                <div className={estilos.campo}>
                    <InputForm label="E-mail:" type="text" name="email" {...email} />
                    <Icon nome="envelope" />
                </div>

                <div className={estilos.campo}>
                    <InputForm label="Senha:" type="password" name="password" {...password} />
                    <Icon nome="lock" />
                </div>

                <button className={estilos.btn}>{(login) ? "Entrar" : "Registrar-se"}</button>

                <small onClick={trocarForm}>
                    {(login) ? "Novo usuário? Registre-se agora!" : "Já tem uma conta? Acesse agora!"}
                </small>
            </form>
        </section>
    );
};

export default Auth;
