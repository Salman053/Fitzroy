import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import WhyChoose from '../Components/WhyChoose'
import Credit from '../Components/Credit'
import CardsSlider from '../Components/CardsSlider'
import Quotes from '../Components/Quotes'
import Carousel from '../Components/CarousalComp'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import useScrollToTop from '../Hook/USeScrollTop';


function HomeScreen({ ContactSideState }) {

  useScrollToTop();
  const CardDetails = [
    {
      content: "Zimbabwe",
      w:"w-[60%]",
      img: "https://images.unsplash.com/photo-1585317301603-7d9d675417e2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHppbWJhYndlfGVufDB8fDB8fHww",
      details: 'Home of the highest guiding standards in Africa, and exceptional walking safaris.'
    },
    {
      content: "uganda",
      w:"w-[30%]",
      img: "https://images.unsplash.com/photo-1551357212-38662e819996?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVnYW5kYXxlbnwwfHwwfHx8MA%3D%3D",
      details: "Uganda presents a varied safari offering, characterized by mountain gorillas and an expansive range of experiences."
    }
    ,{
      content:"Botswana",
      w:"w-[50%]",
      img:"https://images.unsplash.com/photo-1640690642852-cae8cdf55cde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvdHN3YW5hJTIwbGlvbnN8ZW58MHx8MHx8fDA%3D",
      details: "Botswana is a country that has a rich heritage and culture. It is a country that has a rich heritage and culture. It is a country that has a rich heritage and culture."
    }
    ,{
      content:"Kenya",
      w:"w-[80%]",
      img:"https://images.unsplash.com/photo-1585523658894-cc78fc2c8f67?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtlbnlhfGVufDB8fDB8fHww",
      details: "Pioneering tourism models and prolific wildlife, If anywhere were to lay claim of hosting the ‘soul of safari’ it may well be Kenya."
    }
    ,{
      img:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:"italy",
      w:"w-[40%]",
      details:"Italy is a country that has a rich heritage and culture. It is a country that has a rich heritage and culture. It is a country that has a rich heritage and culture."
    }
    ,{
      content:"Rome",
      w:"w-[50%]",
      img:"https://images.unsplash.com/photo-1569758884145-6a2e8a00e539?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:"Rome is a very beautiful and historically riched Country ."
    }
  ]
  return (
    <div>

      <HeroSection />
      <div className="xl:flex xl:p-2 min-w-[100vw] hidden min-h-[30vh]">
        <div className="">
          <h2 data-aos="fade-right" className='text-lg xl:text-2xl text-DarkGray uppercase m-5 font-bold'>Best <span className='text-Yellow'>Destinations</span></h2>
          <h2 data-aos="fade-right" data-aos-delay="1000" className='text-xl text-DarkGray uppercase m-5 font-bold'>Where do you want to  <span className='text-Yellow'>go</span></h2>
          <WhyChoose button={false} para3={'Be it a wildlife safari through Botswana’s Okavango Delta or an expedition through the desert landscapes of Chad, indigenous festivals of South Sudan to tracking lowland gorilla in Gabon — our team is in place to manage the often-complex logistical challenges on your behalf.'}
            para2={'Discover some of the varied destinations we cover, each area containing its own unique characteristics and personality. Within each country there are a diverse range of wildlife and landscapes to experience, of cultures to learn from, that reward those willing to explore on a deeper level.'} />
        </div>
        <div className="p-5 flex gap-1 flex-col min-w-[500px] min-h-[100%] md:flex-row md:justify-around flex-wrap">
          <div className={` w-[100%]  relative   group   trans2 overflow-hidden  }`}>
            <Card ContentClassName={`self-baseline p-2 group-hover:opacity-0  `} Content={`Zimbabwe`} className={` bg-center h-[100%]   hover:scale-105 trans2`} />
            <div className="absolute  bottom-[3%] w-[95%] h-[95%] left-[3%] right-[5%] top-[3%]       transparentbg blur- px-3 py-2  scale-y-0 flex items-end  group-hover:border-2 group-hover:border-white  origin-bottom overflow-hidden  group-hover:scale-y-100  trans2  ">
              <p className='text-lg z-10  relative text-white text-nowrap group-hover:text-wrap  group-hover:opacity-95  opacity-0 trans2'>{`Home of highest guiding standards in africa, and exceptional walking safari`}</p>
            </div>
          </div>
        </div>
  </div>
      <div className="  p-4 xl:flex hidden justify-around  gap-8  min-w-[100vw] flex-wrap">
        {
          CardDetails.map((item, index) => (
            <div key={index} className={`card  h-[40vh] relative  group   trans2 overflow-hidden  `}>
              <Card ContentClassName={`self-baseline p-2 group-hover:opacity-0  `} Content={item.content} className={`min-h-[100%] bg-center  hover:scale-105 trans2`} img={item.img} />
              <div className="absolute bottom-[2%] top-[2%] left-[2%] right-[2%]   w-[95%] h-[95%]    transparentbg blur- px-3 py-2  scale-y-0 flex items-end  group-hover:border-2 group-hover:border-white  origin-bottom overflow-hidden  group-hover:scale-y-100  trans2  ">
                <p className='text-lg z-10 relative text-white text-nowrap group-hover:text-wrap  group-hover:opacity-95  opacity-0 trans2'>{item.details}</p>
              </div>
            </div>
          ))
        }
      </div>

      <WhyChoose  className={`xl:mb-36 2xl:mb-[24rem] 2xl:gap-16`} sideImg={true}  ContactSideState={ContactSideState} para1={true} />
      <Credit />
      <CardsSlider />
      <Quotes />
      <WhyChoose  heading={false} para2={'Fitzroy’s distinction is rooted in our independence, unbound by external shareholders or corporate groups, ensuring our dedication to crafting bespoke experiences that align precisely with our clients’ unique preferences.'} para3={'Fitzroy’s distinction is rooted in our independence, unbound by external shareholders or corporate groups, ensuring our dedication to crafting bespoke experiences that align precisely with our clients’ unique preferences.'} />
      {/* <Carousel/> */}
      <div className="cardContainer xl:flex-row  xl:gap-1 xl:px-3 xl:max-w-[100vw] overflow-hidden    flex flex-col gap-4  px-5">
        <Card className={`w-[100%] xl:min-w-[20%] xl:min-h-[35vh]    min-h-[30vh] bg-center relative`} Content={`location`} cardKeyclassName={'text-white'} cardKey={'Remote'} ContentClassName={`text-yellow-600`} img={'https://plus.unsplash.com/premium_photo-1664302602740-7217fa024bea?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZXN0JTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D'} />
        <Card className={`w-[100%] xl:min-w-[20%]    min-h-[30vh] bg-center relative`} cardKey={'Camping'} Content={`Encounters`} cardKeyclassName={'text-white'} ContentClassName={`text-yellow-600`} img={'https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9yZXN0JTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D'} />
        <Card className={`w-[100%] xl:min-w-[10%]    min-h-[30vh] bg-center relative`} Content={`Access`} cardKeyclassName={'text-white'} cardKey={'Exclusive'} ContentClassName={`text-yellow-600`} img={'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZvcmVzdCUyMHRvdXJ8ZW58MHx8MHx8fDA%3D'} />

      </div>
      <div className="xl:flex xl:py-3 xl:px-5 ">
        <div className="">
          <div className="p-5 flex flex-col gap-3">
            <h3 data-aos="fade-right" className='text-xl text-DarkGray uppercase font-bold md:text-2xl'>OUR Approach</h3>
            <h2 data-aos="fade-right" className='text-xl text-darkBlue uppercase md:text-2xl font-extrabold'>Remote, <span className='text-Yellow'>Exclusive,</span>  Seamless</h2>
          </div>
          <WhyChoose heading={false} button={false} />
        </div>
        <div className=" xl:w-[60%] ">
          <Card className={`min-h-[30vh] xl:w-[100%] xl:h-[100%] `} img={`https://images.unsplash.com/photo-1525130413817-d45c1d127c42?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRpc2N1c3Npb258ZW58MHx8MHx8fDA%3D`} ContentClassName={`text-lg`} Content={`To You by Design`} cardKey={'BeSpoke'} />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default HomeScreen