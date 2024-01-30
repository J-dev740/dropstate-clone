import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import FeatCard from './featurecard'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

interface props {

}
const TrendSetters:React.FC<props> = () => {
  return (
    <div className='flex flex-col items-center  w-[77%] h-fit  '>
        <div className='relative flex flex-col items-center w-[1250px]'>
              {/* h1 */}
        <p className='text-[#171717] font-Plus_Jakarta_Sans font-normal leading-[26px] text-[24px]'>Creators to Watch</p>
        {/* h2 */}
        <span className='text-[#171717]  font-DM_Sans font-normal leading-[80px] text-[72px]'>The TrendSetters</span>
        {/* feature card list */}
        <div className='flex w-full justify-center items-center h-fit '>
        <div className=' grid grid-cols-3 gap-x-[20px] gap-y-[14px] w-full justify-center '>
            {new Array(9).fill(0).map((item,index)=>{
                return (
                    <div key={index}>
                        <FeatCard/>

                    </div>
                    
                )
            })}
        </div>

        </div>
        <div className=' absolute hover:cursor-pointer -right-[210px] bottom-[1px] flex flex-row items-center gap-[6px] text-[12px] font-semibold font-Plus_Jakarta_Sans text-[#202020] leading-normal px-[22px] py-[10px] ring-black ring-[1px]'>
            <p>View More</p> 
            <BsArrowUpRightCircleFill />
      </div>
        </div>
      

    </div>
  )
}

export default TrendSetters