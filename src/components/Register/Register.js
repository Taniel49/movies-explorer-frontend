import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <Link exact to="/">
                <img src={logo} alt="Лого"/>
            </Link>
            <h1 className="register__header">Добро пожаловать!</h1>
            <form className="register__form">
                <span className="register__form_text">Имя</span>
                <input className="register__form_input" placeholder={"Виталий"}/>
                <span className="register__form_text">E-mail</span>
                <input className="register__form_input" placeholder={"pochta@yandex.ru"}/>
                <span className="register__form_text">Пароль</span>
                <input className="register__form_input" type="password"/>
                <button className="register__form_submit-button">Зарегестрироваться</button>
            </form>
            <div className="register__login">
                <span className="register__login_text">Уже зарегистрированы?</span>
                <Link to="/signin">
                    <button className="register__login_login-button">Войти</button>
                </Link>
            </div>
        </div>
    );
}

export default Register;