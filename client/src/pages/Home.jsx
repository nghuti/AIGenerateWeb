import React from 'react'
import Header from '../components/Header.jsx'
import { assets } from '../assets/assets'
import Steps from '../components/Steps.jsx'
import Description from '../components/Description.jsx'
import Testimonials from '../components/Testimonials.jsx'
import GeneratedBtn from '../components/GeneratedBtn.jsx'
import Footer from '../components/Footer.jsx'

const 
Home = () => {
  return (
    <div>
       <Header/>
       <Steps/>
       <Description/>
       <Testimonials/>
       <GeneratedBtn/>
    </div>
  
  )
}

export default Home