import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./Cart";
import style from './index'
import Navbar from "./Navbar";
import Products from "./Products";
import axios from "axios";

const retriveItems = JSON.parse(localStorage.getItem('items') || '[]')
function App() {
   const [items, setItems] = useState(retriveItems)
   const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=20%27')
            .then(res => {
                setProducts(res.data)
            })
    }, [])
 
  const addProducts = (product) => {
    setItems([...items, product])
  }

  const removeItem = ()=> {
    const removeArr = items.filter(item => item.id !== item.id)
    setItems(removeArr )
}
  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  
  return (
      <>
        <Navbar items={items} />
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Products
            products={products} addProducts={addProducts}/>} />
            <Route
              path="/cart"
              element={<Cart items={items} removeItem={removeItem}  />}
            />
          </Routes>
        </BrowserRouter>

      </>
    )
}

export default App;