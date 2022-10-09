import React from 'react'
import './Footer.scss'

export const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <div className='footer__section'>
                <img src="/assets/pufi_black.png" alt="pufi" />
            </div>
            <div className='footer__section'>
                <span>PUFI RAIN</span>
                <span>PUFI PUFF</span>
                <span>PUFI CART</span>
                <span>PUFI NAP</span>
            </div>
            <div className='footer__section'>
                <span>CONTACTO</span>
                <span>AYUDA</span>
                <span>COMO COMPRAR</span>
                <span>TÉRMINOS Y CONDICIONES</span>
            </div>
            <div className='footer__section'>
                <span>COMPRA 100% SEGURA</span>
                <div className='icon-container'>
                    <i className="fa-solid fa-qrcode"></i>
                    <i className="fa-solid fa-shield-halved"></i>
                </div>
            </div>
            <div className='footer__section social-media'>
                <span>SÍGUENOS EN</span>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    )
}
