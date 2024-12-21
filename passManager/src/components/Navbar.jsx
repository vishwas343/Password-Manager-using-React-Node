import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between text-white items-center bg-black px-6 py-2'>
      <div className='logo font-semibold text-xl '>
        <span className='text-green-600'>&lt;</span>Pass
        <span className='text-green-600'>OP/&gt;</span>
      </div>
      <div>
        <ul className='flex gap-4 font-bold text-green-300'>
            <li><a className='hover:font-extrabold text-sm' href="/">HOME</a></li>
            <li><a className='hover:font-extrabold text-sm' href="/about">ABOUT</a></li>
            <li><a className='hover:font-extrabold text-sm' href="/contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
