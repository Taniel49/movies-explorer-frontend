import React from 'react';
import Photo from '../../images/student_photo.png'

function Portfolio() {
    return (
        <section className="portfolio" id="student">
            <h2 className="portfolio__header">Студент</h2>
            <div className="portfolio__student-info">
                <article className="portfolio__student-info_bio">
                    <p className="portfolio__student-info_bio_name">Виталий</p>
                    <p className="portfolio__student-info_bio_prof">Фронтенд-разработчик, 30 лет</p>
                    <p className="portfolio__student-info_bio_description">Я родился и живу в Саратове, закончил
                        факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
                        в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="portfolio__student-info_bio_links">
                        <button className="portfolio__student-info_bio_button">Facebook</button>
                        <button className="portfolio__student-info_bio_button">Github</button>
                    </div>
                </article>
                <img className="portfolio__student-info_photo" src={Photo} alt="Фото студента"/>
            </div>
            <h3 className="portfolio__small-header">Портфолио</h3>
            <ul className="portfolio__links-list">
                <li className="portfolio__links">
                    <p className="portfolio__links_text">Статичный сайт</p>
                    <a href="*" target="_blank">
                        <button className="portfolio__links_link"></button>
                    </a>
                </li>
                <li className="portfolio__links">
                    <p className="portfolio__links_text">Адаптивный сайт</p>
                    <a href="*" target="_blank">
                        <button className="portfolio__links_link"></button>
                    </a>
                </li>
                <li className="portfolio__links">
                    <p className="portfolio__links_text">Одностраничное приложение</p>
                    <a href="*" target="_blank">
                        <button className="portfolio__links_link"></button>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;