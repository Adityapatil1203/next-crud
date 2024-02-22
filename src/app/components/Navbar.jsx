
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center bg-slate-800 px-8 py-6 '>
    <Link href={'/'} className=' bg-white p-3 '> ADCoding </Link>
    <Link href={'/add'} className=' bg-white p-3 ' > Add </Link>
   </nav>
  )
}

export default Navbar