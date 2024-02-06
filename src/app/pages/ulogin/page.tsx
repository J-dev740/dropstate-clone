// 'use client';
import React from 'react'
import { CiLock } from 'react-icons/ci'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'
import l1 from '../../assets/line1.svg'
import Image from 'next/image'
import ulogin from '../../assets/ulogin.png'

const UserLogin: React.FC = () => {
    return (
        <div className='flex flex-row w-screen h-screen bg-white '>
            <div
                style={{ backgroundImage: `url()` }}
                className=' relative flex w-[60%] h-full bg-cover bg-center bg-no-repeat z-10'>
                    <Image
                    className='flex object-cover object-center w-full h-full '
                    src={ulogin} alt={'login page image'}                    />
                </div>
            <div className=' relative flex w-[40%] h-full flex-col justify-center items-center '>
                <div className='flex w-[52%] h-fit flex-col items-center   '>
                    {/* header */}
                    <div className='flex flex-col h-fit w-full mb-[64px] leading-normal gap-[4px] text-wrap text-[24px] 
                         font-Plus_Jakarta_Sans font-bold text-black text-center  '>
                        Welcome back, Trendsetter
                        <div className='text-[#404040] text-[14px] font-normal font-Plus_Jakarta_Sans '>
                            Login to elevate your wardrobe 
                        </div>
                    </div>
                    {/* signup links  */}
                    {/* <div className='flex w-full flex-row mb-[40px] items-center justify-center '> */}
                        <div className='flex flex-row w-full items-center justify-center mb-[40px]
                         ring-1 ring-black
                         py-[20px] px-[84px] text-[14px] leading-[20px] gap-[8px]  font-Plus_Jakarta_Sans font-bold text-black'>
                            <span className='text-[24px]'>
                                <FcGoogle />
                            </span>
                            <p>Continue with Google</p>
                        </div>


                    {/* </div> */}
                    {/* orbetter yet */}
                    <div className='relative flex w-full items-center justify-center  h-[2px] mb-[40px] bg-[#DFE0E2]'>
                        <div className='flex absolute z-10 bg-white px-[22px] font-medium font-Plus_Jakarta_Sans text-[14px]
                             text-black'>Or better yet...</div>
                    </div>
                    {/* email and password  */}
                    <div className='flex flex-col w-full gap-[16px] items-center h-fit mb-[56px]'>
                        <div className='flex flex-row gap-[12px] w-full bg-[#F5F5F5]  py-[21px] px-[24px] justify-start items-center 
                            text-[14px] font-Plus_Jakarta_Sans font-semibold text-black'>
                            <span><HiOutlineMail /></span>
                            <p>Email</p>
                        </div>
                        <div className='flex flex-row gap-[9px] w-full  justify-start items-center 
                            text-[12px] font-Plus_Jakarta_Sans font-semibold text-black'>
                                <div className='flex  items-center justify-center  bg-white w-full py-[15px] px-[37px] ring-1 ring-black'>Login with OTP</div>
                                <div className='flex items-center justify-center  bg-black w-full text-white py-[15px] px-[20px] ring-1 ring-black '>Login with Password</div>
                        </div>

                    </div>
                    {/* terms and conditions  */}
                    <div
                        className='flex  flex-col flex-wrap w-full  items-center justify-center text-wrap text-center font-Plus_Jakarta_Sans text-[10px] font-normal text-black leading-normal'>
                        <span className='flex flex-col items-center hover:cursor-pointer  '>
                            <span className='flex flex-row '>
                                By  Logging  In, you agree to our <span className='font-bold underline underline-offset-1 px-1 hover:cursor-pointer'>
                                    User Agreement,</span>
                            </span>
                            <span className='flex flex-row'>
                                <span className='font-bold px-1 underline underline-offset-1 hover:cursor-pointer'> Privacy Policy  </span> and <span className=' px-1 hover:cursor-pointer font-bold underline underline-offset-1'>  Terms of Service </span>

                            </span>
                        </span>
                    </div>

                </div>
            <div className='absolute flex bottom-0 right-2'>
            <svg width="248" height="213" viewBox="0 0 248 213" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.598145 242.696C0.598145 242.696 51.1971 237.433 103.992 160.295C156.787 83.1561 153.274 103.753 125.197 168.622C97.1197 233.491 137.041 222.973 179.597 129.176C222.152 35.3793 265.146 4.26485 241.019 81.8612C216.893 159.458 199.385 222.902 243.649 144.536C287.504 66.8722 309.897 1.19629 309.897 1.19629" stroke="#F049FF" strokeWidth="4" strokeMiterlimit="10"/>
</svg>
            </div>
            <div className='absolute flex -top-6   -left-20   '>
            <svg  width="319" height="236" viewBox="0 0 319 236" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33773 223.353C-16.0524 190.381 69.3845 86.5862 123.77 127.612C178.732 169.074 168.772 194.141 149.093 202.575C110.813 218.982 122.745 47.0783 179.039 47.078C213.263 47.078 280.235 195.899 221.819 230.906C160.18 267.844 187.959 -12.1772 317.349 -54.5146" stroke="#F049FF" strokeWidth="5"/>
</svg>

            </div>
            </div>
        </div>
    )
}

export default UserLogin