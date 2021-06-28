import React,{useContext} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {CartContext} from '../context/CartContext';
import {Link} from 'react-router-dom'
export default function NavBar() {
   const {qty}=useContext(CartContext);
   return (
      <nav>
         <ul className="left">
            <li><Link to="/">NepalExpress</Link></li>
         </ul>
         <ul className="right">
            <li className="logo mlr"><Link to="/cart"><FaShoppingCart size={40} /></Link></li>
            <li className="cartCount mlr"><Link to="/">{qty}</Link></li>
         </ul>
      </nav>
   )
}
