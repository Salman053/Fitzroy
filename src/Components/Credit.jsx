import React from 'react'

function Credit() {
  return (
   <div className="px-5 py-4 flex flex-col gap-8   overflow-hidden ">
     <div className=' flex xl:inline-flex  gap-3 items-center xl:justify-around justify-center cursor-pointer '>
      <h3 data-aos="fade-right" data-aos-easing="ease-in-out"  data-aos-duration="1000" className="text-Yellow md:text-md md:self-end xl:hidden   font-bold tracking-widest text-xl v-rl  ">
      Credit-Tawi Lodge
      </h3>
      <div data-aos="fade-down" data-aos-easing="ease-in-out"  data-aos-duration="1000" style={{backgroundImage:`url(${'https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`}} className=" min-h-[30vh] md:min-h-[30vh] md:min-w-[40vw] xl:min-h-[40vh]   min-w-[35vw] xl:min-w-[41vw] pl-2 py-5  trans2   bg-cover bg-center ">
      <h3 className='uppercase md:text-3xl text-white font-bold text-sm'><span className='text-Yellow'>Private safaris</span> <br /> tailer made</h3>
      </div>
      <div data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-duration="1000" style={{backgroundImage:`url(${'https://plus.unsplash.com/premium_photo-1669482964423-32a663e2a441?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`}} className=" min-h-[30vh] md:min-h-[30vh]  xl:min-h-[40vh] md:min-w-[40vw] min-w-[35vw]  xl:min-w-[41vw] pl-2 py-5   trans2 bg-cover bg-center ">
      <h3 className='uppercase md:text-3xl text-white font-bold text-sm'><span className='text-Yellow'>Private Places</span> <br /> tailer made</h3>
      </div>
    </div>
    <div className="whereOperate flex flex-col gap-4 ">
      <h3 data-aos="fade-right" data-aos-easing="ease-in-out"  data-aos-duration="1000" className="text-Yellow md:text-xl font-bold  uppercase text-2xl ">Where we operate</h3>
      <div className="content flex flex-col gap-6">
      <p data-aos="fade-right" data-aos-delay="1000" data-aos-easing="ease-in-out"  data-aos-duration="1000" className='text-xl md:text-2xl text-DarkGray'><span className='text-Yellow'>Fitzory Travel</span> excels at navigating the varied terrains of Africa, providing seamless safari experiences in some of the continent’s most extraordinary locations.</p>
    <p data-aos="fade-right"  data-aos-delay="1000"  data-aos-easing="ease-in-out"  data-aos-duration="1000" className='text-xl md:text-2xl text-DarkGray'>From the dynamic wilderness of <span className='text-Yellow'>Botswana</span>  to the verdant, wildlife-abundant forests of <span className='text-Yellow'>Uganda</span> , and the stark isolation of the <span className='text-Yellow'>Namibia</span> , our safaris are as diverse as they are memorable. </p>
      </div>
    </div>
   </div>

  )
}

export default Credit