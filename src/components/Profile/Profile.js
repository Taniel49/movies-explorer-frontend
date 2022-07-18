import React from 'react';
import {useHistory} from 'react-router-dom';

function Profile(props) {
    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(name, email)
    }

    function handleLogout(){
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <section className="profile">
            <h1 className="profile__header">{`Привет, ${props.currentUser.name}`}</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form_section">
                    <span className="profile__form_input-name">Имя</span>
                    <input className="profile__form_input" placeholder={`${props.currentUser.name}`}
                           onChange={handleNameChange}/>
                </div>
                <div className="profile__form_section">
                    <span className="profile__form_input-name">E-mail</span>
                    <input className="profile__form_input" placeholder={`${props.currentUser.email}`}
                           onChange={handleEmailChange}/>
                </div>
                <button className="profile__form_submit-button">Редактировать</button>
            </form>
            <button className="profile__logout-button" onClick={handleLogout}>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;