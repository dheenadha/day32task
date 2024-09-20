import React, { useState } from 'react'
import { Products } from '../utils/Products'
import CardComponent from './CardComponent'

const MUITest = () => {
    const [products,setProducts] = useState(Products)
  return (
    <>
        <div className="cardstyle">
            {products.map((e)=><CardComponent title={e.title} price={e.price} rating={e.rating} category={e.category} brand={e.brand} desc={e.description} />)}
        </div>
    
    </>
  )
}

export default MUITest