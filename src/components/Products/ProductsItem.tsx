import { Data } from '../../data'
import { ShopButton } from '../ShopButton'

interface ProductsItemProps {
    item: Data
}

export const ProductsItem = ({ item }: ProductsItemProps) => {
    return (
        <div className='products__item' id={item.productTitle}>
            <div
                className="products__item-image"
                style={{ backgroundImage: `url(${item.image})` }}
            >
                <ShopButton />
            </div>
            <div className="products__item-description">
                <img src={item.productImage} alt={item.productTitle} />
                <h3>{item.productTitle}</h3>
                <div className="underline" />
                <p>{item.productDescription}</p>
                <div className="more-info">
                    <span>{">"}</span>
                    <span>VER MAS</span>
                </div>
                <div className="arrow" />
            </div>
        </div>
    )
}
