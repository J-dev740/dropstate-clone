import React from 'react'
import {BsBookmarkHeartFill,BsFillArrowUpRightCircleFill} from 'react-icons/bs'

function Artist() {
    const cards=[
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
        },        {
            type: 'Over-sized Tshirt',
            name: 'Dragon Ball Z',
            price: 200.46,
            src: 'https://100mph.cc/cdn/shop/files/unisex-v-neck-tee-black-front-6493a4d0deb23_2048x2048.jpg?v=1687547335'
        },        {
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
    const categoryCards=[
        {
            src:'https://s3.envato.com/files/355679253/DSC00714.jpg',
            text:'Shop Label pins'
        },
        {
            src:'https://m.media-amazon.com/images/I/815hl9wPzdL._AC_UF1000,1000_QL80_.jpg',
            text:'Shop Label pins'
        },
        {
            src:'https://mcmug.co.uk/wp-content/uploads/2020/04/MAC_FUN_183-WHITE.jpg',
            text:'Shop Label pins'
        },
    ]
    return (
        <div className='bg-white h-full w-full flex flex-col justify-between gap-4 '>
            {/* banner */}
            <div
                className=' relative   flex flex-col   min-h-[320px] bg-white bg-cover  bg-no-repeat bg-center  '
                style={{ backgroundImage: `url(https://image.api.playstation.com/vulcan/ap/rnd/202211/0901/hJsSsHh7P019cNOT7YHp56jK.png?w=1920&thumb=false)` }}
            >
                {/* profile pic */}
                {/* <div className='  absolute left-[120px] -bottom-[160px] flex flex-col items-center justify-center p-4'>
                </div> */}
                    <div className=' absolute left-[120px] -bottom-[108px] bg-cover bg-center bg-no-repeat ring-[8px] ring-white w-[200px] h-[200px] rounded-full '
                        style={{ backgroundImage: `url(https://image.api.playstation.com/vulcan/ap/rnd/202211/0901/hJsSsHh7P019cNOT7YHp56jK.png?w=1920&thumb=false)` }}
                    ></div>
                    {/* profile name */}
                    {/* <div className=' absolute left-[120px] -bottom-[158px]   '> */}
                        <span className='text-black text-[40px] font-extrabold font-sans absolute left-[120px] -bottom-[158px]  '>Call Of Duty</span>
                        <span className=' absolute left-[120px] -bottom-[188px]  text-slate-700 text-[20px] font-light '>@Call Of Duty</span>

                    {/* </div> */}
            </div>


            {/* title  */}
            <div className='text-black  mt-[320px] ml-[120px] font-serif  font-bold text-[32px] w-[300px] h-[44px]'>Top Selling shorts</div>
            <div className='w-full  flex flex-row gap-[40px] jusity-self-start justify-start items-center ml-[120px] '>
            {/* cards */}
            { cards.map((card)=>(

                <div className='flex flex-col justify-start items-center pt-4 '>
                    {/* card banner */}
                    <div style={{backgroundImage:`url(${card.src})`}}
                    className=' relative  bg-center bg-cover bg-no-repeat h-[368px] w-[304px]  rounded-md'>
                        {/* icons */}
                        <BsBookmarkHeartFill className='absolute right-[16px] top-[16px] text-[32px]  text-black'/>
                    </div>
                    {/* card type */}
                    <div className='text-slate-700 text-[20px] text-start w-full '>{card.type}</div>
                    {/* name of product */}
                    <div className='text-black text-[24px]  font-sans font-semibold text-start w-full '>{card.name}</div>
                    {/* price  */}
                    <div className='text-black text-[32px] font-sans font-bold w-full text-start'>$ {card.price}</div>
                </div>
            ))}
            </div>
                {/* shop by category */}
            <div className='text-black  mt-[150px] ml-[120px] font-serif  font-bold text-[32px] w-[300px] h-[44px]'>Shop by category</div>
            {/* shop by category cards */}
            <div className='w-full ml-[120px] mt-[32px] mb-4 flex flex-col justify-start gap-[32px] items-center'>
                {/* section1  */}
                <div className='w-full flex flex-row gap-[42px] justify-start items-center '>
                    {/* 3cards */}
                    {categoryCards.map((card)=>(

                    <div className='w-[532px] h-[344px] flex flex-col justify-start  ring-4 ring-black items-center rounded-lg'>
                        {/* banner */}
                        <div  
                        style={{backgroundImage:`url(${card.src})`}}
                        className="w-full h-[220px] bg-cover bg-no-repeat bg-center bg-black">
                            {" "}
                        </div>
                        {/* Shop Label Pins */}
                        <div className=' text-black font-extrabold flex flex-row w-full h-[124px] justify-start gap-2 pl-[40px] items-center '>
                            {/* text  */}
                            <div className='text-[32px] font-sans font-bold'>Shop Label Pins</div>
                            {/* arrow */}
                            <div className='flex justify-center items-center p-2 mt-2 scale-150'>
                            <BsFillArrowUpRightCircleFill classname ='text-[32px]  font-sans font-bold  '/>
                            </div>

                        </div>
                    </div>
                    ))}
                </div>
                {/* section2 */}
                <div className='w-full  px-[369px] flex flex-row gap-[42px] justify-start items-center'>
                    {/* 2cards */}
                    {categoryCards. filter((card,index)=>{
                        return index<2
                    }).map((card) => (

                        <div className='w-[532px] h-[344px] flex flex-col justify-start  ring-4 ring-black items-center rounded-lg'>
                            {/* banner */}
                            <div
                                style={{ backgroundImage: `url(${card.src})` }}
                                className="w-full h-[220px] bg-cover bg-no-repeat bg-center bg-black">
                                {" "}
                            </div>
                            {/* Shop Label Pins */}
                            <div className=' text-black font-extrabold flex flex-row w-full h-[124px] justify-start gap-2 pl-[40px] items-center '>
                                {/* text  */}
                                <div className='text-[32px] font-sans font-bold'>Shop Label Pins</div>
                                {/* arrow */}
                                <div className='flex justify-center items-center p-2 mt-2 scale-150'>
                                    <BsFillArrowUpRightCircleFill classname='text-[32px]  font-sans font-bold  ' />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {/* section3 */}
                
                <div className='w-full  flex flex-row gap-[42px] justify-start items-center'>
                    {/* 3cards */}
                    {categoryCards.map((card) => (

                        <div className='w-[532px] h-[344px] flex flex-col justify-start  ring-4 ring-black items-center rounded-lg'>
                            {/* banner */}
                            <div
                                style={{ backgroundImage: `url(${card.src})` }}
                                className="w-full h-[220px] bg-cover bg-no-repeat bg-center bg-black">
                                {" "}
                            </div>
                            {/* Shop Label Pins */}
                            <div className=' text-black font-extrabold flex flex-row w-full h-[124px] justify-start gap-2 pl-[40px] items-center '>
                                {/* text  */}
                                <div className='text-[32px] font-sans font-bold'>Shop Label Pins</div>
                                {/* arrow */}
                                <div className='flex justify-center items-center p-2 mt-2 scale-150'>
                                    <BsFillArrowUpRightCircleFill classname='text-[32px]  font-sans font-bold  ' />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>



        </div>
    )
}

export default Artist
