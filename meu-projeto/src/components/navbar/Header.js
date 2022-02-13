import './Header.css'
import React, {useState} from 'react'


import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header (props)
{
  const [showNav, setShowNav] = useState(false);
  const {cartItems, onAdd, onRemove} = props;
  const quantidade = cartItems.reduce((a,c) => a + c.qty, 0);
    return(
      <>
        <header>
          <nav>
            <ul className='nav-list'>
              <Link to="/"><li><span>Home</span></li></Link>
              <Link to="/avaliations"><li><span>Avaliações</span></li></Link>
            </ul>
            <ul className='cart-buy'>
              <li><FaShoppingCart onClick = {() => setShowNav(!showNav)}/>
                <div className='cart_count'>{quantidade}</div>
              </li>
            </ul>
          </nav>
        </header>
         {showNav && <SideBar quantidade={quantidade} onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>}
      </>
  )
}



function SideBar ({cartItems, onAdd, onRemove, quantidade})
{

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const totalPrice = itemPrice + taxPrice;
  return(
    <div className='sidebar active'>
      <ul>
        <li className='title_sidebar'><a>Shopping Cart</a></li>
        <div className='cart_body'>
          <div className='cart_description'>
            {cartItems.length === 0 && <span className='teste'>Nenhum produto no seu carrinho</span>}
            {cartItems.map((item) => (
              <div key={item.id} className='row'>
                <div className='col-2'>{item.cart}</div>
                <div className='col-2'>
                <button onClick={() => onAdd(item)} className='add'>+</button>
                <button onClick={() => onRemove(item)} className='remove'>-</button>

                </div><br/>
                <div className='col-2'>{item.qty}</div>
                <div className='col-2 text-right'>R${item.price.toFixed(2)}</div>
              </div>
            ))}
            {cartItems.length !== 0 && (
              <>
                <br/>
                <hr/>
                <div className='row'>
                  <div className='col-2'>Quantidade</div>
                  <div className='text-right'>{quantidade}</div>
                </div>
                <div className='row'>
                  <div className='col-2'>Preço dos Itens</div>
                  <div className='text-right'>R${itemPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                  <div className='col-2'>Taxa</div>
                  <div className='text-right'>R${taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                  <div className='col-2'><strong>Preço Total</strong></div>
                  <div className='text-right'><strong>R${totalPrice.toFixed(2)}</strong></div>
                </div>
              </>
            )}
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Header;
