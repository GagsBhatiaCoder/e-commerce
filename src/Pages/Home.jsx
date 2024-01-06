import React from 'react'
import Navbar from '../Components/Navbar'
import MainHeader from '../Components/MainHeader'
import Service from '../Components/Service'
import Footer from '../Components/Footer'
import FeatureServices from '../Components/FeatureServices'


export default function Home() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <Service />
      <FeatureServices />
      <Footer />
     
    </div>
  )
}
