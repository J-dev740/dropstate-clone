import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import FeatCard from './featurecard'
import ProductCard from './productCard'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface props {

}
const ShopAll:React.FC<props> = () => {
    const cards = [
        {
            type: 'sticker',
            name: 'Nike AirForce 1',
            price: 24.46,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUabefSDF7E6OyoA171anzt1uL08dVuBMOg&usqp=CAU'
        },
        {
            type: 'T-shirt',
            name: 'Dimensional',
            price: 40.46,
            src: 'https://media.centrepointstores.com/i/centrepoint/8914398-AW23MCORE5-SPW239623_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$'
        }, {
            type: 'Over-sized Tshirt',
            name: 'Dragon Ball Z',
            price: 200.46,
            src: 'https://100mph.cc/cdn/shop/files/unisex-v-neck-tee-black-front-6493a4d0deb23_2048x2048.jpg?v=1687547335'
        }, {
            type: 'Printed Tshirt',
            name: 'mikey mouse',
            price: 30.63,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgT_WCxAVrI-jC-CDwJvgbcHpwi8AQU10ydj-LFur5JXtEvTB-FSCqZYzOAqlmTg05XUg&usqp=CAU'
        },
        {
            type: 'printed Mug',
            name: 'Mug Anime Edition',
            price: 45.4,
            src: 'https://images.meesho.com/images/products/249234387/ncptc_512.webp'
        },
        {
            type: 'sticker',
            name: 'Nike AirForce 1',
            price: 24.46,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUabefSDF7E6OyoA171anzt1uL08dVuBMOg&usqp=CAU'
        },
        {
            type: 'T-shirt',
            name: 'Dimensional',
            price: 40.46,
            src: 'https://media.centrepointstores.com/i/centrepoint/8914398-AW23MCORE5-SPW239623_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$'
        }, {
            type: 'Over-sized Tshirt',
            name: 'Dragon Ball Z',
            price: 200.46,
            src: 'https://100mph.cc/cdn/shop/files/unisex-v-neck-tee-black-front-6493a4d0deb23_2048x2048.jpg?v=1687547335'
        }, {
            type: 'Printed Tshirt',
            name: 'mikey mouse',
            price: 30.63,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgT_WCxAVrI-jC-CDwJvgbcHpwi8AQU10ydj-LFur5JXtEvTB-FSCqZYzOAqlmTg05XUg&usqp=CAU'
        },
        {
            type: 'printed Mug',
            name: 'Mug Anime Edition',
            price: 45.4,
            src: 'https://images.meesho.com/images/products/249234387/ncptc_512.webp'
        },
        {
            type: 'Printed Tshirt',
            name: 'mikey mouse',
            price: 30.63,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgT_WCxAVrI-jC-CDwJvgbcHpwi8AQU10ydj-LFur5JXtEvTB-FSCqZYzOAqlmTg05XUg&usqp=CAU'
        },
        {
            type: 'printed Mug',
            name: 'Mug Anime Edition',
            price: 45.4,
            src: 'https://images.meesho.com/images/products/249234387/ncptc_512.webp'
        },
        
    ]
  return (
    <div className='flex flex-col items-center  w-[77%] h-fit  '>
        <div className=' relative flex flex-col items-center gap-[32px] w-[1250px]'>
        <p className='text-[#171717] font-DM_Sans w-full text-start font-normal leading-normal text-[32px]'>Top Selling Drops</p>
        {/* feature card list */}
        <div className='flex w-full justify-center items-center h-fit '>
        <div className=' grid grid-cols-6 gap-x-[20px] gap-y-[14px] w-full justify-center '>
            {new Array(12).fill(0).map((item,index)=>{
                return (
                    <div
                    className='flex scale'
                     key={index}>
                        <ProductCard ProductCard={cards[index]}/>

                    </div>
                    
                )
            })}
        </div>

        </div>
      {/* view more card */}
      {/* <div className=' absolute -right-[210px] hover:cursor-pointer bottom-[20px] flex flex-row items-center gap-[6px] text-[12px] font-semibold font-Plus_Jakarta_Sans text-[#202020] leading-normal px-[22px] py-[10px] ring-black ring-[1px]'>
            <p>View More</p> 
            <BsArrowUpRightCircleFill />
      </div> */}


        </div>

    </div>
  )
}

export default ShopAll