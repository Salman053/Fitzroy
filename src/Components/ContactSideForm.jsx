import React from 'react'
import HiddenScreen from './SmallComponents/HiddenScreen'
import Input from './SmallComponents/Input'
import { MdCancel } from "react-icons/md";
import CountryCodes from './CountryCodes';
import Button from './SmallComponents/Button';

function ContactSideForm({ContactSideClose,contactState}) {
  return (
    <>
      <HiddenScreen ClassName={`px-5 xl:px-32 py-4 xl:py-8  xl:overflow-y-auto  md:py-28 ${contactState?'translate-x-0':'translate-x-[100vw]'} `}>
       <div className="flex flex-col gap-1 xl:gap-2 md:gap-6">
       <MdCancel onClick={ContactSideClose} className={`absolute xl:right-16 md:text-6xl right-4 md:top-12  top-3 text-white text-2xl cursor-pointer hover:scale-125 trans `}/>
        <h3 className=' font-semibold text-xl uppercase tracking-wide text-Yellow md:text-2xl'>basic Details</h3>

        <form action="" className='flex flex-col xl:gap-2 gap-2 md:gap-6 '>
          <fieldset className='flex flex-col gap-3 md:gap-5'>
            <legend className='text-lg md:text-xl font-semibold mb-4 uppercase text-white'>Your Name *</legend>
          <input className={` border-white p-1 md:text-2xl focus-within:outline-none text-white placeholder:text-gray bg-transparent border `} placeholder={`First Name`}/>
          <input className={` border-white p-1 md:text-2xl focus-within:outline-none text-white placeholder:text-gray bg-transparent border `} placeholder={`Surname`}/>
          </fieldset>
          <fieldset className='flex flex-col gap-3 md:gap-5'>
            <legend className='text-lg md:text-xl font-semibold mb-4 uppercase text-white'>Your Email Address *</legend>
          <input className={` border-white p-1 md:text-2xl focus-within:outline-none text-white placeholder:text-gray bg-transparent border `} type='email' placeholder={`Email Address`}/>
          </fieldset>
          <fieldset className='flex flex-col gap-3 md:gap-5'>
            <legend className='text-lg md:text-xl font-semibold uppercase mb-4 text-white'>Phone number *</legend>
            <CountryCodes/>
          <input className={` border-white p-1 md:text-2xl focus-within:outline-none text-white placeholder:text-gray bg-transparent border `} type='tel'  placeholder={`3401 2312334`}/>
          </fieldset>
          <fieldset className='flex flex-col gap-3 md:gap-5'>
            <legend className='text-lg md:text-xl font-semibold mb-4 uppercase text-white'>Your Location *</legend>
          <input className={` border-white md:text-2xl p-1 focus-within:outline-none text-white placeholder:text-gray bg-transparent border `} type='email' placeholder={`Email Address`}/>
          </fieldset>
          <Button parentClassName={`self-center`} className={`bg-white  hover:bg-Yellow  hover:text-DarkGray`}>Submit</Button>
        </form>
       </div>
      </HiddenScreen>
    </>
  )
}

export default ContactSideForm