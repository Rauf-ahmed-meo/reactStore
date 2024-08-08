import React from 'react'
import { GlobalContext } from '../Context'
import { useContext, useState } from 'react'
const Home = () => {
  const { products, CartProducts, addToCart } = useContext(GlobalContext)
  return (
    <div>
      <div className='flex flex-wrap'>
        {
          products ?
            products.map((item) => {
              return <div className='w-36 border border-black rounded-lg m-6 text-center flex flex-col items-center justify-center' key={item.id}>
                <img src={item.image} alt="product" />
                <h1 className='truncate w-28'>{item.title}</h1>
                <span>{item.price} $</span>
                <button className='border-black border bg-orange-500' onClick={() => { addToCart(item.id) }}>
                  {CartProducts.find(obj => obj.id === item.id) ? <div>remove from cart</div> : <div>Add to cart</div>}
                </button>
              </div>
            })
            : "loading"
        }
      </div>
    </div>
  )
}

export default Home
