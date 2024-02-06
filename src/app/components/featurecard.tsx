import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const FeatCard = () => {
  return (
    <div className='flex flex-col items-start w-[400px] h-[253px] ring-2 ring-black'>
    {/* banner with logo */}
    <div className='relative flex h-[27%] w-full bg-black'>
    {/* logo */}
    <div className='absolute flex w-[60px] h-[60px] rounded-full bg-red-400 ring-[1px] ring-white left-[20px] -bottom-[42%]'></div>
    </div>
    {/* idenfier logo */}
    <div className='flex w-full justify-end mt-[6px] h-fit pr-[13px] '>
        <div className='w-[27px] h-[27px] rounded-full bg-yellow-200'/>
    </div>
    {/* describer  */}
    <div className='flex flex-col items-start justify-center  pl-[20px] w-full h-fit '>
        {/* name & verified logo */}
        <div className='flex flex-row justify-start items-center  w-full '>
            <p className=' font-bold text-black text-[16px] leading-normal font-Plus_Jakarta_Sans'>Riot Games</p>
              <RiVerifiedBadgeFill className='text-[16px] text-[#4967FF] inline-block ml-1 ' />
        </div>
        {/* pitch */}
        <div className='flex text-wrap w-[83%] mt-[10px] text-[#171717]  text-left font-Plus_Jakarta_Sans font-normal leading-normal text-[16px] '>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        {/* art category & analytics */}
        <div className='flex  mt-[14px] mb-[20px] flex-row gap-[50%] items-center  w-full pr-[14px] '>
            <div className='w-fit  h-[20px] text-white bg-black text-[9px] 
            font-Plus_Jakarta_Sans font-medium px-[12px] py-[4px] text-center'>Gaming</div>
            <div className='flex flex-row gap-[14px] items-center  font-Neue  '>
                <div className='flex flex-col items-end -space-y-[8px] w-fit h-fit '>
                    <p className='font-medium text-[#171717] text-[20px] leading-normal '>276</p>
                    <p className=' font-light text-[12px] text-[#AEAEAE] font-Plus_Jakarta_Sans leading-normal '>designs</p>
                </div>
                <div className='flex flex-col items-end -space-y-[8px] w-fit h-fit '>
                    <p className='font-medium text-[#171717] text-[20px] leading-normal'>5.6K</p>
                    <p className=' font-light text-[12px] text-[#AEAEAE] font-Plus_Jakarta_Sans leading-normal'>followers</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FeatCard