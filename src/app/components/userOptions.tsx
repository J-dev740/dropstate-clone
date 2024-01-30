import React from 'react'
import Link from 'next/link'
import { IoBagOutline } from "react-icons/io5";
const UserOpt: React.FC = () => {
    return (
        <div className='flex mr-[66px]'>
            <ul className='flex flex-row gap-[20px] items-center justify-center  font-medium text-[16px] text-[#171717] '>
                <li>
                    <Link href='#'>
                    TrackOrder
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        Login
                    </Link></li>
                <li 
                    >
                    <Link 
                    href='#'>
                        <div className='relative flex object-center object-contain scale-110'>
                    <IoBagOutline /> 
                    <div className='absolute flex -right-[2px] -bottom-[2px] items-center justify-center text-center text-[4px] w-[10px] h-[10px] rounded-full bg-black text-white '>2</div>   
                        </div>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default UserOpt