// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Button from './Components/SmallComponents/Button'
import Menu from './Components/Menu'
import HomeScreen from './Views/HomeScreen'
import HiddenScreen from './Components/SmallComponents/HiddenScreen'
import ContactSideForm from './Components/ContactSideForm'
import About from './Views/About'
import Destinations from './Views/Destinations'
import ContactUs from './Views/ContactUs'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use CSS styles directly from AOS

function App() {
  const [MenuActive, setMenuActive] = useState(false);
  const [contactActive,setcontactActive]=useState(false)
  const MenuState = () => {
    setMenuActive(true)
  }
  const CloseActive = () => {
    setMenuActive(false)
  }
  const ContactSideState = ()=>{
    setcontactActive(true)
    console.log(true)
  }
  const ContactSideClose = ()=>{
    setcontactActive(false)
    console.log(false)
  }
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
    <Header MenuState={MenuState}  />
    <div  className='py-1 relative overflow-y-hidden max-w-[100vw]'>



       <Menu MenuActive={MenuActive} CloseActive={CloseActive} />
      <ContactSideForm ContactSideClose={ContactSideClose} contactState={contactActive}/>
        <Routes>
          <Route path='/' element={<HomeScreen ContactSideState={ContactSideState}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/destination' element={<Destinations/>}/>
        </Routes>
        {/* <HomeScreen  ContactSideState={ContactSideState}/> */}
      {/* <About/> */}
      {/* <Destinations/> */}
      {/* <ContactUs/> */}
    </div>
    </>
  )
}

export default App