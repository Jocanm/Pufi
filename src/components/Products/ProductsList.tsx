import React from 'react'
import { data } from '../../data'
import { For } from '../../utilities/For'
import './Products.scss'
import { ProductsItem } from './ProductsItem'

export const ProductsList = () => {
    return (
        <div className='products__list'>
            <For each={data} render={(data) => (
                <ProductsItem
                    item={data}
                />
            )} />
        </div>
    )
}
