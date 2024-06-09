import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import animatedimg from '../assets/scroll.svg'

function HeroSection() {
  const [background, setBackground] = useState('')
  const images = ['https://plus.unsplash.com/premium_photo-1669810170404-5ee15f5c82a3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZXN0JTIwYW5pbWFsfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww'];

  const getRandomBackground = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  useEffect(() => {
    // Set initial background
    const randomBackground = getRandomBackground(images);
    setBackground(randomBackground);

    // Change background every 5 seconds
    const intervalId = setInterval(() => {
      const newBackground = getRandomBackground(images);
      setBackground(newBackground);
    }, 5000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div data-aos="zoom-out" data-aos-delay="1000"   style={{ backgroundImage: `url(${background})` }} className={`heroContainer trans2  flex md:py-7  flex-col justify-between  py-5  min-w-[100vw] min-h-[80vh] px-4  bg-center bg-cover`}>
      <div data-aos="fade-up" data-aos-delay="2000"  className="flex z-10 flex-col md:gap-8 gap-4 py-4">
        <h3 className=' z-10  uppercase tracking-wide text-lg  font-bold text-white md:text-3xl'>Exclusive Journey to <span className='text-Yellow'>Africa</span></h3>
        <h2 className=' text-6xl z-10    uppercase font-bold text-white text-right md:text-left '>Welcome to <span className='text-Yellow'>Fitzroy</span> </h2>
      </div>
      <div className="z-10 flex flex-col  gap-3 ">
        <p data-aos-delay="3000" data-aos="fade-right" className=' text-xl text-white md:text-3xl'>Our Safaris exempllify the qualities of modern adventure travel - remote, exclusive and seamless.</p>

        <img data-aos-delay="2000" data-aos="fade-down"  src={animatedimg} className='w-[20%] xl:w-[10%] md:w-[10%]' alt="" />


      </div>
    </div>
  )
}

export default HeroSection