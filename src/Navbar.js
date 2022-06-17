import React from "react";
import {GiShoppingCart} from "react-icons/gi"


export default function Navbar({items}) {
    return (
        <div className="navbar">
            <a href="/" className="home">E-COMMERCE</a>
            <a href="/cart" className="cart-btn">
                <GiShoppingCart/>
                {items.length === 0 ? "" :<span>{items.length}</span>}
                </a>
         </div>
    )
}