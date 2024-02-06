import Link from 'next/link'
import React from 'react'

const NavBar:React.FC=()=> {
  return (
    <ul className='flex flex-row gap-[40px] leading-normal items-start font-normal font-Plus_Jakarta_Sans text-[18px] h-[20px] text-[#171717] '>
    <li className='hover:border-dashed hover:border-black hover:border-b-[2px] mb-[2px] transition-all ease-in duration-100'>
      <Link href='#'>
        Shop Products
      </Link>
    </li>
    <li className='hover:border-dashed hover:border-black hover:border-b-[2px] mb-[2px] transition-all ease-in duration-100'>
      <Link href='#'>
        Artists
      </Link></li>
    <li className='hover:border-dashed hover:border-black hover:border-b-[2px] mb-[2px] transition-all ease-in duration-100'>
      <Link href='#'>
        Themes
      </Link>
    </li>
    <li className='hover:border-dashed hover:border-black hover:border-b-[2px] mb-[2px] transition-all ease-in duration-100'>
      <Link href='#'>
        Bulk Orders
      </Link>
    </li>  <li className='hover:border-dashed hover:border-black hover:border-b-[2px] mb-[2px] transition-all ease-in duration-100'>
      <Link
      className='bg-gradient-to-tr  from-violet-700 via-cyan-600  to-blue-500 text-transparent bg-clip-text'
      href='#'>
        Create StoreFront
      </Link>
    </li>  
    {/* <li>
      <Link href='#'>
        Tumblers
      </Link>
    </li> */}
  </ul>
  )
}

export default NavBar