import React from 'react'

function Card({animatedimg=true,img,className,Content,ContentClassName,cardKey,cardKeyclassName}) {
  return (
    <div  data-aos='fade-up' data-aos-delay="1000" className={` relative min-w-[70%] md:min-w-[40%] bg-cover  flex place-items-end    flex-1 ${className}`} style={{backgroundImage:`url(${img?img:'https://images.unsplash.com/photo-1506183898222-eefad9f06350?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmVzdCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D'})`}}>
      <div className="overlay top-0 left-0 w-full h-full absolute bg-black opacity-30 hover:opacity-60 trans2 cursor-pointer">
      </div>
       <h3 data-aos="fade-right" data-aos-delay="1000"  className={`z-10 uppercase  font-bold text-2xl text-white ml-3 mb-3 ${ContentClassName}`}><span className={`text-Yellow ${cardKeyclassName} `}>{cardKey?cardKey:'Destination'} <br /> </span>{Content?Content:'Content'}
      </h3>
      {animatedimg&&<img src={animatedimg} className='w-[40%] xl:w-[80%] md:w-[30%]' alt="" /> }
      </div>
  )
}

export default Card