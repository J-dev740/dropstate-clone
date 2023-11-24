'use client'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { GoArrowUpRight } from "react-icons/go";
import React from 'react';

export default function Home() {
  const [hover, setHover] = React.useState(0)
  return (
    <main className="flex min-h-screen flex-col items-start  bg-white ">
      {/* banner  */}
      <div className='w-full bg-black text-white h-[48px] mt-[16px] mb-[40px] text-center  text-[16px] font-Plus_Jakarta_Sans font-bold tracking-[6.4px] flex items-center justify-center '> <span>BLACK FRIDAY SALE LIVE</span></div>
      {/* brandName and userOptions */}
      <div className='flex flex-row h-[65px] justify-between w-full  items-start text-black font-Plus_Jakarta_Sans mb-[37px]'>
        {/* brandName and sometext */}
        <div className='flex flex-col  gap-[4px]  ml-[40px]'>
          {/* brandName */}
          <div className='text-[32px]  font-medium flex justify-center '>drop<span className='font-bold underline underline-offset-2'>state</span></div>
          {/* some text */}
          <div className='bg-black  place-self-end text-white px-[17px] py-[3px] text-[12px] border-[2px] mr-[8px]'>Luxe</div>
        </div>
        {/* userOptions */}
        <div className='flex mr-[66px] mt-[10px]'>
          <ul className='flex flex-row gap-[20px] items-start font-medium text-[16px] text-[#171717] '>
            <li>
              <Link href='#'>
                Login
              </Link>
            </li>
            <li>
              <Link href='#'>
                Create storefront
              </Link></li>
            <li>
              <Link href='#'>
                TrackOrder
              </Link>
            </li>
          </ul>

        </div>
      </div>
      {/* navbar list */}
      <div className='ml-[40px]'>
        <ul className='flex flex-row gap-[40px] leading-normal items-start font-normal font-Plus_Jakarta_Sans text-[18px] text-[#171717] '>
          <li>
            <Link href='#'>
              Tshirt
            </Link>
          </li>
          <li>
            <Link href='#'>
              Hoodies
            </Link></li>
          <li>
            <Link href='#'>
              Stickers
            </Link>
          </li>
          <li>
            <Link href='#'>
              Posters
            </Link>
          </li>  <li>
            <Link href='#'>
              Sneakers
            </Link>
          </li>  <li>
            <Link href='#'>
              Tumblers
            </Link>
          </li>
        </ul>
      </div>
      {/* topArtists */}
      <div className='w-full flex flex-col mt-[102px]'>
        {/* artists */}
        <div className='relative flex flex-row  w-full  '>
          {/* header relative to artists section*/}
          <div className='absolute  -top-[106px] left-[38%] w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
            artists
            <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'>* trending</div>
          </div>
          {/* single card */}
          <div
            onMouseEnter={(e) => { setHover(1) }}
            onMouseLeave={(e) => { setHover(0) }}
            className='group w-[320px] h-[512px] flex flex-col  '>
            {/* image */}
            <div className=' transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
            {/* name */}
            <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

              <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>DudePerfect</div>
                <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

              </div>
              {/* pitch text */}
              <div

                className={hover == 1 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                Official Riot Games store on dropstate where pixels meet passion.
                Explore exclusive gaming gear inspired by your favorite titles.</div>
              {/* link to storefront */}
              <Link className='mt-[56px] mx-auto flex flex-row '
                href='#'>
                <div
                  className={hover == 1 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black' : 'hidden'}>
                  Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                </div>
              </Link>

            </div>
          </div>
          {/* single card */}
          <div
            onMouseEnter={(e) => { setHover(2) }}
            onMouseLeave={(e) => { setHover(0) }}
            className='group w-[320px] h-[512px] flex flex-col  '>
            {/* image */}
            <div className=' transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
            {/* name */}
            <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

              <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>DudePerfect</div>
                <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

              </div>
              {/* pitch text */}
              <div

                className={hover == 2 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                Official Riot Games store on dropstate where pixels meet passion.
                Explore exclusive gaming gear inspired by your favorite titles.</div>
              {/* link to storefront */}
              <Link className='mt-[56px] mx-auto flex flex-row '
                href='#'>
                <div
                  className={hover == 2 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black' : 'hidden'}>
                  Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                </div>
              </Link>

            </div>
          </div>
          <div
            onMouseEnter={(e) => { setHover(3) }}
            onMouseLeave={(e) => { setHover(0) }}
            className='group w-[320px] h-[512px] flex flex-col  '>
            {/* image */}
            <div className=' transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
            {/* name */}
            <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

              <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>DudePerfect</div>
                <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

              </div>
              {/* pitch text */}
              <div

                className={hover == 3 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                Official Riot Games store on dropstate where pixels meet passion.
                Explore exclusive gaming gear inspired by your favorite titles.</div>
              {/* link to storefront */}
              <Link className='mt-[56px] mx-auto flex flex-row '
                href='#'>
                <div
                  className={hover == 3 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black' : 'hidden'}>
                  Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                </div>
              </Link>

            </div>
          </div>
          <div
            onMouseEnter={(e) => { setHover(4) }}
            onMouseLeave={(e) => { setHover(0) }}
            className='group w-[320px] h-[512px] flex flex-col  '>
            {/* image */}
            <div className=' transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
            {/* name */}
            <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

              <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>DudePerfect</div>
                <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

              </div>
              {/* pitch text */}
              <div

                className={hover == 4 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                Official Riot Games store on dropstate where pixels meet passion.
                Explore exclusive gaming gear inspired by your favorite titles.</div>
              {/* link to storefront */}
              <Link className='mt-[56px] mx-auto flex flex-row '
                href='#'>
                <div
                  className={hover == 4 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black' : 'hidden'}>
                  Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                </div>
              </Link>

            </div>
          </div>
          <div
            onMouseEnter={(e) => { setHover(5) }}
            onMouseLeave={(e) => { setHover(0) }}
            className='group w-[320px] h-[512px] flex flex-col '>
            {/* image */}
            <div className=' transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
            {/* name */}
            <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

              <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>DudePerfect</div>
                <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

              </div>
              {/* pitch text */}
              <div

                className={hover == 5 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                Official Riot Games store on dropstate where pixels meet passion.
                Explore exclusive gaming gear inspired by your favorite titles.</div>
              {/* link to storefront */}
              <Link className='mt-[56px] mx-auto flex flex-row '
                href='#'>
                <div
                  className={hover == 5 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black ' : 'hidden'}>
                  Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                </div>
              </Link>

            </div>
          </div>
          <div
            onMouseEnter={(e) => { setHover(6) }}
            onMouseLeave={(e) => { setHover(0) }}
            className='group w-[320px] h-[512px] flex flex-col '>
            {/* image */}
            <div className=' transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
            {/* name */}
            <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

              <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>DudePerfect</div>
                <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

              </div>
              {/* pitch text */}
              <div

                className={hover == 6 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                Official Riot Games store on dropstate where pixels meet passion.
                Explore exclusive gaming gear inspired by your favorite titles.</div>
              {/* link to storefront */}
              <Link className='mt-[56px] mx-auto flex flex-row '
                href='#'>
                <div
                  className={hover == 6 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black' : 'hidden'}>
                  Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
      {/* trendingDrops*/}
      <div className='mt-[121px] w-full flex  '>
        {/* drops */}
        <div className='relative flex flex-row  w-full justify-center '>
          {/* header relative to artists section*/}
          <div className='absolute -top-[106px] left-[38%]  w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
            drops
            <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'>* trending</div>

          </div>
          {/* single card */}
          <div
            className='group z-10 w-[330px] h-[400px] flex flex-col bg-slate-200  '>.
          </div>
          <div
            className='group z-10 w-[330px] h-[400px] flex flex-col bg-slate-300 '>.
          </div>
          <div
            className='group z-10 w-[330px] h-[400px] flex flex-col bg-slate-400 '>.
          </div>


        </div>
      </div>
      {/* themes */}
      <div className='w-full  mt-[108px]'>
        {/* header relative  */}
        <div className=' w-full relative grid grid-cols-3 grid-flow-row gap-[8px]   '>
          {/* header relative to themes section*/}
          <div className='absolute -top-[106px] left-[38%]  w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
            themes
            <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'>* trending</div>

          </div>
          {/* single card */}
          <div
            className='group z-10 max-w-[616px] h-[280px] flex flex-col  bg-slate-200  '>
            <div className=' invisible group-hover:visible flex flex-col  justify-center items-center text-black  '>
              {/* logo */}
              <div className='mt-[63px] mb-[10px]'>Logo</div>
              {/* text head */}
              <div className='mb-[26px]'>HEADER</div>
              {/* text body */}
              <div className='mb-[54px] '> text body lorem epsum has has </div>

            </div>
          </div>
          {/* single card */}

          <div
            className='group z-10 max-w-[616px] h-[280px] flex flex-col  bg-slate-300 '>
            <div className=' invisible group-hover:visible flex flex-col  justify-center items-center text-black  '>
              {/* logo */}
              <div className='mt-[63px] mb-[10px]'>Logo</div>
              {/* text head */}
              <div className='mb-[26px]'>HEADER</div>
              {/* text body */}
              <div className='mb-[54px] '> text body lorem epsum has has </div>

            </div>
          </div>
          {/* single card */}

          <div
            className='group z-10 max-w-[616px] h-[280px] flex flex-col bg-slate-400 '>
            <div className=' invisible group-hover:visible flex flex-col  justify-center items-center text-black  '>
              {/* logo */}
              <div className='mt-[63px] mb-[10px]'>Logo</div>
              {/* text head */}
              <div className='mb-[26px]'>HEADER</div>
              {/* text body */}
              <div className='mb-[54px] '> text body lorem epsum has has </div>

            </div>
          </div>
          {/* single card */}
          <div
            className='group z-10 max-w-[616px] h-[280px] flex flex-col bg-slate-200  '>.
          </div>
          {/* single card */}

          <div
            className='group z-10 max-w-[616px] h-[280px] flex flex-col bg-slate-300 '>.
          </div>
          {/* single card */}

          <div
            className='group z-10 max-w-[616px] h-[280px] flex flex-col bg-slate-400 '>.
          </div>


        </div>
      </div>
      {/* hook for artists */}
      <div className='w-full relative  flex justify-center items-center  mt-[1822px] bg-black h-[373px] '>
        {/* header relative centered */}
        <div className='absolute flex flex-row items-center gap-[31px] w-[1168px] -top-[159px] h-[294px]   border-black border-[5px] bg-white'>
          {/* logo */}
          <div className=' ml-[75px] flex w-[130px] h-[170px] bg-slate-300'></div>
          {/* text */}
          <div className='flex flex-col gap-[5px] font-DM_Sans font-normal text-[48px] text-black leading-normal text-center '>
            {/* first */}
            <div className='-mb-[15px]'> make money</div>
            {/* second */}
            <div>as an artist</div>
          </div>
        </div>
      </div>
      {/* footer */}

    </main>
  )
}
