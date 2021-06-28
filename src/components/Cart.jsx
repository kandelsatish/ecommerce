import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiTwotoneDelete } from "react-icons/ai";
import StripeCheckOut from 'react-stripe-checkout'
export default function Cart() {
    const { shoppingCart, totalAmount, qty, dispatch } = useContext(CartContext);
    const handelToken = (token) => {
        console.log(token);
        window.location.reload();
    }
    return (
        <div className="cart-container">
            <div className="cart-details">
                {shoppingCart.length > 0
                    ? shoppingCart.map((cartItem) => {
                        return (
                            <div className="cart-item" key={cartItem.id}>
                                <span className="cart-item-image"><img src={cartItem.image} alt="Not Fount" /></span>
                                <span className="cart-item-name">{cartItem.name}</span>
                                <span className="add-qty-remove">
                                <span className="cart-item-add" ><AiOutlinePlusCircle size={25} color={'green'} onClick={() => dispatch({ type: 'add', id: cartItem.id, cartItem })} /></span>
                                <span className="cart-item-quantity" >{cartItem.qty}</span>
                                <span className="cart-item-remove"><AiOutlineMinusCircle size={25} color={'red'} onClick={() => dispatch({ type: 'remove', id: cartItem.id, cartItem })} /></span>
                                </span>
                                <span className="cart-item-price">{cartItem.price * cartItem.qty}</span>
                                <span className="cart-item-delete"><AiTwotoneDelete size={25} color={'red'} onClick={() => dispatch({ type: 'delete', id: cartItem.id, cartItem })} /></span>
                            </div>
                        )
                    })
                    : <div className="empty-message"><p>No items to show!</p></div>
                }
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summery">
                <div className="summery">
                    <h3>Cart Summery</h3>
                    <div className="total-item">
                        <div className=" font-bold">Total Items</div>
                        <div className="font-bold total">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="font-bold">Totoal Price</div>
                        <div className="total font-bold ">${totalAmount}.00</div>
                    </div>
                    <div className="stripe-section">
                        <StripeCheckOut
                            stripeKey="pk_test_51J7LbpIB4PTDJpLmvu7Ba39gg54vBiPc7NQISuih7bc1Si48tfyohCRETZVO1VDvbKJy8O1ct9D0vZ99MoyULkZI004SqaDP8D"
                            token={handelToken}
                            billingAddress
                            shippingAddress
                            amount={totalAmount * 100}
                            name="Nepal Express"
                        >
                        </StripeCheckOut>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}
