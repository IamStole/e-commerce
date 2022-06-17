import React from "react";



export default function Products({addProducts, products}) {
    

    
    return (
        <>
            <div className="cards-list">
                {products.map((product) => {
                    return (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt='' className="card--image" />
                            <h1>{product.title}</h1>
                            <div className="price-btn">
                                <p className="card--price">{product.price}$</p>
                                
                                    <button onClick={() => addProducts(product)}className="add-btn">Add</button> 
                                    
                            </div>
                        </div>)

                })}
            </div>
        </>
    );
}