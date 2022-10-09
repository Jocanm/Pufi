import React, { useState } from 'react'
import { If } from '../../utilities/If'
import { ShopButton } from '../ShopButton'
import './HeroImage.scss'

type ImagesIndex = 1 | 2 | 3

export const HeroImage = () => {

    const [imageSelected, setImageSelected] = useState<ImagesIndex>(1)

    const changeImage = (index: ImagesIndex) => {
        return () => {
            setImageSelected(index)
        }
    }

    const isSelected = (index: ImagesIndex) => {
        return imageSelected === index
            ? 'active'
            : ''
    }

    return (
        <div className='hero-image__wrapper'>
            <If show={imageSelected === 1}>
                <div className="hero-image__image image_1" />
            </If>
            <If show={imageSelected === 2}>
                <div className="hero-image__image image_2" />
            </If>
            <If show={imageSelected === 3}>
                <div className="hero-image__image image_3" />
            </If>
            <div className="hero-image__content">
                <div>
                    <h1>ESTAR CÓMODO,</h1>
                    <h1>NUNCA FUE TAN FÁCIL.</h1>
                </div>
                <ShopButton />
            </div>
            <div className="hero_image__slide-buttons">
                <div
                    className={`hero_image__slide-button ${isSelected(1)}`}
                    onClick={changeImage(1)} />
                <div
                    className={`hero_image__slide-button ${isSelected(2)}`}
                    onClick={changeImage(2)} />
                <div
                    className={`hero_image__slide-button ${isSelected(3)}`}
                    onClick={changeImage(3)} />
            </div>
        </div>
    )
}
