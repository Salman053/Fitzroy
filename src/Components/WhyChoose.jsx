import React from 'react'
import Button from './SmallComponents/Button'

function WhyChoose({ContactSideState,heading=true,sideImg=false ,button=true,ButtonName,className, para1, para2, para1className, para2className, para3, para3className,bg }) {
  return (
    <div className={`px-5 py-5  xl:mb-12  xl:flex-row xl:gap-12 flex flex-col gap-5 ${className}  `} style={{backgroundImage:`url(${bg?bg:''})`}}>
      {sideImg&&<div data-aos="fade-up" className="hidden 2xl:w-[50%]  relative xl:flex flex-col  w-[60%]">
        <img  className='w-[40%] 2xl:w-[35%] 2xl:[30%] object-cover 2xl:h-[100%] h-[70%] hover:translate-y-3 hover:translate-x-3 trans2 hover:rotate-5 -rotate-3 absolute cursor-pointer top-[10%] z-10 rounded-lg self-start' src="https://images.unsplash.com/photo-1603483080228-04f2313d9f10?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img  className='w-[40%] 2xl:w-[35%] object-cover 2xl:h-[100%] h-[70%] hover:translate-y-3 hover:translate-x-3 trans2 hover:rotate-6 -rotate-6 absolute cursor-pointer top-[60%] rounded-lg  self-center' src="https://images.unsplash.com/photo-1607305051990-a22529a4d51b?q=80&w=411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='w-[40%] 2xl:w-[35%] object-cover 2xl:h-[100%] h-[70%]  hover:translate-y-3 hover:translate-x-3 trans2  hover:rotate-12 -rotate-12 absolute cursor-pointer top-[10%] rounded-lg  self-end' src="https://images.unsplash.com/photo-1571687949921-1306bfb24b72?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>}
     <div className="xl:flex 2xl:gap-8 2xl:self-center  2xl:py-20 flex flex-col gap-6 xl:flex-col xl:gap-7">
     {heading&&<h2  data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="200" className='md:text-2xl uppercase text-xl font-semibold'>Why Choose <span className='text-Yellow'>fitzroy</span></h2>}
      {para1 &&
        <h3 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="200" className={`uppercase md:text-3xl text-2xl font-bold ${para1className}`}>
          {para1 && para1}
          ExClusive journeys and select departures to remote corners of <span className='text-Yellow'> africa</span>.
        </h3>
      }
      <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="200" data-aos-duration="900" className={`md:text-2xl text-xl text-LightBlack ${para2className}`}>
        {para2 ? para2 :

          "We specialise in providing curious travellers with access to regions and communities that would otherwise prove challenging."
        }
      </p>
      <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="200" data-aos-duration="900" className={`text-xl md:text-2xl  text-LightBlack ${para3className}`}>
     { para3?para3  :
"     We are committed to offering unique travel opportunities, to unusual destinations, that are mutually beneficial to all involved."  }    </p>
    {button&&  <Button  onClick={ContactSideState} >{ButtonName?ButtonName:'Contact US'}</Button>}
     </div>
    </div>
  )
}

export default WhyChoose