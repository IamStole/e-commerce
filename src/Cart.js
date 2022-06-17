import React from "react"
import {BsFillTrashFill} from 'react-icons/bs'
export default function Cart({items , removeItem}) {
    
    return (
        <>
        <div className="cart">
        <p className="trash" onClick={removeItem}>
                <BsFillTrashFill />Clear CART<BsFillTrashFill />
                </p>
        <div  className="cart-items">
            
            {items.map(item => {
               return ( 
               <div className="--card" key={item.id}>
                   <img src={item.image} alt='' className="cart-image" />
                    <h1>{item.title}</h1>
                    <p >{item.price}$</p>             
               </div> 
               )
            })}
             
        </div>
        </div>
        
        </>
    )
}