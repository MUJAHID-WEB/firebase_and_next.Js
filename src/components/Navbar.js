import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center"></div>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link href={'/'}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    <Link href={'/login'}>
                        <li className='cursor-pointer'>Login</li>
                    </Link>
                    <Link href={'/signup'}>
                        <li className='cursor-pointer'>Signup</li>
                    </Link>
                </ul>
            </div>
        </div>
  )
}

export default Navbar