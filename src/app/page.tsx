'use client'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { GoArrowUpRight } from "react-icons/go";
import React, { useEffect, useState } from 'react';
import Themes from './components/themes';
import Drops from './components/drops';
import TopArtists from './components/topArtists';
import ArtistFooter from './components/artistFooter';
import NavBar from './components/navbar';
import UserOpt from './components/userOptions';
import Brand from './components/brand';
import Banner from './components/banner';
import TrendSetters from './components/trendsetters';
import Category from './components/category';
import BestSellers from './components/bestSellers';
// footers 
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
interface Items {
  drops:
    {
      img:string,
      name:string,
      artistname:string,
      price:number

    }[],
  creators:
    {
      img:string,
      name:string,
      tag:string,
      drops:number
    }[],
  themes:{
    img:string,
    name:string,
    drops:number,
  }[],
}
enum KEY {
 DROP= "drops",
 THEME= "themes",
  CREATOR="creators",
}
export default function Home() {
  const trendingDrops = [
    { img: "https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801" },
    { img: "https://assets.bonkerscorner.com/uploads/2021/08/07164738/Look-3-2179.jpg" },
    { img: "https://m.media-amazon.com/images/I/614l7-eEh3L._AC_UY1100_.jpg" },
    { img: "https://assets.bonkerscorner.com/uploads/2021/08/07164738/Look-3-2179.jpg" },

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
  //   useEffect(() => {
  //     const script= document.querySelector(".card-selector")?.cloneNode(true)
  //     const section=document.querySelector(".section")
  //     script?section?.appendChild(script):null
  // return ()=>{
  //   script?section?.removeChild(script):null
  // }

  // }, [])
  const [searchQuery, setSearchQuery] = useState('');
  const [list,setList]=useState(false);
  const [key,setKey]=useState<KEY>(KEY.DROP);
  const [active,setActive]=useState(false);
  const [active1,setActive1]=useState(false);
  const [items,setItems]=useState<Items>({
    drops:[{
      img:'https://images.hdqwalls.com/download/spider-man-miles-morales-artwork-4k-nr-2048x1152.jpg',
      name:"Batman Origins",
      price:749,
      artistname:"bruce Wayne",
    },
    {
      img:'https://images.hdqwalls.com/download/spider-man-miles-morales-artwork-4k-nr-2048x1152.jpg',
      name:"Batman Origins",
      price:749,
      artistname:"bruce Wayne",
    },
    {
      img:'https://images.hdqwalls.com/download/spider-man-miles-morales-artwork-4k-nr-2048x1152.jpg',
      name:"Batman Origins",
      price:749,
      artistname:"bruce Wayne",
    },
    
  ],
  creators:[
    {
      img:'https://c4.wallpaperflare.com/wallpaper/879/54/385/anime-boys-neon-hd-wallpaper-preview.jpg',
      name:"bruce Wayne",
      tag:"Superhero",
      drops:285
    },
    {
      img:'https://c4.wallpaperflare.com/wallpaper/879/54/385/anime-boys-neon-hd-wallpaper-preview.jpg',
      name:"bruce Wayne",
      tag:"Superhero",
      drops:285
    },    {
      img:'https://c4.wallpaperflare.com/wallpaper/879/54/385/anime-boys-neon-hd-wallpaper-preview.jpg',
      name:"bruce Wayne",
      tag:"Superhero",
      drops:285
    },
  ],
  themes:[
    {
      img:"https://m.media-amazon.com/images/I/614l7-eEh3L._AC_UY1100_.jpg",
      name:"one Piece",
      drops:200,

    },
    {
      img:"https://m.media-amazon.com/images/I/614l7-eEh3L._AC_UY1100_.jpg",
      name:"one Piece",
      drops:200,

    },
    {
      img:"https://m.media-amazon.com/images/I/614l7-eEh3L._AC_UY1100_.jpg",
      name:"one Piece",
      drops:200,

    },
  ],
  })

  // const targetDiv=document.getElementById('list');
  return (
    <main 
    onClick={()=>{if(!active1 && !active)setList(false)}}
    id='full'
    className="flex min-h-screen flex-col items-start  bg-white ">
      {/* banner  */}
      <Banner />
      {/* brandName and userOptions */}
      <div className='flex flex-row h-[65px] justify-between w-full  items-center  text-black font-Plus_Jakarta_Sans mb-[37px]'>
        <div className='flex flex-row gap-[40px] items-center '>
              {/* brandName and sometext */}
        <Brand />
        {/* search bar */}
          <div 
          // onBlur={()=>setActive(false)}
          id='list'
          className=' relative  flex flex-row items-center gap-[67px] px-[12px] w-[370px] h-[46px] ring-2 ring-black rounded-md'>
          <input
          className=' flex outline-none  placeholder-black  w-[254px] h-[19px] text-[14px] text-[#171717] text-start font-meidum font-Plus_Jakarta_Sans '
          placeholder='Search for anything but your soul :)'
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>{setList(true)}}
          onMouseEnter={()=>setActive1(true)}
          onBlur={()=>{if(!active)setList(false);}}
          onMouseLeave={()=>setActive1(false)}
         
          />
          <div className=' flex  justify-center items-center text-white text-[15px] font-medium font-Plus_Jakarta_Sans 
          leading-normal w-[22px] h-[22px] rounded-[4px] text-center  bg-black p-2'>/</div>
          {/* dropdown search list  */}
          {list && (
            <div 
            onMouseEnter={()=>setActive(true)}
            onMouseLeave={()=>setActive(false)}
            className=' list absolute z-30 flex flex-col -bottom-[260px] left-0 w-[370px] h-[250px] p-[16px] bg-white ring-[1px] ring-black rounded-md'>
              {/* navigation tabs */}
              <div className='flex w-full border-b-[1px] border-[#AEAEAE]  flex-row items-end justify-start   gap-[24px] text-[14px] font-medium text-[#AEAEAE] '>
                <p className={(key=='drops'?'text-black border-black border-b-[1px] ':'')+'p-1 hover:cursor-pointer '} onClick={()=>setKey(KEY.DROP)}>Drops</p>
                <p className={(key=='creators'?'text-black border-black border-b-[1px] ':'')+'p-1 hover:cursor-pointer '} onClick={()=>setKey(KEY.CREATOR)}>Creators</p>
                <p className={(key=='themes'?'text-black border-black border-b-[1px] ':'')+'p-1 hover:cursor-pointer '} onClick={()=>setKey(KEY.THEME)}>Themes</p>
              </div>
              <div className='w-full h-full flex  overflow-y-scroll no-scrollbar'>
                <ul className='w-full h-fit flex flex-col gap-[16px] mt-[16px] mb-[16px]'>
                  {key==KEY.DROP?items.drops.filter((item:any)=>searchQuery!==''?item.name.includes(searchQuery):item).map((item:any,index)=>{
                    return (
                      <div
                      key={index} 

                      className='flex flex-row items-center justify-between  w-full h-fit'>
                        <div className='flex flex-row gap-[16px]'>
                        <div 
                        style={{backgroundImage:`url(${item.img})`}}
                      className='flex w-[39px] h-[48px] rounded-md bg-cover bg-center bg-no-repeat'></div>
                        <div className='flex flex-col items-start text-left pl-2 font-bold font-Plus_Jakarta_Sans '>
                          <p className='text-[16px] text-[#171717]'>{item.name}</p>
                            <p className='text-[12px] text-[#AEAEAE] font-medium'>@{item.artistname}
                              <RiVerifiedBadgeFill className='text-[12px] text-[#4967FF] inline-block ml-1 ' />
                            </p>
                        </div>
                        </div>

                        <div className='flex  flex-col items-center justify-center text-[16px] font-Plus_Jakarta_Sans font-bold leading-normal text-[#171717]'>₹{item.price}.00</div>
                      </div>
                    )
                  })
                  :key==KEY.CREATOR?items.creators.filter((item:any)=>searchQuery!==''?item.name.includes(searchQuery):item).map((item:any,index)=>{
                    return (
                      <div
                      key={index} className='flex flex-row items-center justify-between  w-full h-fit'>
                        <div className='flex flex-row gap-[16px]'>
                        <div
                        style={{backgroundImage:`url(${item.img})`}}
                        className='flex w-[48px] h-[48px] rounded-full bg-cover bg-center bg-no-repeat'
                        ></div>
                        <div className='flex flex-col items-start pl-2 font-bold font-Plus_Jakarta_Sans '>
                        <p className='text-[16px] text-[#171717]'>{item.name}
                        <RiVerifiedBadgeFill className='text-[12px] text-[#4967FF] inline-block ml-1 ' />
                        </p>
                          <p className='text-[12px] text-[#AEAEAE] font-medium'>{item.tag}</p>
                        </div>
                        </div>
                        <div className='flex  flex-col items-center justify-center text-[16px] font-bold leading-normal font-Plus_Jakarta_Sans text-[#171717]'>
                          <p className='-mb-[4px]'>{item.drops}</p>
                          <p className="text-[12px] text-[#AEAEAE] font-medium">drops</p>
                        </div>
                      </div>
                    )
                  }):items.themes.filter((item:any)=>searchQuery!==''?item.name.includes(searchQuery):item).map((item:any,index)=>{
                    return (
                      <div
                      key={index} className='flex flex-row items-center justify-between  w-full h-fit'>
                        <div className=' flex flex-row gap-[16px]'>
                        <div
                        className='flex w-[48px] h-[48px] rounded-[6px] bg-cover bg-center bg-no-repeat'
                        style={{backgroundImage:`url(${item.img})`}}
                        ></div>
                        <div className='flex  text-start font-bold font-Plus_Jakarta_Sans '>{item.name}</div>
                        </div>
                        <div className='flex  flex-col items-center justify-center text-[16px] font-bold font-Plus_Jakarta_Sans text-[#171717]'>
                          <p className='-mb-[4px]'>{item.drops}</p>
                          <p className="text-[12px] text-[#AEAEAE] font-medium">drops</p>

                        </div>
                      </div>
                    )
                  })
                  }
                </ul>
              </div>
              {/* search list  */}

            </div>
          )}
          </div>
        {/* navbar list */}
        {/* <div className='ml-[40px]'> */}
          <NavBar />
        {/* </div> */}

        </div>
        {/* userOptions */}
        <UserOpt />

      </div>

      {/* topArtists */}
      <div className='w-full flex flex-col mt-[102px]'>
        {/* artists */}
        <TopArtists topArtists={ArtistCards} />
      </div>
      {/* trendingDrops*/}
      <div className='mt-[121px] w-full flex  '>
        {/* drops */}
        <Drops tdrops={trendingDrops} />
      </div>
      {/* themes */}
      <div className='w-full  mt-[200px]'>
        <Themes themes={themes} />

      </div>
      {/* category */}
      <div className='flex w-full items-center justify-center p-1 mt-[168px]'>
      <Category tdrops={trendingDrops} />
      </div>
      {/* bestSellers  */}
      <div className='flex w-full items-center justify-center p-1 mt-[168px]'>
        <BestSellers/>
      </div>
      {/* trendsetters */}
      <div className='flex w-full items-center justify-center p-1 mt-[168px]'>
        <TrendSetters/>
      </div>

      {/* hook for artists */}
      <div className='w-full relative  flex justify-center items-center  mt-[428px] bg-black h-[821px] '>
        {/* artists footer */}
        <ArtistFooter />
        <div className='flex  flex-col items-start pl-[120px] mt-[223px] w-full h-fit'>
          {/* dropstate */}
          <div className='flex -ml-[40px] text-white '>
           <Brand />
          </div>
          {/* footer list divs & socials */}
          <div
          className='flex flex-row gap-[470px] text-white  font-Plus_Jakarta_Sans  font-normal '
          >
            {/* footerlist */}
            <div className='flex flex-row  gap-[172px] items-start pt-[80px]'>
              <div className='flex flex-col font-bold text-[20px] items-start text-start gap-[32px] '>
                Company
                <ul className='flex flex-col gap-[16px] font-normal text-[#AEAEAE]'>
                  <li>Blog</li>
                  <li>AboutUs</li>
                  <li>Careers</li>
                  <li>Contactus</li>
                </ul>
              </div>
              <div className='flex flex-col font-bold text-[20px] items-start text-start gap-[32px]'>
                MarketPlace
                <ul className='flex flex-col gap-[16px] font-normal text-[#AEAEAE]'>
                  <li>Shop Products</li>
                  <li>Become a creator</li>
                  <li>Delivery</li>
                  <li>Creator Agreement</li>
                  <li>Retuns and cancellation</li>


                </ul>
              </div>              
              <div className='flex flex-col font-bold text-[20px] items-start text-start gap-[32px] '>
                Help
                <ul className='flex flex-col gap-[16px] font-normal text-[#AEAEAE]'>
                  <li>GuideLines</li>
                  <li>CopyRight Policy</li>
                  <li>Privacy Policy</li>
                  <li>Terms & conditions</li>
                  <li>Community Guidelines</li>
                </ul>

              </div>


            </div>
            {/* socials */}
            <div className='flex flex-row   items-start pt-[80px]'>
            <div className='flex flex-col font-bold text-[20px] items-start text-start gap-[32px] '>
                <p className='pl-[4px]'>Social</p>

                <ul className='flex flex-row gap-[16px] font-normal text-[#AEAEAE]'>
                  <FaFacebook className='w-[50px] h-[50px]  bg-transparent  hover:cursor-pointer' href='#'></FaFacebook>
                  <FaWhatsapp className='w-[50px] h-[50px]  bg-transparent  hover:cursor-pointer' href='#'></FaWhatsapp>
                  <FaInstagram className='w-[50px] h-[50px]  bg-transparent  hover:cursor-pointer' href='#'></FaInstagram>
                  <GrYoutube className='w-[50px] h-[50px] bg-transparent  hover:cursor-pointer' href='#'></GrYoutube>
                </ul>

              </div>
            </div>
          </div>
          {/* copyright */}
          <div className='flex mt-[140px] mb-[72px]  w-full text-center items-center justify-center font-Plus_Jakarta_Sans font-normal text-[16px] '>
          © dropstate LLP  2023. All Rights Reserved
          </div>

        </div>
      </div>
      {/* general footer */}

    </main>
  )
}
