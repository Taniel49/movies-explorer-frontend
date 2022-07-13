import React from 'react';

function Profile() {
    return (
            <section className="profile">
                <h1 className="profile__header">Привет, Виталий!</h1>
                <form className="profile__form">
                    <div className="profile__form_section">
                        <span className="profile__form_input-name">Имя</span>
                        <input className="profile__form_input" placeholder="Виталий"/>
                    </div>
                    <div className="profile__form_section">
                        <span className="profile__form_input-name">E-mail</span>
                        <input className="profile__form_input" placeholder="pochta@yandex.ru"/>
                    </div>
                    <button className="profile__form_submit-button">Редактировать</button>
                </form>
                <button className="profile__logout-button">Выйти из аккаунта</button>
            </section>
    );
}

export default Profile;