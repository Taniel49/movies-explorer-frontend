import React from 'react';
import {useHistory} from 'react-router-dom';

function Profile(props) {
    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [errorsEmail, setErrorsEmail] = React.useState('');
    const [errorsName, setErrorsName] = React.useState('');
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [isValidName, setIsValidName] = React.useState(true);
    const buttonClassName = (
        `register__form_submit-button ${(!isValidEmail || !isValidName) ? 'profile__form_submit-button_inactive' : ''}`
    );
    const nameClassName = (
        `profile__form_input ${!isValidName ? 'register__form_input-invalid' : ''}`
    );
    const emailClassName = (
        `profile__form_input ${!isValidEmail ? 'register__form_input-invalid' : ''}`
    );

    function handleEmailChange(e) {
        setIsValidEmail(e.target.checkValidity());
        !isValidEmail ? setErrorsEmail(e.target.validationMessage) : setErrorsEmail('');
        setEmail(e.target.value);
    }

    function handleNameChange(e) {
        setIsValidName(e.target.checkValidity());
        !isValidName ? setErrorsName(e.target.validationMessage) : setErrorsName('');
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(name, email)
    }

    function handleLogout() {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <section className="profile">
            <h1 className="profile__header">{`Привет, ${props.currentUser.name}`}</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form_section">
                    <span className="profile__form_input-name">Имя</span>
                    <input className={nameClassName} placeholder={`${props.currentUser.name}`}
                           onChange={handleNameChange}  minLength={2}/>
                    {!isValidName ? <span className="form_error">{`${errorsName}`}</span> : <div></div>}
                </div>
                <div className="profile__form_section">
                    <span className="profile__form_input-name">E-mail</span>
                    <input className={emailClassName} placeholder={`${props.currentUser.email}`}
                           onChange={handleEmailChange}/>
                    {isValidEmail ? <span className="form_error">{`${errorsEmail}`}</span> : <div></div>}
                </div>
                <button className={buttonClassName}>Редактировать</button>
            </form>
            <button className="profile__logout-button" onClick={handleLogout}>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;