import React from 'react'
import Card from '../Components/Card'
import WhyChoose from '../Components/WhyChoose'
import Quotes from '../Components/Quotes'
import Footer from '../Components/Footer'
import useScrollToTop from '../Hook/USeScrollTop';

function Destinations() {
useScrollToTop();

  const CardDetails = [
    {
      content: "Zimbabwe",
      w:"w-[50%]",
      img: "https://images.unsplash.com/photo-1585317301603-7d9d675417e2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHppbWJhYndlfGVufDB8fDB8fHww",
      details: 'Home of the highest guiding standards in Africa, and exceptional walking safaris.'
    },
    {
      content: "uganda",
      w:"w-[40%]",
      img: "https://images.unsplash.com/photo-1551357212-38662e819996?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVnYW5kYXxlbnwwfHwwfHx8MA%3D%3D",
      details: "Uganda presents a varied safari offering, characterized by mountain gorillas and an expansive range of experiences."
    }
    ,{
      content:"Botswana",
      w:"w-[40%]",
      img:"https://images.unsplash.com/photo-1640690642852-cae8cdf55cde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvdHN3YW5hJTIwbGlvbnN8ZW58MHx8MHx8fDA%3D",
      details: "Botswana is a country that has a rich heritage and culture. It is a country that has a rich heritage and culture. It is a country that has a rich heritage and culture."
    }
    ,{
      content:"Kenya",
      w:"w-[50%]",
      img:"https://images.unsplash.com/photo-1585523658894-cc78fc2c8f67?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtlbnlhfGVufDB8fDB8fHww",
      details: "Pioneering tourism models and prolific wildlife, If anywhere were to lay claim of hosting the ‘soul of safari’ it may well be Kenya."
    }
  ]

  const experienceCardsDetails =[
    {
      img:'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D',
      content:"Experiences",
      cardKey:"UnForgettable",

    }
    ,
    {
      img:"https://images.unsplash.com/photo-1609040709366-f838072c65c2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXJpc3R8ZW58MHx8MHx8fDA%3D",
      content:"Impact",
      cardKey:"Positive",

    }
    ,{
      img:"https://images.unsplash.com/photo-1633867113487-5118d97e546d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvdXJpc3R8ZW58MHx8MHx8fDA%3D",
      content:"& Transparency",
      cardKey:"fairness",

    }
  ]
  return (
    <div>
      <Card  className={`h-[60vh] bg-center md:h-[40vh] xl:h-[60vh] xl:gap-7 xl:items-center `} cardKeyclassName={`text-xl xl:text-4xl `} img={`https://images.unsplash.com/photo-1555169145-b09a196d2c31?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFib3V0JTIwZm9yZXN8ZW58MHx8MHx8fDA%3D`} ContentClassName={`text-4xl xl:flex xl:gap-8 xl:flex-col xl:text-7xl`}  cardKey={`Our Destinations`} Content={`a world of wonders awaits you`} />
      <div className="xl:flex xl:px-2">
        <div className="">
        <h2 data-aos="fade-right" className='text-lg xl:text-2xl text-DarkGray uppercase m-5 font-bold'>Best <span className='text-Yellow'>Destinations</span></h2>
        <h2 data-aos="fade-right" data-aos-delay="1000" className='text-xl text-DarkGray uppercase m-5 font-bold'>Where do you want to  <span className='text-Yellow'>go</span></h2>
        <WhyChoose button={false} para3={'Be it a wildlife safari through Botswana’s Okavango Delta or an expedition through the desert landscapes of Chad, indigenous festivals of South Sudan to tracking lowland gorilla in Gabon — our team is in place to manage the often-complex logistical challenges on your behalf.'}
          para2={'Discover some of the varied destinations we cover, each area containing its own unique characteristics and personality. Within each country there are a diverse range of wildlife and landscapes to experience, of cultures to learn from, that reward those willing to explore on a deeper level.'} />
        </div>
        {/* <Card /> */}
      </div>
      <div className="px-5 py-4 flex gap-1 flex-col min-w-[100vw] md:flex-row md:justify-around flex-wrap">
        {
          CardDetails.map((item, index) => (
            <div key={index} className={` w-[100%]  xl:mb-2 h-[45vh]  relative md:w-[44%]  group   trans2 overflow-hidden  xl:${item.w}`}>
              <Card ContentClassName={`self-baseline p-2  group-hover:opacity-0 `} Content={item.content} className={`min-h-[100%] bg-center   hover:scale-105 trans2`} img={item.img} />
              <div className="absolute bottom-[2%] left-[2%] right-[2%] top-[2%]  w-[95%] h-[95%]      transparentbg blur- px-3 py-2  scale-y-0 flex items-end  group-hover:border-2 group-hover:border-white  origin-bottom overflow-hidden  group-hover:scale-y-100  trans  ">
                <p className='text-lg z-10  relative text-white text-nowrap group-hover:text-wrap  group-hover:opacity-95  opacity-0 trans2'>{item.details}</p>
              </div>
            </div>
          ))
        }
      </div>
      <Quotes/>
      <WhyChoose ButtonName={'About US'}/>
      <div className="experienceCards xl:min-h-[40vh] scrollbar-hide p-5 flex flex-col gap-3 overflow-auto  md:flex-row">
        {
          experienceCardsDetails.map((item,index)=>(
            <Card key={index} ContentClassName={`text-lg`} className={'min-h-[20vh] md:max-w-[10%] bg-center'} img={item.img} Content={item.content} cardKey={item.cardKey}/>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Destinations