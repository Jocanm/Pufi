import { data } from '../../data'
import { For } from '../../utilities/For'
import './InfoSection.scss'
import React from 'react';

const images = [
    "/assets/playa_2.png",
    ...data.map((item) => item.image),
    "/assets/playa_3.png",
]

export const InfoSection = () => {
    return (
        <div className='info-section__wrapper'>
            <div className="info-section__instagram">
                <p className='section-title'>INSTAGRAM</p>
                <h3 className='section-body'>#ESPUFI</h3>
            </div>
            <div className="info-section__images">
                <For each={images} render={image => (
                    <img src={image} alt="info-section" />
                )} />
            </div>
            <div className="info-section__news-letter">
                <p className='section-title'>NEWSLETTER</p>
                <h3 className='section-body'>SUSCRIBETE</h3>
                <h5>Y entérate de todas las novedades</h5>
                <form
                    className="email-input"
                    method="POST"
                    action="https://formspree.io/f/mpznlwye"
                >
                    <input
                        type="email"
                        placeholder="Ingresa tu email"
                        name="email"
                        required
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        title='Ingrese un email valido'
                    />
                    <button>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
