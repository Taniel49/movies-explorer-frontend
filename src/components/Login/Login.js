import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorsPassword, setErrorsPassword] = React.useState('');
    const [errorsEmail, setErrorsEmail] = React.useState('');
    const [isValidPassword, setIsValidPassword] = React.useState(true);
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const buttonClassName = (
        `login__form_submit-button ${(!isValidPassword || !isValidEmail) ? 'register__form_submit-button_inactive' : ''}`
    );
    const emailClassName = (
        `login__form_input ${!isValidEmail ? 'register__form_input-invalid' : ''}`
    );
    const passwordClassName = (
        `login__form_input ${!isValidPassword ? 'register__form_input-invalid' : ''}`
    );

    function checkIsValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function handleEmailChange(e) {
        if (!checkIsValidEmail(e.target.value)) {
            setIsValidEmail(false);
            setErrorsEmail('Введите корректный email');
        } else {
            setIsValidEmail(true);
            setErrorsEmail('');
        }
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setIsValidPassword(e.target.checkValidity());
        !isValidPassword ? setErrorsPassword(e.target.validationMessage) : setErrorsPassword('');
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
                <input className={emailClassName}
                       placeholder={"pochta@yandex.ru"}
                       onChange={handleEmailChange}/>
                {!isValidEmail ? <span className="form_error">{`${errorsEmail}`}</span> : <div></div>}
                <span className="login__form_text">Пароль</span>
                <input className={passwordClassName} type="password" onChange={handlePasswordChange}/>
                {!isValidPassword ? <span className="form_error">{`${errorsPassword}`}</span> : <div></div>}
                <button className={buttonClassName}>Войти</button>
            </form>
            <div className="login__register">
                <span className="login__register_text">Ещё не зарегистрированы?</span>
                <Link to="/signup">
                    <button className="login__register_register-button">Регистрация</button>
                </Link>
            </div>
            <InfoTooltip isOpen={props.isOpen}
                         onClose={props.onClose}
                         caption={props.caption}/>
        </section>
    );
}

export default Login;