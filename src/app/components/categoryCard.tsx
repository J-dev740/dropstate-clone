import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'

interface categoryCard {
    type?: string,
    name?: string,
    price?: number,
    src?: string

}
interface CategoryProps {
    card: categoryCard
    // cards: Array<Card>
}

const CategoryCard: React.FC<CategoryProps> = ({card}) => {
    return (

        <div className='w-[532px] h-[344px] flex flex-col justify-start  hover:ring-4 hover:ring-black items-center'>
            {/* banner */}
            <div
                style={{ backgroundImage: `url(${card.src})` }}
                className="w-full h-[220px] bg-cover bg-no-repeat bg-center  bg-black">
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

    )
}

export default CategoryCard