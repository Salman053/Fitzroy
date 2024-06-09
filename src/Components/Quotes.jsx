import React from 'react'
import { LuQuote } from "react-icons/lu";


function Quotes() {
  return (
    <div className={`flex flex-col  md:py-12 gap-5 p-5 relative bg-cover bg-center`} style={{backgroundImage:`url(https://images.unsplash.com/photo-1532154078493-c1c3eef2023c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hcHxlbnwwfHwwfHx8MA%3D%3D)`}} >
      <div className="overlay w-full h-full bg-black opacity-40 absolute top-0 left-0"></div>
      <LuQuote  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000"  className='text-white z-10 text-3xl md:text-6xl'/>
      <div className="content z-10 flex flex-col gap-5">
          <h3 data-aos="fade-right"  className='text-white md:text-2xl uppercase text-xl  font-semibold'>Fitzroy are true specialists in acessing <span className='text-Yellow ' >the wilderness</span>. they know where to go and importantly,when to go there highly <span className='text-Yellow underline'>recommended</span></h3>
          <div className="flex flex-col gap-3 md:w-[40%]">
          <h4 data-aos="fade-right" data-aos-delay="1000"  className='uppercase  md:text-2xl font-semibold text-Yellow'>ed charles</h4>
          <p data-aos-delay="2000"  data-aos="fade-right" className='uppercase font-semibold text-white md:text-xl'><span className='text-Yellow'>bafta</span> & <span className='text-Yellow'>Emmy </span>Award winnig film producer of bbc's planet earth 2 and a perfect planet</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="1000" className="img bg-cover bg-center  w-[95%] py-3 cursor-pointer  relative md:self-start h-[30vh] md:h-[50vh] self-center flex items-end px-4 xl:w-[80%] xl:h-[55vh] text-white uppercase xl:bg-center" style={{backgroundImage:`url(https://images.unsplash.com/photo-1516357231954-91487b459602?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D)`}}>
            <h3 data-aos="fade-right" data-aos-delay="1000" className='text-2xl font-semibold z-10 '>ED charles</h3>
            <div className="overlay w-full h-full bg-black opacity-30 top-0 left-0 absolute hover:opacity-50 trans2"></div>
          </div>
      </div>
    </div>
  )
}

export default Quotes