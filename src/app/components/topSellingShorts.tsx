import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

interface Card {
    type: string,
    name: string,
    price: number,
    src: string
    
}
 interface TopSellingShortsProps {
    cards: Card[]
    // cards: Array<Card>
 }

const TopSellingShorts: React.FC<TopSellingShortsProps> = ({ cards }) => {
    return (
        
            cards.map((card) => (

                <div className='flex flex-col justify-start items-center pt-4 '>
                    {/* card banner */}
                    <div style={{ backgroundImage: `url(${card.src})` }}
                        className=' relative  bg-center bg-cover bg-no-repeat h-[368px] w-[304px]  rounded-md'>
                        {/* icons */}

                        <AiOutlineHeart className=' p-[8px] w-[40px] h-[40px] flex justify-center absolute -right-[16px] bottom-[22px] text-[32px]  text-white bg-black bg-opacity-70 backdrop-blur-md '></AiOutlineHeart>
                    </div>
                    {/* card type */}
                    <div className='text-slate-700 text-[20px] text-start w-full '>{card.type}</div>
                    {/* name of product */}
                    <div className='text-black text-[24px]  font-sans font-semibold text-start w-full '>{card.name}</div>
                    {/* price  */}
                    <div className='text-black text-[32px] font-sans font-bold w-full text-start'>$ {card.price}</div>
                </div>
            ))
        
    )
}

export default TopSellingShorts;