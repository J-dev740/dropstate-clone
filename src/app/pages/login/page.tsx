import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FcDribbble } from "react-icons/fc";
import { FaBehanceSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";

interface props {

}
const Login: React.FC<props> = () => {
    return (
        <div className=' flex flex-row gap-[6px] w-screen min-h-screen bg-black h-screen '>
            <div className='flex flex-col gap-[6px] w-[30%] h-full'>
                <div 
                style={{backgroundImage:`url(https://indiaartfair.in/app/uploads/2023/01/Nikhil-Chopra.-Blackening-IV-2012.-Courtesy-of-the-artist..jpeg)`}}
                className='flex h-[45%] w-full bg-cover bg-center bg-no-repeat '></div>
                <div
                style={{backgroundImage:`url(https://littleart.club/wp-content/uploads/2023/07/Contemporary-Art-Forms-Shaping-the-Visual-Landscape-of-Todays-Society-1.jpg)`}}
                 className='flex h-[55%] w-full bg-cover bg-center bg-no-repeat '></div>
            </div>
            <div className='flex flex-col gap-[6px] w-[40%] h-full'>
                <div className='flex h-[20%] gap-[6px] w-full flex-row '>
                    <div 
                    style={{backgroundImage:`url(https://streetartcities.com/media/b/b3ecf9c1-dbcc-4f94-8a5b-50e9376ccbb7/512.jpg)`}}
                    className='flex w-1/2 h-full bg-cover bg-center bg-no-repeat '></div>
                    <div
                    style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKMPpgvQx22LP18VUQmRtfDr2eCtpEdCSzg&usqp=CAU)`}}
                     className='flex w-1/2 h-full bg-cover bg-center bg-no-repeat '></div>

                </div>
                <div className='flex h-[60%] w-full bg-white items-center justify-center '>
                    <div className='flex w-[63%] py-[24px] h-full flex-col items-center gap-[24px]  '>
                        {/* header */}
                        <div className='flex h-fit w-[386px] leading-[56px] text-wrap text-[56px] 
                         font-DM_Sans font-normal text-black text-center lowercase '>
                            Creativity Pays  Dividends
                        </div>
                        {/* signup links  */}
                        <div className='flex w-full flex-row items-center justify-center gap-[16px]'>
                            <div className='flex flex-row gap-[8px] items-center justify-center
                         ring-1 ring-black
                         py-[11px] px-[32px] text-[14px]  leading-normal   font-Plus_Jakarta_Sans font-extrabold text-black'>
                                <span className='text-[24px]'>
                                    <FcGoogle />
                                </span>
                                <p>Google</p>
                            </div>
                            <div className='flex flex-row gap-[8px] items-center justify-center
                         ring-1 ring-black
                         py-[11px] px-[32px] text-[14px] leading-normal    font-Plus_Jakarta_Sans font-extrabold text-black'>
                                <span className='text-[24px]'>

                                    <FcDribbble />
                                </span>
                                <p>Dribble</p>
                            </div>
                            <div className='flex flex-row gap-[8px] items-center justify-center
                         ring-1 ring-black
                         py-[11px] px-[32px] text-[14px]  leading-normal  font-Plus_Jakarta_Sans font-extrabold text-black'>
                                <span className='text-[24px]'>
                                    <FaBehanceSquare />
                                </span>
                                <p>Behance</p>
                            </div>


                        </div>
                        {/* orbetter yet */}
                        <div className='relative flex w-full items-center justify-center  h-[2px] bg-[#DFE0E2]'>
                            <div className='flex absolute z-10 bg-white px-[22px] font-medium font-Plus_Jakarta_Sans text-[14px]
                             text-black'>Or better yet...</div>
                        </div>
                        {/* email and password  */}
                        <div className='flex flex-col w-full gap-[8px] items-center h-fit'>
                            <div className='flex flex-row gap-[12px] w-full bg-[#F5F5F5]  py-[21px] px-[24px] justify-start items-center 
                            text-[14px] font-Plus_Jakarta_Sans font-semibold text-black'>
                                <span><HiOutlineMail /></span>
                                <p>Email</p>
                            </div>
                            <div className='flex flex-row gap-[12px] w-full bg-[#F5F5F5]  py-[21px] px-[24px] justify-start items-center 
                            text-[14px] font-Plus_Jakarta_Sans font-semibold text-black'>
                                <span><CiLock /></span>
                                <p>Password</p>
                            </div>

                        </div>
                        {/* signup  */}
                        <button className='flex flex-row bg-black justify-center items-center text-center w-full  py-[17px] text-white  text-[14px] font-Plus_Jakarta_Sans font-bold leading-normal'>
                            Let&#39;s Mint Money
                        </button>
                        {/* terms and conditions  */}
                        <div
                        className='flex  flex-col flex-wrap w-full  items-center justify-center text-wrap text-center font-Plus_Jakarta_Sans text-[10px] font-normal text-black leading-normal'>
                           <span className='flex flex-col items-center hover:cursor-pointer  '>
                            <span className='flex flex-row '>
                            By  Logging  In, you agree to our <span className='font-bold underline underline-offset-1 px-1 hover:cursor-pointer'> 
                            User Agreement,</span> 
                            </span>
                            <div className='flex flex-row'>
                        <span className='font-bold px-1 underline underline-offset-1 hover:cursor-pointer'> Privacy Policy  </span> and <span className=' px-1 hover:cursor-pointer font-bold underline underline-offset-1'>  Terms of Service </span>  
                            </div>
                            </span> 
                        </div>

                    </div>
                </div>
                <div className='flex h-[20%] gap-[6px] w-full flex-row '>
                    <div 
                    style={{backgroundImage:`url(https://img.freepik.com/free-photo/abstract-eye-portrait-young-women-elegance-generated-by-ai_188544-9712.jpg)`}}
                    className='flex w-1/2 h-full bg-cover bg-center bg-no-repeat '>
                    </div>
                    <div 
                    style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8QLZY0N4jv31XedOISbUl01KeW8l0R9vDA&usqp=CAU)`}}
                    className='flex w-1/2 h-full bg-cover bg-center bg-no-repeat '></div>
                </div>

            </div>
            <div className='flex flex-col gap-[6px] w-[30%] h-full'>
                <div 
                style={{backgroundImage:`url(https://pics.craiyon.com/2023-11-06/d358ede71ec34cf0b4534bb0e9633ae8.webp)`}}
                className='flex h-[50%] w-full bg-cover bg-center bg-no-repeat '></div>
                <div 
                style={{backgroundImage:`url(https://i.pinimg.com/474x/c5/0b/25/c50b259f282a3f80634819375881bc81.jpg)`}}
                className='flex h-[50%] w-full bg-cover bg-center bg-no-repeat '></div>
            </div>


        </div>
    )
}

export default Login