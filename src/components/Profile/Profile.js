import React from 'react';
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [errorsEmail, setErrorsEmail] = React.useState('');
    const [errorsName, setErrorsName] = React.useState('');
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [isValidName, setIsValidName] = React.useState(true);
    const [submitButtonClass, setSubmitButtonClass] = React.useState("profile__form_submit-button profile__form_submit-button_inactive");

    const nameClassName = (
        `profile__form_input ${!isValidName ? 'register__form_input-invalid' : ''}`
    );
    const emailClassName = (
        `profile__form_input ${!isValidEmail ? 'register__form_input-invalid' : ''}`
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
        if (isValidName && isValidEmail) {
            setSubmitButtonClass("profile__form_submit-button")
        }
        setEmail(e.target.value);
    }

    function handleNameChange(e) {
        setIsValidName(e.target.checkValidity());
        !isValidName ? setErrorsName('Введите корректное имя') : setErrorsName('');
        if (isValidName && isValidEmail) {
            setSubmitButtonClass("profile__form_submit-button")
        }
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(name, email)
    }

    return (
        <section className="profile">
            <h1 className="profile__header">{`Привет, ${currentUser.name}`}</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form_section">
                    <span className="profile__form_input-name">Имя</span>
                    <input className={nameClassName}
                           defaultValue={`${currentUser.name}`}
                           onChange={handleNameChange} minLength={2} maxLength={30}/>
                    {!isValidName ? <span className="form_error">{`${errorsName}`}</span> : <div></div>}
                </div>
                <div className="profile__form_section">
                    <span className="profile__form_input-name">E-mail</span>
                    <input className={emailClassName}
                           defaultValue={`${currentUser.email}`}
                           onChange={handleEmailChange}/>
                    {!isValidEmail ? <span className="form_error">{`${errorsEmail}`}</span> : <div></div>}
                </div>
                <button className={submitButtonClass}>Редактировать</button>
            </form>
            <button className="profile__logout-button" onClick={props.handleLogout}>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;