import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import WhyChoose from '../Components/WhyChoose'
import CardsSlider from '../Components/CardsSlider'
import Footer from '../Components/Footer'
import useScrollToTop from '../Hook/USeScrollTop';
function About() {
  useScrollToTop();
  return (

    <div>

      <Card className={`h-[60vh] xl:gap-10 xl:items-center p-4 `} cardKeyclassName={`text-xl md:text-3xl  xl:text-4xl`} img={`https://images.unsplash.com/photo-1555169145-b09a196d2c31?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFib3V0JTIwZm9yZXN8ZW58MHx8MHx8fDA%3D`} ContentClassName={`text-xl md:text-5xl xl:flex xl:gap-8 xl:flex-col xl:text-7xl`} cardKey={`About Us`} Content={`who are fitzroy`}/>
      <h2 data-aos="fade-right" className='text-xl text-DarkGray uppercase m-5 font-bold'>the team behind <span className='text-Yellow'>the adventures</span></h2>
      <WhyChoose button={false} heading={false} para3={`We have no interest in mass tourism, nor will we have, and are passionate about pursuing a style of travel that takes our clients into destinations they may have otherwise only imagined.`} para2={`At Fitzroy Travel we pride ourselves on being a small, and completely independent, tour operator. We offer our clients fully immersive travel experiences to some of Africa’s most remote areas, and are proud to do so in a way that we believe is genuinely different.`}/>
      <div className="flex min-h-[40vh] gap-3 mb-5 px-4 overflow-x-auto scrollbar-hide overflow-y-hidden">
        <Card ContentClassName={`text-sm`} className={`min-w-[80%] bg-center`} cardKey={`Paul callcutt`} Content={`MAnaging director`} img={`https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D`}/>
        <Card ContentClassName={`text-sm`} className={`min-w-[80%]`} cardKey={`Carina Hibbit`} Content={`destination specialist`} img={`https://images.unsplash.com/photo-1584361853901-dd1904bb7987?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D`}/>
        <Card ContentClassName={`text-sm`} className={`min-w-[80%] bg-center`} cardKey={`john spinks`} Content={`system enginer`} img={`https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D`}/>
      </div>
      <div className="bg-darkBlue py-4">
      <h2 className='text-xl text-white uppercase m-5 font-bold'>Our <span className='text-Yellow'>Commitment</span></h2>
      <WhyChoose heading={false}  para2className={`text-white`} button={false} para3className={`text-white`} para3={`As a result, we build lasting relationships with our clients, for whom travel has a deeper meaning than just a holiday, that span many years and multiple journeys. As we continue to develop a deeper understanding of your particular interests and what drives your desire to explore, we are able to offer experiences to match your expectations. In our opinion, “There is no ‘best’, only the most suitable.”`} para2={`We are committed to ensuring our presence is a positive one, acting as a bridge to foster cross-cultural understanding rather than a source of entertainment. We believe in empowering communities to invite guests into their world on their own terms, rather than exploiting them as products.`} />

      </div>
     <div className="xl:flex">
     <div className="">
      <h3 className='text-xl  uppercase text-DarkGray m-5 font-bold'>Our Approach</h3>
      <h3 className='text-2xl uppercase text-DarkGray m-5 font-bold'>Remote, <span className='text-Yellow'>Exclusive,</span> Seamless</h3>
     <WhyChoose heading={false} button={false}/>
     </div>
    <div className="p-5 xl:min-w-[60%]">
    <Card className={`min-h-[35vh] xl:h-[100%]  bg-center`} ContentClassName={`text-sm`}  cardKey={`Bespoke`} Content={`to you by design`} img={`https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlc3xlbnwwfHwwfHx8MA%3D%3D`}/>
    </div>
     </div>
    <Footer/>
    </div>
  )
}

export default About