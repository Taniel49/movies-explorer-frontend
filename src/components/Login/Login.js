import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onLogin(email, password);
    }

    return (
        <section className="login">
            <Link to="/">
                <img src={logo} alt="Лого"/>
            </Link>
            <h1 className="login__header">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <span className="login__form_text">E-mail</span>
                <input className="login__form_input" placeholder={"pochta@yandex.ru"} onChange={handleEmailChange}/>
                <span className="login__form_text">Пароль</span>
                <input className="login__form_input" type="password" onChange={handlePasswordChange}/>
                <button className="login__form_submit-button">Войти</button>
            </form>
            <div className="login__register">
                <span className="login__register_text">Ещё не зарегистрированы?</span>
                <Link to="/signup">
                    <button className="login__register_register-button">Регистрация</button>
                </Link>
            </div>
        </section>
    );
}

export default Login;