import React, { createContext, useState } from 'react'


import camera from '../assets/camera.jpg'
import gopro from '../assets/gopro.jpg'
import headphones from '../assets/headphones.jpg'
import macbook from '../assets/macbook.jpg'
import iphone from '../assets/iphone.jpg'
import router from '../assets/router.jpg'
import samsung from '../assets/samsung.jpg'

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'DSLR', image: camera, price: 250, status: 'hot' },
        { id: 2, name: 'Go pro', image: gopro, price: 1200, status: 'hot' },
        { id: 3, name: 'Head Phones', image: headphones, price: 1000, status: 'new' },
        { id: 4, name: 'mac-book', image: macbook, price: 1200, status: 'hot' },
        { id: 5, name: 'i-phone', image: iphone, price: 500, status: 'hot' },
        { id: 6, name: 'router', image: router, price: 240, status: 'new' },
        { id: 7, name: 'samsung', image: samsung, price: 450, status: 'new' },
    ])
    return (
        <ProductsContext.Provider
            value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductContextProvider;