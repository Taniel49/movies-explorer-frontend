import React from 'react';

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__header">О проекте</h2>
            <div className="about-project__flex-section">
                <article className="about-project__article">
                    <h3 className="about-project__article_header">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__article_text">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.</p>
                </article>
                <article className="about-project__article">
                    <h3 className="about-project__article_header">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__article_text">У каждого этапа был мягкий и жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about-project__flex-section">
                <div className="about-project__length">
                    <p className="about-project__length_week about-project__length_week_black">1 неделя</p>
                    <p className="about-project__length_project-type">Back-end</p>
                </div>
                <div className="about-project__length">
                    <p className="about-project__length_week about-project__length_week_grey">4 недели</p>
                    <p className="about-project__length_project-type">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;