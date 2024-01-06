import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

export default function Error() {
   
  return (
    <div>
      <Navbar />
      <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"100dvh"}}>
        <h1>404</h1>
      <h4>OH OH! YOU ARE LOST </h4>
      <p>The page you are looking for is broken click the button below to navigate to home</p>
      <Link to='/' onClick={() => (window.scrollTo(0,0))} className='btn btn-success'> Home</Link>
      </div>
      <Footer />
    </div>
  )
}
