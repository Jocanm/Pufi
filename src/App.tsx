import React from 'react'
import './styles/global.scss'
import './App.styles.scss'
import { HeroImage } from './components/HeroImage'
import { Navbar } from './components/Navbar'
import { ProductsList } from './components/Products'

const App = () => {
    return (
        <div className='page-wrapper'>
            <Navbar />
            <HeroImage />
            <ProductsList />
        </div>
    )
}

export default App