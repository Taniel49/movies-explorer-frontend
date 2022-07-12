import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link exact to="/">
                <img src={logo} alt="Лого"/>
            </Link>
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
                <Link to="/signup">
                    <button className="login__register_register-button">Регистрация</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;