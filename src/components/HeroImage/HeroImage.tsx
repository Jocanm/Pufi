import React from 'react'
import { ShopButton } from '../ShopButton'
import './HeroImage.scss'

export const HeroImage = () => {
    return (
        <div className='hero-image__wrapper'>
            <div className="hero-image__image image_1"></div>
            <div className="hero-image__content">
                <div>
                    <h1>ESTAR CÓMODO,</h1>
                    <h1>NUNCA FUE TAN FÁCIL.</h1>
                </div>
                <ShopButton />
            </div>
            <div className="hero_image__slide-buttons">
                <div className="hero_image__slide-button" />
                <div className="hero_image__slide-button" />
                <div className="hero_image__slide-button" />
            </div>
        </div>
    )
}
