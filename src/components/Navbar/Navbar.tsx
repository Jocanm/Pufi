import React from 'react'
import './Navbar.scss'

export const Navbar = () => {

    const scrollToElement = (element: string) => {
        return () => {
            const el = document.getElementById(element)
            el?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='navbar__wrapper'>
            <img src="/assets/Pufi.png" alt="pufi" />
            <div className="navbar__section">
                <div className="navbar__section-item" onClick={scrollToElement('Pufi RAIN')}>
                    <i className="fa-solid fa-umbrella"></i>
                    <p>PUFI RAIN</p>
                </div>
                <div className="navbar__section-item" onClick={scrollToElement('Pufi PUFF')}>
                    <i className="fa-solid fa-couch"></i>
                    <p>PUFI PUFF</p>
                </div>
                <div className="navbar__section-item" onClick={scrollToElement('Pufi CART')}>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <p>PUFI CART</p>
                </div>
                <div className="navbar__section-item" onClick={scrollToElement('Pufi NAP')}>
                    <i className="fa-solid fa-mattress-pillow"></i>
                    <p>PUFI NAP</p>
                </div>
            </div>
            <div className="navbar__authentication">
                <div className="navbar__authentication-item">
                    <p>MI CUENTA</p>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="navbar__authentication-item">
                    <p>MI COMPRA</p>
                </div>
            </div>
        </div>
    )
}