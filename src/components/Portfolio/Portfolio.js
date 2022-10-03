import React from 'react';
import Photo from '../../images/student_photo.jpg'

function Portfolio() {
    return (
        <section className="portfolio" id="student">
            <h2 className="portfolio__header">Студент</h2>
            <div className="portfolio__student-info">
                <article className="portfolio__student-info_bio">
                    <p className="portfolio__student-info_bio_name">Михаил Бутырский</p>
                    <p className="portfolio__student-info_bio_prof">Фронтенд-разработчик, 30 лет</p>
                    <p className="portfolio__student-info_bio_description">Я родился в Чите, живу и работаю в
                        Санкт-Петербурге. Закончил
                        Энергофакультет ЗабГУ, учился в CVUT в Праге. Работал по специальности, затем преподавал
                        английский язык. С 2020 года начал изучать веб-разработку. Прошел обучение в Яндекс.Практикум и
                        теперь стремлюсь применять новые знания на практике.</p>
                    <div className="portfolio__student-info_bio_links">
                        <a className="portfolio__student-info_bio_button"
                           href={'https://vk.com/id18140655'}
                           target="_blank"
                           rel="noreferrer">ВКонтакте</a>
                        <a className="portfolio__student-info_bio_button"
                           href={'https://github.com/Taniel49?tab=repositories'}
                           target="_blank"
                           rel="noreferrer">Github</a>
                    </div>
                </article>
                <img className="portfolio__student-info_photo" src={Photo} alt="Фото студента"/>
            </div>
            <h3 className="portfolio__small-header">Портфолио</h3>
            <ul className="portfolio__links-list">
                <li className="portfolio__links">
                    <p className="portfolio__links_text">Статичный сайт</p>
                    <a href="https://how-to-learn.onrender.com/" target="_blank" rel="noreferrer">
                        <button className="portfolio__links_link"></button>
                    </a>
                </li>
                <li className="portfolio__links">
                    <p className="portfolio__links_text">Адаптивный сайт</p>
                    <a href="https://russian-travel.onrender.com" target="_blank" rel="noreferrer">
                        <button className="portfolio__links_link"></button>
                    </a>
                </li>
                <li className="portfolio__links">
                    <p className="portfolio__links_text">Одностраничное приложение</p>
                    <a href="*" target="_blank" rel="noreferrer">
                        <button className="portfolio__links_link"></button>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;