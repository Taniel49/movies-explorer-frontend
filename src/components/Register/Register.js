import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Register(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorsPassword, setErrorsPassword] = React.useState('');
    const [errorsEmail, setErrorsEmail] = React.useState('');
    const [errorsName, setErrorsName] = React.useState('');
    const [isValidPassword, setIsValidPassword] = React.useState(true);
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [isValidName, setIsValidName] = React.useState(true);
    const buttonClassName = (
        `register__form_submit-button ${ (!isValidPassword || !isValidEmail || !isValidName) ? 'register__form_submit-button_inactive' : ''}`
    );
    const nameClassName = (
        `register__form_input ${ !isValidName ? 'register__form_input-invalid' : ''}`
    );
    const emailClassName = (
        `register__form_input ${ !isValidEmail ? 'register__form_input-invalid' : ''}`
    );
    const passwordClassName = (
        `register__form_input ${ !isValidPassword ? 'register__form_input-invalid' : ''}`
    );


    function handleEmailChange(e) {
        setIsValidEmail(e.target.checkValidity());
        !isValidEmail ? setErrorsEmail(e.target.validationMessage) : setErrorsEmail('');
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setIsValidPassword(e.target.checkValidity());
        !isValidPassword ? setErrorsPassword(e.target.validationMessage) : setErrorsPassword('');
        setPassword(e.target.value);
    }

    function handleNameChange(e) {
        setIsValidName(e.target.checkValidity());
        !isValidName ? setErrorsName(e.target.validationMessage) : setErrorsName('');
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
                <input className={nameClassName} placeholder={"Виталий"} onChange={handleNameChange}/>
                {isValidName ? <span className="form_error">{`${errorsName}`}</span> : <div></div>}
                <span className="register__form_text">E-mail</span>
                <input className={emailClassName} placeholder={"pochta@yandex.ru"} onChange={handleEmailChange}/>
                {isValidEmail ? <span className="form_error">{`${errorsEmail}`}</span> : <div></div>}
                <span className="register__form_text">Пароль</span>
                <input className={passwordClassName} type="password" onChange={handlePasswordChange}/>
                {isValidPassword ? <span className="form_error">{`${errorsPassword}`}</span> : <div></div>}
                <button className={ buttonClassName }>Зарегестрироваться</button>
            </form>
            <div className="register__login">
                <span className="register__login_text">Уже зарегистрированы?</span>
                <Link to="/signin">
                    <button className="register__login_login-button">Войти</button>
                </Link>
            </div>
            <InfoTooltip isOpen={props.isOpen}
                         onClose={props.onClose}
                         caption={props.caption}/>
        </section>
    );
}

export default Register;