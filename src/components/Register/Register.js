import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Register(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onRegister(email, password, name);
    }

    return (
        <section className="register">
            <Link to="/">
                <img src={logo} alt="Лого"/>
            </Link>
            <h1 className="register__header">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={handleSubmit}>
                <span className="register__form_text">Имя</span>
                <input className="register__form_input" placeholder={"Виталий"} onChange={handleNameChange}/>
                <span className="register__form_text">E-mail</span>
                <input className="register__form_input" placeholder={"pochta@yandex.ru"} onChange={handleEmailChange}/>
                <span className="register__form_text">Пароль</span>
                <input className="register__form_input" type="password" onChange={handlePasswordChange}/>
                <button className="register__form_submit-button">Зарегестрироваться</button>
            </form>
            <div className="register__login">
                <span className="register__login_text">Уже зарегистрированы?</span>
                <Link to="/signin">
                    <button className="register__login_login-button">Войти</button>
                </Link>
            </div>
        </section>
    );
}

export default Register;