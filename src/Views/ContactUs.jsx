import React, { useState } from 'react'
import Card from '../Components/Card'
import WhyChoose from '../Components/WhyChoose'
import Button from '../Components/SmallComponents/Button'
import Quotes from '../Components/Quotes'
import Footer from '../Components/Footer'
import useScrollToTop from '../Hook/USeScrollTop';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    location: '',
    surname: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/mail', formData)
      .then((response) => {
        console.log(response.data);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('There was an error sending the email!', error);
      });

    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
      location: '',
      surname: '',
    });
  };


  useScrollToTop()
  return (
    <div>
      <Card className={`h-[60vh] xl:h-[60vh] xl:gap-7 xl:items-center md:h-[40vh] bg-center`} cardKeyclassName={`text-lg md:text-3xl xl:text-4xl`} img={`https://images.unsplash.com/photo-1528719953625-3e95efad84da?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRvdXJpc3R8ZW58MHx8MHx8fDA%3D`} ContentClassName={`text-4xl md:text-5xl xl:text-7xl`} cardKey={`Drop Us A Line`} Content={`contact us`} />

      <div className=" xl:flex xl:p-5">
        <h2 data-aos="fade-top"  data-aos-duration="2000" data-aos-delay="4000" className='text-lg md:text-4xl text-DarkGray uppercase m-5 font-bold'>We Believe that  <span className='text-Yellow'>No Two Journeys</span> should be the same.</h2>
        <WhyChoose button={false} para2={`To talk through your travel plans without online distractions, we recommend a direct conversation. Please provide your contact information below, and we will reach out to thoroughly discuss your travel plans.`} para3={`Please note that we do not offer email consultations. Speaking directly enables us to accurately understand your requirements and maintain the high level of service we are committed to providing.`} />
      </div>

      <form action="" onSubmit={handleSubmit} className='flex xl:px-44 xl:py-10 flex-col p-5 md:px-28  px-8 gap-3 md:gap-8 bg-slate-200'>
        <div  data-aos="fade-right"  data-aos-delay="1000" className=" flex flex-col gap-2">
        <label className='text-xl font-semibold uppercase' htmlFor="name">Your Name <span className='text-red-600'>*</span> </label>
        <input name='name' value={formData.name} required onChange={handleChange} type="text" id='name' className=' bg-white text-black py-1 px-2 focus-within:outline-none placeholder:text-gray text-xl'  placeholder='First Name'/>
        </div>
        <div data-aos="fade-right"  data-aos-delay="1000" className=" flex flex-col gap-2">
        <label className='text-xl font-semibold uppercase' htmlFor="surname">Your Surname <span className='text-red-600'>*</span> </label>
        <input name='surname' value={formData.surname} required onChange={handleChange}  type="text" id='surname' className=' bg-white text-black py-1 px-2 focus-within:outline-none placeholder:text-gray text-xl'  placeholder='Surname'/>
        </div>
        <div data-aos="fade-right"  data-aos-delay="1000" className=" flex flex-col gap-2">
        <label className='text-xl font-semibold uppercase' htmlFor="email">Your Email Address <span className='text-red-600'>*</span> </label>
        <input name='email' value={formData.email} required onChange={handleChange}  type="email" id='email' className=' bg-white text-black py-1 px-2 focus-within:outline-none placeholder:text-gray text-xl'  placeholder='Email Address'/>
        </div>
        <div data-aos="fade-right"  data-aos-delay="1000" className=" flex flex-col gap-2">
        <label className='text-xl font-semibold uppercase' htmlFor="ph">Phone Number <span className='text-red-600'>*</span> </label>
        <input name='phone' value={formData.phone} required onChange={handleChange}  type="text" id='ph' className=' bg-white text-black py-1 px-2 focus-within:outline-none placeholder:text-gray text-xl'  placeholder='Phone Number'/>
        </div>
        <div data-aos="fade-right"  data-aos-delay="1000" className=" flex flex-col gap-2">
        <label className='text-xl font-semibold uppercase' htmlFor="state">Your location <span className='text-red-600'>*</span> </label>
        <input name='location' value={formData.location} required onChange={handleChange}  type="text" id='state' className=' bg-white text-black py-1 px-2 focus-within:outline-none placeholder:text-gray text-xl'  placeholder='State'/>
        </div>
        <div data-aos="fade-right"  data-aos-delay="1000" className=" flex flex-col gap-2">
        <label className='text-xl font-semibold uppercase' htmlFor="msg">Your Safari Plan <span className='text-red-600'>*</span> </label>
        <textarea name='message' value={formData.message} required onChange={handleChange}  type="text" id='msg' className=' resize-none bg-white text-black py-1 px-2 focus-within:outline-none placeholder:text-gray text-xl'  placeholder='Tell us a little about your safari plans'/>
        </div>
        <Button type="submit" >Submit Message</Button>
      </form>
      <div className="">
        <h2 data-aos="fade-right"  data-aos-delay="1000" className='text-lg md:text-2xl xl:text-3xl text-DarkGray uppercase m-5 font-bold'>We Believe that  <span className='text-Yellow'>No Two Journeys</span> should be the same.</h2>
      </div>
      <Quotes/>
      <Footer/>
    </div>
  )
}

export default ContactUs