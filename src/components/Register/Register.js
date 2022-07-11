import React from 'react';
import logo from "../../images/logo.svg";

function Register() {
    return (
        <div className="register">
            <img src={logo} alt="Лого"/>
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
                <button className="register__login_login-button">Войти</button>
            </div>
        </div>
    );
}

export default Register;