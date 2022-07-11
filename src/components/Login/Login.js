import React from 'react';
import logo from "../../images/logo.svg";

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="Лого"/>
            <h1 className="login__header">Рады видеть!</h1>
            <form className="login__form">
                <span className="login__form_text">E-mail</span>
                <input className="login__form_input" placeholder={"pochta@yandex.ru"}/>
                <span className="login__form_text">Пароль</span>
                <input className="login__form_input" type="password"/>
                <button className="login__form_submit-button">Войти</button>
            </form>
            <div className="login__register">
                <span className="login__register_text">Ещё не зарегистрированы?</span>
                <button className="login__register_register-button">Регистрация</button>
            </div>
        </div>
    );
}

export default Login;