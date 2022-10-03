import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__bottom'>
                <div>
                    <p className='footer__text'>@2020</p>
                </div>
                <div className='footer__links'>
                    <a className='footer__text'
                       href={'https://practicum.yandex.ru/'}
                       target="_blank"
                       rel="noreferrer">Яндекс.Практикум</a>
                    <a className='footer__text'
                       href={'https://github.com/Taniel49?tab=repositories'}
                       target="_blank"
                       rel="noreferrer">Github</a>
                    <a className='footer__text'
                       href={'https://vk.com/id18140655'}
                       target="_blank"
                       rel="noreferrer">ВКонтакте</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer