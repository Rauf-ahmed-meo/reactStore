import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <ul className='border flex justify-around items-center'>
      <h1 className='text-purple-800 font-serif text-2xl'>React Store</h1>
      <Link to={"/"} className='border border-black p-3 hover:bg-slate-500 rounded-md'>
        Home
      </Link>
      <Link to={"/cart"} className='border border-black p-3 hover:bg-slate-500 rounded-md'>
        Cart
      </Link>
    </ul>
  )
}

export default Navbar
