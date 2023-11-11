'use client'
import ProductCard from '@/app/components/productCard'
import WishListIcon from '@/app/components/wishListIcon'
import React, { useState } from 'react'

export interface ProductType{
    productImage:string[],
    type:string,
    name:string,
    designedBy:string,
    sizeChart:string[],
    colorChart:string[],
    availableQuantity:number,
    price:number,
    deliveryDetails:{
        returnPeriod:number
        guarantee:boolean,
        qualityAssured:boolean,
        codAvailable:boolean
    },
    designFeature:{
        description:string,
        material:string,
        washing:string,
        print:string,
        ironing:string
    },
    src:string
}
function ProductPage() {
    //dummy data for Product Object 
    const Product:ProductType={
        productImage:['https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg',
        'https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg',
        'https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg'],
        type:'T-shirt',
        name:'Dimensional',
        designedBy:'Call of Duty',
        sizeChart:['S','M','L','XL','XXL'],
        colorChart:['blue','red','green','yellow'],
        availableQuantity:5,
        price:24.46,
        deliveryDetails:{
            returnPeriod:7,
            guarantee:true,
            qualityAssured:true,
            codAvailable:true,
        },
        designFeature:{
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            material:'90% Cotton, 10% Polyester',
            washing:'Machine was, Hand wash',
            print:'Direct To garment',
            ironing:'Do not iron on prints'
        },
        src:'https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg'
    }

    //dummy data of product cards

    const [open,isOpen]=useState(false)
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
        <div className='flex flex-col h-fit w-full   bg-white text-black gap-[160px] '>
            {/* Product details */}
            <div className=' mt-[200px] flex flex-row h-[40.4%] gap-[80px] mx-[120px] items-start '>
                {/* Product Display */}
                <div className=' w-[44%]  bg-white'>
                    {/* product display combined div */}
                    <div className='w-full h-[677px] flex flex-row gap-[8px]'>
                    {/* side pics of product */}
                    <div className='flex flex-col gap-[8px]'>
                        {/* 3 small product pics */}
                        <div  className='w-[175px] h-[220px]  bg-center bg-cover bg-no-repeat' 
                        style={{backgroundImage:`url(https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg)`}}></div>
                        <div  className='w-[175px] h-[220px]  bg-center bg-cover bg-no-repeat'
                        style={{backgroundImage:`url(https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg)`}}></div>
                        <div  className='w-[175px] h-[220px]  bg-center bg-cover bg-no-repeat'
                        style={{backgroundImage:`url(https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg)`}}></div>

                    </div>
                    {/* selected  pic display */}
                    <div className='relative w-[560px] h-[677px]  bg-cover bg-center bg-no-repeat '
                    style={{backgroundImage:`url(https://media.karousell.com/media/photos/products/2019/07/22/calvin_klien_kendall_jenner_sport_bra_1563780071_1fede2cb_progressive.jpg)`}}>
                        {/* whislist icon */}
                        <div className='absolute top-[8px] right-[8px]'>
                            <WishListIcon/>
                        </div>
                    </div>

                    </div>

                </div>
                {/* Product Description and buy section */}
                <div className='w-[55%]  bg-white flex flex-col items-start justify-start text-start '>
                    {/* product type */}
                    <div className='w-full text-[#AEAEAE] font-Plus_Jakarta_Sans text-[20px] font-medium mb-[8px]'>Premium TShirt</div>
                    {/* product name */}
                    <div className='w-full text-[#171717] font-Plus_Jakarta_Sans font-medium text-[36px] mb-[16px]'>DragonBall Z - Goku Edition</div>
                    {/* designed by */}
                    <div className='w-full mb-[32px] text-[16px] font-medium text-[#171717] '>designed by <span className='font-bold underline underline-offset-1'>Call of Duty</span></div>
                    {/* size section */}
                    <div className=' flex flex-col w-full gap-[24px] mb-[32px]'>
                        {/* Select Size header */}
                        <div className='text-[16px] font-semibold  font-Plus_Jakarta_Sans'>Select Size</div>
                        {/* size chart */}
                        <div className='flex flex-row w-full justify-start items-center gap-[12px]'>
                            <div className=' border-[1px] border-black px-[12px] py-[8px] text-[16px] font-Plus_Jakarta_Sans font-medium h-[36px] flex items-center'>S</div>
                            <div className=' border-[1px] border-black px-[12px] py-[8px] text-[16px] font-Plus_Jakarta_Sans font-medium h-[36px] flex items-center'>M</div>
                            <div className=' border-[1px] border-black px-[12px] py-[8px] text-[16px] font-Plus_Jakarta_Sans font-medium h-[36px] flex items-center'>L</div>
                            <div className=' border-[1px] border-black px-[12px] py-[8px] text-[16px] font-Plus_Jakarta_Sans font-medium h-[36px] flex items-center'>XL</div>
                            <div className=' border-[1px] border-black px-[12px] py-[8px] text-[16px] font-Plus_Jakarta_Sans font-medium h-[36px] flex items-center'>XXL</div>

                        </div>
                    </div>
                    {/* color section */}
                    <div className='flex flex-col w-full gap-[24px] mb-[31px]'>
                        {/* Select color header */}
                        <div className='text-[16px] font-semibold  font-Plus_Jakarta_Sans'>Select Color</div>
                        {/* color chart */}
                        <div className='flex flex-row w-full justify-start items-center gap-[12px]'>
                            <div className='w-[37px] h-[37px] rounded-full  ring-2 ring-black bg-blue-500'></div>
                            <div className='w-[37px] h-[37px] rounded-full  bg-red-500'></div>
                            <div className='w-[37px] h-[37px] rounded-full  bg-teal-500'></div>
                            <div className='w-[37px] h-[37px] rounded-full  bg-cyan-500'></div>


                        </div>
                    </div>
                    {/* quantity section  and price section*/}
                    <div className=' mb-[47px] w-full flex flex-col '>
                        {/* quantity header */}
                        <div className='mb-[24px] text-[16px] font-Plus_Jakarta_Sans font-semibold '>Quantity</div>
                        {/* quantity  and price  */}
                        <div className='w-[657px] relative flex flex-row justify-between items-center '>
                            {/* quantity selector */}
                            <div className='  w-[146px] h-[39px] text-[16px] font-Plus_Jakarta_Sans font-bold flex flex-row justify-between border-[1px] border-black px-[12px] py-[8px]'>
                                <div className='text-[16px]  border-black  flex items-center justify-center'>-</div>
                                <div className='flex items-center justify-center'>1</div>
                                <div className='text-[16px]   flex items-center justify-center'>+</div>
                            </div>
                            {/* price display */}
                            <div className='absolute top-[23px] right-0 font-Neue font-semibold text-[40px] text-[#171717]'>$749.00</div>

                        </div>
                    </div>
                    {/* add to cart and buy now */}
                    <div className='w-full  text-center mb-[24px] flex flex-col gap-[8px]'>
                        {/* price  */}
                        {/* add to cart */}
                        <div className='w-[657px] h-[57px] text-[20px] border-[1.5px] border-black text-black font-Plus_Jakarta_Sans font-semibold px-[32px] py-[16px]'>Add to cart</div>
                        {/* buy now */}
                        <div className='w-[657px] h-[57px] text-[20px] text-white bg-black font-Plus_Jakarta_Sans font-semibold px-[32px] py-[16px]'>Buy Now</div>

                    </div>
                    {/* deliver details */}
                    <div className='w-[657px] text-center text-[20px] font-Plus_Jakarta_Sans font-normal text-[#171717] flex flex-row justify-center  items-center gap-[40px] mb-[64px]'>
                        {/* guarantee */}
                        <div>7 Day Return </div>
                        <div>|</div>
                        {/* quality assured */}
                        <div>Quality Assured</div>
                        <div>|</div>
                        {/* cod available */}
                        <div>COD Available</div>
                    </div>
                    {/* drop down section */}
                    <div className='w-[657px] flex flex-col gap-[20px] '>
                      
                        {/* design feature  */}
                        <div className=' w-full flex flex-col justify-between items-center text-[16px] font-Plus_Jakarta_Sans font-semibold   '>
                            {/* toggle button */}
                            <div
                            //  onClick={()=>isOpen(!open)}
                            className='w-full flex flex-row justify-between items-center  '>
                                <div className=''>Design Feature</div>
                                <div className=''>^</div>
                            </div>
                            {/* details when toggled */}
                            {false && (
                            <div className='w-full flex flex-col items-start gap-[8px] mt-[24px]'>
                                {/* description div */}
                                <div className='text-[#171717] font-normal mb-[16px]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an  Unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into

                                </div>
                                {/* material div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Material:</span> 90% Cotton, 10% Polyester
                                </div>
                                {/* washing div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Washing:</span> Machine was, Hand wash
                                </div>
                                {/* print div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Print:</span> Direct To garment
                                </div>
                                {/* iron div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Ironing:</span> Do not iron on prints
                                </div>


                            </div>

                            )}

                        </div>
                       <p className='w-[657px] justify-center leading-2 text-[#AEAEAE80] font-bold flex items-start'> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
                          {/* product Description */}
                          <div className=' w-full flex flex-col justify-between items-center text-[16px] font-Plus_Jakarta_Sans font-semibold'>
                            {/* toggle button */}
                            <div onClick={()=>isOpen(!open)}
                            className='w-full flex flex-row justify-between items-center hover:cursor-pointer '>
                                <div className=''>Product Description</div>
                                <div className=''>^</div>
                            </div>
                            {/* details when toggled */}
                            {open && (
                            <div className='w-full flex flex-col items-start gap-[8px] mt-[24px]'>
                                {/* description div */}
                                <div className='text-[#171717] font-normal mb-[16px]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an  Unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into

                                </div>
                                {/* material div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Material:</span> 90% Cotton, 10% Polyester
                                </div>
                                {/* washing div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Washing:</span> Machine was, Hand wash
                                </div>
                                {/* print div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Print:</span> Direct To garment
                                </div>
                                {/* iron div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Ironing:</span> Do not iron on prints
                                </div>


                            </div>

                            )}

                        </div>

                       <p className='w-[657px] justify-center leading-2 text-[#AEAEAE80] font-bold flex items-start'> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>

                         {/* design feature  */}
                         <div className=' w-full flex flex-col justify-between items-center text-[16px] font-Plus_Jakarta_Sans font-semibold'>
                            {/* toggle button */}
                            <div
                            //  onClick={()=>isOpen(!open)}
                            className='w-full flex flex-row justify-between items-center  '>
                                <div className=''>Design Feature</div>
                                <div className=''>^</div>
                            </div>
                            {/* details when toggled */}
                            {false && (
                            <div className='w-full flex flex-col items-start gap-[8px] mt-[24px]'>
                                {/* description div */}
                                <div className='text-[#171717] font-normal mb-[16px]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an  Unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into

                                </div>
                                {/* material div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Material:</span> 90% Cotton, 10% Polyester
                                </div>
                                {/* washing div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Washing:</span> Machine was, Hand wash
                                </div>
                                {/* print div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Print:</span> Direct To garment
                                </div>
                                {/* iron div */}
                                <div className='font-normal'>
                                    <span className='font-bold'>Ironing:</span> Do not iron on prints
                                </div>


                            </div>

                            )}

                        </div>
                    </div>
                </div>
            </div>
            {/* product list section */}
            <div className='flex flex-col gap-[146px] px-[120px]  justify-start items-center w-full h-[59.6%] bg-white'>
                {/* similar Products */}
                <div className='  flex flex-col '>
                    {/* title */}
                    <div className='text-black  font-DM_Sans  font-normal text-[32px]  mb-[32px]'>Similar Products</div>
                    {/* ProductCardList */}
                    <div className='w-full  flex flex-row gap-[40px] jusity-self-start justify-start items-center  '>
                        {/* cards */}
                        {
                            cards.map((card) => (
                                <ProductCard ProductCard={card} />
                            ))}
                    </div>

                </div>
                {/* More from Section */}
                <div className=' flex flex-col '>
                    {/* title */}
                    <div className='text-black  font-DM_Sans  font-normal text-[32px]  mb-[32px]'>More from Call Of Duty</div>
                    {/* ProductCardList */}
                    <div className='w-full  flex flex-row gap-[40px] jusity-self-start justify-start items-center  '>
                        {/* cards */}
                        {
                            cards.map((card) => (
                                <ProductCard ProductCard={card} />
                            ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductPage