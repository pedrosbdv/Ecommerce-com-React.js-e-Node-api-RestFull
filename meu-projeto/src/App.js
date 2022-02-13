
import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'

import data from './components/roupas/Itens'


import Header from './components/navbar/Header'
import Home from './pages/Home'
import Avaliations from './pages/Avaliations'

import './App.css'


function App()
{

  const {products} = data;
  const [cartItems, setCartItems] = useState([]);



  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist)
    {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
          )
        );
    }
    else
    {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1)
    {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }
    else
    {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
          )
        );
    }
  }

  return (

      <Router>
        <Header onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<Home onAdd={onAdd} products={products}/>} />
          <Route path="/avaliations" element={<Avaliations/>} />
        </Routes>
      </Router>

  );

}

export default App;
