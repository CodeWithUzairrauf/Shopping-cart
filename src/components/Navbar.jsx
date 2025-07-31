import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className=' flex  justify-between bg-blue-400  m-auto p-4 list-none text-white'>
    <div className="logo bg-blue-400 text-2xl max-w-full h-10">Cart</div>
      <nav className='flex gap-6 text-lg mx-4'> 
        <Link to="/" className='hover:font-bold transition-all'> <li>Home</li></Link>
        <Link to="/cart" className='hover:font-bold transition-all'><li>Cart</li></Link>
      </nav>
    </div>
  )
}

export default navbar
