import React from 'react';

function Footer() {
    return (
        <div>
            <div className='footer'>
                <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__bottom'>
                    <div>
                        <p className='footer__text'>@2020</p>
                    </div>
                    <div className='footer__links'>
                        <p className='footer__text'>Яндекс.Практикум</p>
                        <p className='footer__text'>Github</p>
                        <p className='footer__text'>Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer