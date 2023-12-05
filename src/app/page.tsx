'use client'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { GoArrowUpRight } from "react-icons/go";
import React, { useEffect } from 'react';
import machine from "../app/assets/machine.png"
import logo from "../app/assets/logo.svg"
import logo1 from "../app/assets/broken-link-icon.svg"

export default function Home() {
  const trendingDrops = [
    { img: "https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801" },
    { img: "https://assets.bonkerscorner.com/uploads/2021/08/07164738/Look-3-2179.jpg" },
    { img: "https://m.media-amazon.com/images/I/614l7-eEh3L._AC_UY1100_.jpg" },

  ]
  const themes = [
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/879/54/385/anime-boys-neon-hd-wallpaper-preview.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://images.hdqwalls.com/download/spider-man-miles-morales-artwork-4k-nr-2048x1152.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://wallpapers.com/images/hd/rocket-league-hd-neon-car-bmwm76bljegylf2e.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Batman-Damned-Comic-Interview.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2022-01/34a3c220-19b7-45d4-9c80-8c2bc8006486.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/776/58/423/robot-mech-animals-computer-parts-nft-cgi-hd-wallpaper-preview.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },

  ]
  const ArtistCards = [
    {
      name: 'ElonMusk',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://cdn.midjourney.com/42a84bda-1597-428a-894c-f005a21632e5/grid_0_640_N.webp',
      link: 'https://www.google.com/'
    },
    {
      name: 'Budweiser',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://eazywagon.com/cdn/shop/products/EW138lowres_69f2fd10-150f-4100-ac9c-c8062d3363b2_800x.jpg?v=1667377215',
      link: 'https://www.google.com/'
    },
    {
      name: 'Riot Games',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fblogoflegends.com%2Ffiles%2F2019%2F10%2FCopy-of-Ekko-1-850x560.jpg',
      link: 'https://www.google.com/'
    },
    {
      name: 'DudePerfect',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://i.pinimg.com/originals/c8/fb/36/c8fb36829a5ffc0d5768c7bd16c81f55.jpg',
      link: 'https://www.google.com/'
    },
    {
      name: 'BoredApeYatchClub',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://images.t3n.de/news/wp-content/uploads/2022/04/bored-ape-otherside.jpg?class=structuredData-small',
      link: 'https://www.google.com/'
    }
  ]
  const [hover, setHover] = React.useState(-1)
  //   useEffect(() => {
  //     const script= document.querySelector(".card-selector")?.cloneNode(true)
  //     const section=document.querySelector(".section")
  //     script?section?.appendChild(script):null
  // return ()=>{
  //   script?section?.removeChild(script):null
  // }

  // }, [])
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
          <div className='absolute  -top-[106px] left-[38%] w-fit   
           h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
            artists
            <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'>
              <span className=' font-DM_Sans font-bold '>*</span> trending</div>
          </div>
          <div className='  flex w-full overflow-x-scroll no-scrollbar '>
            {/* section1 */}
            <div className=' flex flex-row w-full animate-run  '>


              {
                new Array(2).fill(0).map((item) => {
                  return ArtistCards.map((card, index) => (
                    <div
                      key={index * 2}
                      onMouseEnter={(e) => { setHover(index * 2) }}
                      onMouseLeave={(e) => { setHover(-1) }}
                      className='group min-w-[20%]  h-[512px] flex flex-col  '>
                      {/* image */}
                      <div
                        style={{ backgroundImage: `url(${card.image})` }}
                        className=' bg-cover bg-center bg-no-repeat  transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
                      {/* name */}
                      <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

                        <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                          <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>{card.name}</div>
                          <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

                        </div>
                        {/* pitch text */}
                        <div

                          className={hover == index * 2 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                          {card.pitch}</div>
                        {/* link to storefront */}
                        <Link className='mt-[56px] mx-auto flex flex-row '
                          href={card.link}>
                          <div
                            className={hover == index * 2 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black' : 'hidden'}>
                            Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                          </div>
                        </Link>

                      </div>
                    </div>


                  ))
                })
              }
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
            <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'><span className=' font-DM_Sans font-bold '>*</span> trending</div>

          </div>
          {/* single card */}
          {
            new Array(3).fill(0).map((item, index) => (
              <div
                className='bg-center bg-cover bg-no-repeat group z-10 w-[330px] h-[400px] flex flex-col bg-slate-200'
                style={{ backgroundImage: `url(${trendingDrops[index].img})` }}
                key={index}>.
              </div>

            ))
          }


        </div>
      </div>
      {/* themes */}
      <div className='w-full  mt-[200px]'>
        {/* header relative  */}
        <div className=' w-full relative grid grid-cols-3 grid-flow-row gap-[8px]   '>
          {/* header relative to themes section*/}
          <div className='absolute -top-[106px] left-[38%]  w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
            themes
            <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'><span className=' font-DM_Sans font-bold '>*</span> trending</div>

          </div>
          {/* single card */}
          {
            themes.map((theme, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${theme.img})` }}
                className='bg-cover bg-center bg-no-repeat group z-10 max-w-[616px] h-[280px] flex flex-col bg-slate-400 '>
                <div className='transition-all transform duration-150 ease-in-out w-full h-full invisible group-hover:visible flex flex-col  justify-center 
              items-center text-black group-hover:bg-black group-hover:bg-opacity-40 group-hover:backdrop-blur-sm'>
                  {/* logo */}
                  <div className='mt-[63px] mb-[20px]'>
                    <Image
                      src={logo1}
                      alt="logo"
                      className='object-center object-cover '
                      width={90}
                      height={90}
                    />
                  </div>
                  {/* text head */}
                  <div className='mb-[26px] text-white font-Plus_Jakarta_Sans font-bold text-[20px] '>NEED FOR SPEED</div>
                  {/* text body */}
                  <div className='mb-[54px] text-white text-[14px] font-Plus_Jakarta_Sans font-medium  text-center '> Unleash high-octane fashion that accelerates<br />
                    your look to the finish line </div>

                </div>

              </div>
            ))

          }




        </div>
      </div>
      {/* hook for artists */}
      <div className='w-full relative  flex justify-center items-center  mt-[1822px] bg-black h-[373px] '>
        {/* header relative centered */}
        <div className='absolute flex flex-row items-center gap-[31px] w-[1168px] -top-[159px] h-[294px]   border-black border-[5px] bg-white'>
          {/* logo */}
          <div
            className=' bg-slate-200 ml-[75px] flex w-[130px] h-[170px]'>
            <Image
              src={machine}
              alt="money machine"
              className=' object-cover object-center '
              width={130}
              height={170}
            />
          </div>
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
