import React,{useContext} from 'react'
import '../../src/App.css'
import {CartContext} from '../context/CartContext';
export default function Product({ product }) {
    const {dispatch}=useContext(CartContext);
    return (
        <div className="product">
            <div className="status">
                {product.status==='hot'?<p>Hot</p>:<p>New</p>}
            </div>
            <div className="product-image">
                <img src={product.image} alt="product's image" />
            </div>
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>${product.price}.00</p>
                <p>{product.status}</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic atque magni harum veritatis a dolore inventore, voluptate obcaecati ut ea at perspiciatis? Eum qui illum laborum beatae molestiae optio?</p>
            </div>
            <div className="add-to-cart" onClick={()=>dispatch({type:'add-to-cart',id:product.id,product})}>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}
