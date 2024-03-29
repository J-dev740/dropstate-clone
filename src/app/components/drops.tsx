import React from 'react'

interface props{
    tdrops:Array<{
        img:string,
    }>
}
const Drops:React.FC<props>=({tdrops})=> {
  return (
      <div className='relative flex flex-row  w-full justify-center gap-[8px] '>
          {/* header relative to artists section*/}
          <div className='absolute -top-[106px] left-[38%]  w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
              drops
              <div className='absolute flex flex-row -right-[30%] top-[30%] text-[14px] font-bold font-Plus_Jakarta_Sans leading-[17px] text-[#171717] '>
        <span className=' font-DM_Sans text-[32px] leading-[30px] font-bold pr-1 '>*</span> trending</div>

          </div>
          {/* single card */}
          {
              tdrops.filter((item,index)=>index<3).map((tdrop, index) => (
                  <div
                      className='bg-center bg-cover bg-no-repeat group z-10 w-[330px] h-[400px] flex flex-col bg-slate-200'
                      style={{ backgroundImage: `url(${tdrop.img})` }}
                      key={index}>.
                  </div>

              ))
          }


      </div>
  )
}

export default Drops