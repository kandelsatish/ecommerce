import React, { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import Banner from './Banner';
import Product from './Product'
export default function Products(props) {
    const {products} = useContext(ProductsContext);
    return (
        <div className="products container">
            <Banner/>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}
