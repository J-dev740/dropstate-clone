import React from 'react'

interface props{
    tdrops:Array<{
        img:string,
    }>
}
const Category:React.FC<props>=({tdrops})=> {
  return (
      <div className='relative flex flex-row  w-full justify-center gap-[16px] '>
          {/* header relative to artists section*/}
          <div className='absolute -top-[106px] left-[38%]  w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
              Category
              <div className='absolute flex flex-row -right-[18%] top-[30%] text-[14px] font-bold font-Plus_Jakarta_Sans leading-[17px] text-[#171717] '>
        <span className=' font-DM_Sans text-[32px] leading-[30px] font-bold pr-1 '>*</span> trending</div>

          </div>
          {/* single card */}
          {
              tdrops.map((tdrop, index) => (
                  <div
                      className='relative group bg-center bg-cover bg-no-repeat group z-10 w-[380px] h-[580px] flex flex-col bg-slate-200
                      hover:ring-black  hover:cursor-pointer hover:-translate-x-2 hover:-translate-y-2 ease-in duration-100 hover:shadow-lg hover:shadow-black'
                      style={{ backgroundImage: `url(${tdrop.img})` }}
                      key={index}>
                        <div className='absolute group-hover:ring-black group-hover:bg-black group-hover:-translate-x-2 group-hover:-translate-y-2 ease-in duration-100 group-hover:shadow-md group-hover:shadow-black flex flex-row bg-transparent items-center justify-center   ring-[1px] ring-white text-white font-normal font-Plus_Jakarta_Sans text-[18px]
                        tracking-wide  bottom-[25px] left-1/3 pt-[6px] pb-[10px] px-[30px]'>
                            <p>Category</p>

                        </div>
                  </div>

              ))
          }


      </div>
  )
}

export default Category