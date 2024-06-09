import React from 'react'
import logo from '../assets/logo.webp'
import Button from './SmallComponents/Button'
import Heading from './SmallComponents/Heading'
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Header({ MenuState,CloseActive }) {
  return (
    <div className="top-0 sticky z-10 w-full">
      <div  data-aos="zoom-in" data-aos-once="true" className=' flex   py-3 md:py-4 headerContainer   items-center justify-between px-5 '>
      <div className="logo blink">
        <Heading className={' '} heading={'Fitzroy'} />
      </div>

      <div className="icon xl:hidden" onClick={() => MenuState()} >
        <HiOutlineMenu className='text-2xl bg-blend-difference z-10 md:text-4xl cursor-pointer' />
      </div>
      <div className="menu hidden xl:flex  gap-9 items-center">
        <h3 onClick={CloseActive} className='uppercase font-semibold text-DarkGray xl:text-xl trans cursor-pointer md:text-2xl'><Link className='xl:text-Yellow trans2 hover:text-yellow-600 ' to={'/'} >Home</Link></h3>
        <h3 onClick={CloseActive} className='uppercase font-semibold text-DarkGray xl:text-xl trans cursor-pointer  md:text-2xl'><Link className='hover:text-yellow-600 trans2  xl:text-Yellow' to={'/about'} >About us</Link></h3>
        <h3 onClick={CloseActive} className='uppercase font-semibold text-DarkGray xl:text-xl trans cursor-pointer  md:text-2xl'><Link className='xl:text-Yellow trans2 hover:text-yellow-600 ' to={'/destination'} >Destination</Link></h3>
        <h3 onClick={CloseActive} className='uppercase font-semibold text-DarkGray xl:text-xl trans cursor-pointer  md:text-2xl'><Link className='xl:text-Yellow trans2 hover:text-yellow-600 ' to={'/'} >Departure</Link></h3>
        <h3 onClick={CloseActive} className='uppercase font-semibold text-DarkGray xl:text-xl trans cursor-pointer  md:text-2xl'><Link className='xl:text-Yellow trans2 hover:text-yellow-600 ' to={'/contact'} >Contact</Link></h3>
        <Button>Get in Touch</Button>
      </div>
    </div>
    </div>
  )
}

export default Header