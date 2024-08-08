import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context'

const Cart = () => {
  const { CartProducts, setCartProducts } = useContext(GlobalContext)
  const [totalPrice, settotalPrice] = useState(0)
  useEffect(() => {
    let totp = 0
    for (let i = 0; i < CartProducts.length; i++) {
      const element = CartProducts[i]
      totp = totp + element.price
      settotalPrice(totp)
    }
  }, [CartProducts])
  return (
    <div className='flex justify-center items-center flex-col'>


      <div className='flex flex-wrap'>
        {
          CartProducts ?
            CartProducts.map((item) => {
              return <div className='w-36 border border-black rounded-lg m-6 text-center flex flex-col items-center justify-center' key={item.id}>
                <img src={item.image} alt="product" />
                <h1 className='truncate w-28'>{item.title}</h1>
                <span>{item.price} $</span>
              </div>
            })
            : "loading"
        }
      </div>

      <div>
        <div>
          <h1>Total price</h1>
          <span>{totalPrice} $</span>
        </div>
        <div className='border border-red-600 w-fit p-6 bg-orange-500 cursor-pointer hover:bg-amber-500 rounded-xl' onClick={() => { setCartProducts([]); settotalPrice(0) }}>
          <h1>Checkout</h1>
        </div>
      </div>
    </div>
  )
}

export default Cart
