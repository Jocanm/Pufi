export interface Data {
    image: string;
    productImage: string;
    productTitle: string;
    productDescription: string;
}

export const data: Data[] = [
    {
        image: '/assets/products/umbrellas.png',
        productImage: '/assets/products/umbrella.png',
        productTitle: 'Pufi RAIN',
        productDescription: 'Descripción del product. Este es un texto simulado',
    },
    {
        image: '/assets/poof.png',
        productImage: '/assets/products/cojin.png',
        productTitle: 'Pufi PUFF',
        productDescription: 'Descripción del product. Este es un texto simulado',
    },
    {
        image: '/assets/products/empacando.png',
        productImage: '/assets/products/bolsas.png',
        productTitle: 'Pufi CART',
        productDescription: 'Descripción del product. Este es un texto simulado',
    },
    {
        image: '/assets/products/sleeping.png',
        productImage: '/assets/products/pillow.png',
        productTitle: 'Product Title',
        productDescription: 'Descripción del product. Este es un texto simulado',
    },
]