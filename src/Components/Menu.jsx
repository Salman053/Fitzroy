import React, {  useEffect, useRef, useState } from 'react'

import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Heading from './SmallComponents/Heading';
import img from '../assets/power-up-right-at-home.jpg.webp'

function Menu({MenuActive,CloseActive}) {
  const [background, setBackground] = useState('')
  const getRandomBackground = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  useEffect(() => {
    // Set initial background
    const randomBackground = getRandomBackground(imgs);
    setBackground(randomBackground);

    // Change background every 5 seconds
    const intervalId = setInterval(() => {
      const newBackground = getRandomBackground(imgs);
      setBackground(newBackground);
    }, 5000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const imgs= ["https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614088459293-5669fadc3448?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ]

  return (
    <div  className={`Menu min-h-[100vh] min-w-[100vw] trans flex flex-col gap-2  ${MenuActive?'translate-x-0':'translate-x-[100vw]'}  bg-white px-10 md:py-28 py-12 z-50 fixed top-0 `}>
        <RxCross1 className={`close absolute top-5 text-2xl md:text-4xl cursor-pointer hover:text-Yellow trans right-5`} onClick={CloseActive}/>
        <div className="logo absolute top-6 blink">
        <Heading className={'  left-0 '} heading={'Fitzroy'} />
      </div>
        <div className="menus flex flex-col gap-6 mt-8 ">
          <h3  onClick={CloseActive} className='uppercase  font-semibold text-DarkGray hover:text-Yellow trans cursor-pointer md:text-2xl'><Link className='' to={'/'} >Home</Link></h3>
          <h3  onClick={CloseActive} className='uppercase font-semibold text-DarkGray hover:text-Yellow trans cursor-pointer  md:text-2xl'><Link to={'/about'} >About us</Link></h3>
          <h3 onClick={CloseActive} className='uppercase font-semibold text-DarkGray hover:text-Yellow trans cursor-pointer  md:text-2xl'><Link to={'/destination'} >Destination</Link></h3>
          <h3 onClick={CloseActive} className='uppercase font-semibold text-DarkGray hover:text-Yellow trans cursor-pointer  md:text-2xl'><Link to={'/'} >Departure</Link></h3>
          <h3  onClick={CloseActive} className='uppercase font-semibold text-DarkGray hover:text-Yellow trans cursor-pointer  md:text-2xl'><Link to={'/contact'} >Contact</Link></h3>
        </div>
        <div className=" w-[100%] h-[40vh] rounded-3xl overflow-hidden  self-center">
          <img  src={background} className='w-full h-full object-cover hover:scale-105 trans2'  alt="img" />
        </div>
    </div>
  )
}

export default Menu