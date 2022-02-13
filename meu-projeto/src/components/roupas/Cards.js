import './Cards.css'
import './Filter.css'
import React, {useState} from 'react'

function Cards (props)
{
  const {product, onAdd} = props;


  return(
    <>
      <div className='card'>
        <img src={product.img}  className='card_img'/>
        <div className='card_body'>
          <h2 className='card_title'>{product.title}</h2>
          <p className='card_description'>{product.description}</p>
          <h3 className='card_price'>{product.price}</h3>
          <button onClick={() => onAdd(product)} className='card_btn'>Adicionar ao carrinho</button>
        </div>
      </div>


    

   </>
  )
}

export default Cards
