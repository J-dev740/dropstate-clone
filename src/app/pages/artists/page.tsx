import React from 'react'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import ProductCard from '@/app/components/productCard'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import TopDrops from '@/app/components/topsellingDrops'
import ShopAll from '@/app/components/shopall'


function ArtistPage() {
    //dummy data of top selling shorts
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
    ]


    return (
        <div className='bg-white h-full w-full flex flex-col justify-between gap-4 '>
            {/* banner */}
            <div className='flex flex-col w-full items-end gap-[16px]  '>
            <div
                className=' relative   flex flex-col w-full   min-h-[320px] bg-white bg-cover  bg-no-repeat bg-center  '
                style={{ backgroundImage: `url(https://image.api.playstation.com/vulcan/ap/rnd/202211/0901/hJsSsHh7P019cNOT7YHp56jK.png?w=1920&thumb=false)` }}
            >
                {/* profile pic */}

                <div className=' absolute left-[120px] -bottom-[108px] bg-cover bg-center bg-no-repeat ring-[8px] ring-white w-[200px] h-[200px] rounded-full '
                    style={{ backgroundImage: `url(https://image.api.playstation.com/vulcan/ap/rnd/202211/0901/hJsSsHh7P019cNOT7YHp56jK.png?w=1920&thumb=false)` }}
                ></div>
                {/* profile name */}

                <div className='absolute left-[120px] -bottom-[166px] flex flex-row items-center '>
                    <span className='text-black text-[40px]  font-bold  font-Plus_Jakarta_Sans   '>Call Of Duty</span>
                    <RiVerifiedBadgeFill className='text-[36px] text-[#4967FF] inline-block ml-1 ' />

                </div>
                <span className=' absolute left-[120px] -bottom-[188px]  text-[#AEAEAE] text-[20px] font-medium font-Plus_Jakarta_Sans '>@CodeGame</span>


            </div>
            <div
            style={{background:` rgba(218, 239, 255, 0.60)`}}
             className=' flex flex-row  w-[983px] h-[143px] pl-[32px] gap-[35px] pr-[40px]'>
                <div className='flex flex-col items-start text-[#171717] font-Plus_Jakarta_Sans leading-normal text-left  py-[26px] '>
                <p className='flex uppercase text-[16px] font-bold '>Artist/illustrator</p>
                <p className='flex  text-wrap text-[15px] font-normal leading-[1.2]'>since the 1500s, when an unknown printer took a galley of
                 type and scrambled it to make a type specimen book.
                 Hbfaeibf  ausbcuasb aijsvbuadbv ijasvbuabv asjvbuabdv.</p>
                </div>
                <div className='flex h-full w-[1px] bg-white'></div>
                <div className='flex font-Neue font-medium text-center items-center  flex-col  py-[26px]'>
                    <p className='text-[60px] text-center text-[#171717] '>2134</p>
                    <p className='flex text-[#AEAEAE]  text-center -mt-5  font-Plus_Jakarta_Sans text-[10px] font-bold uppercase leading-normal '>Favourites</p>
                </div>
                <div className='flex h-full w-[1px] bg-white'></div>
                <div className='flex font-Neue font-medium text-center items-center  flex-col  py-[26px]'>
                    <p className='text-[60px] text-center text-[#171717] '>276</p>
                    <p className='flex text-[#AEAEAE]  text-center -mt-5  font-Plus_Jakarta_Sans text-[10px] font-bold uppercase leading-normal '>Drops</p>
                </div>
                <div className='flex h-full w-[1px] bg-white'></div>




            </div>

            </div>
            {/* TopSelling shorts */}
            <div className='mt-[116px] gap-[110px]  mb-[380px] ml-[120px] flex flex-col '>
                <div className=' relative flex flex-col gap-[130px]'>
                    <TopDrops />
                    <ShopAll />
                    <div className='flex absolute -bottom-[110px] left-1/3 w-fit hover:cursor-pointer px-[44px] py-[8px] ring-1 ring-black
                  text-[#202020] text-[15px] font-Plus_Jakarta_Sans font-semibold'>Show More</div>
                </div>

            </div>


            {/* shop by category */}




        </div>
    )
}

export default ArtistPage






