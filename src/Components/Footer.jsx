import React from 'react'
import Input from './SmallComponents/Input'
import Button from './SmallComponents/Button'

function Footer() {
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000"  data-aos-delay="1000" className='bg-cover  relative px-5 py-6 bg-top mt-3' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1529395127437-69f960c43a23?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydCUyMHNhbmR8ZW58MHx8MHx8fDA%3D)` }} >
      <div className="w-full h-full hover:opacity-70 trans2 cursor-pointer absolute  top-0 left-0  bg-black opacity-35"></div>
      <div className=" flex items-center flex-col gap-2">
        <h2 className='text-white  inline z-10 text-6xl tracking-widest font-semibold uppercase'>Fitzroy</h2>
        <h3 className='text-white  inline z-10  text-center  text-lg font-semibold uppercase'>Receive Inspiration in your inbox</h3>
      </div>
      <form className='flex flex-col md:px-28 px-6 gap-4 mt-3 z-10' action="">
        <Input placeholder={`First Name`} />
        <Input placeholder={`Last Name`} />
        <Input type={`email`} placeholder={`Email`} />
        <div className=" z-10 flex  py-2 items-center gap-1 ">
          <input type="checkbox" className='self-center  ' name="" id="" />
          <span className='text-white  text-sm md:text-lg '>   I'm happy to recieve emails from Fitzroy Travel*</span>

        </div>
        <Button parentClassName={`z-10 self-center`} className={`bg-slate-100 trans2`}  >Submit Email</Button>
      </form>

      <div className="z-10 flex flex-col gap-4 py-6 px-5 items-center">
        <h3 className='text-xl uppercase z-10 font-bold  text-yellow-400 md:text-2xl'>Destinations</h3>
        <div className=" flex flex-wrap ">
          <h2 className='text-xl w-[50%] mb-2 z-10 cursor-pointer md:text-center   uppercase text-white font-bold hover:text-Yellow trans2'>Tanzanya</h2>
          <h2 className='text-xl w-[50%] mb-2 z-10 cursor-pointer  md:text-center  uppercase text-white font-bold hover:text-Yellow trans2'>Tanzanya</h2>
          <h2 className='text-xl w-[50%] mb-2  z-10 cursor-pointer md:text-center   uppercase text-white font-bold hover:text-Yellow trans2' >Zimbabwe</h2>
          <h2 className='text-xl w-[50%] mb-2 z-10  cursor-pointer md:text-center  uppercase text-white font-bold hover:text-Yellow trans2'>Uganda</h2>
          <h2 className='text-xl w-[50%] mb-2 z-10 cursor-pointer  md:text-center  uppercase text-white font-bold hover:text-Yellow trans2'>Tanzanya</h2>
          <h2 className='text-xl w-[50%] mb-2 z-10 cursor-pointer  md:text-center  uppercase text-white font-bold hover:text-Yellow trans2'>Kenya</h2>
        </div>
        <h3 className='text-4xl uppercase tracking-widest  text-yellow-100 font-semibold'>Fitzroy</h3>
      </div>
      <div className="z-10 flex flex-col gap-5 text-white items-center">
        <div className="z-10 flex flex-col items-center gap-2 font-semibold">
          <a href="tel:+44 1273 074 734 " className='md:text-2xl'>UK: +44 1273 074 734</a>
          <a href="tel:+44 1273 074 734" className='md:text-2xl'>USA: +44 1273 074 734</a>
        </div>
        <a className='z-10 md:text-xl cursor-pointer' href="mailto:salmankhanm859@gmail.com">salmankhanm859@gmail.com</a>
        <p className='z-10 text-justify md:text-2xl'>Studio 8, Beaconsfield Studios, 25 Ditchling Rise, Brighton, United Kingdom, BNI 4QL</p>
        <span className='z-10 uppercase text-sm font-semibold md:text-lg text-center'>Copyright 2023-2025 fitzroy-travel.com</span>
        .
      </div>
    </div>
  )
}

export default Footer