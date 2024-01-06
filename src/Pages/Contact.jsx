import React from 'react'
import { Link } from 'react-router-dom';
import QueryForm from '../Components/QueryForm';
import Navbar from '../Components/Navbar';
import Map from '../Components/Map';
import Footer from '../Components/Footer';

export default function Contact() {
  return (
    <>
      <div className=' '>
        <Navbar />
        <div className='d-flex flex-column flex-md-row justify-content-around bg-primary p-4'>
          <div className='d-flex justify-content-center flex-column align-items-between p-4 text-light fs-5'>
            <span className='text-decoration-none text-light fs-5 text-center' > <i className="bi bi-geo-alt fs-4 me-3"></i>Shahdana Colony, Model Town,<br /> 
            Bareilly, Uttar Pradesh 243005
            </span>
            <Link to="#" className='text-decoration-none text-light fs-5 d-flex'> <i className="bi bi-telephone fs-4 me-3"></i> 07983843964</Link>
            <Link to="#" className='text-decoration-none text-light fs-5'><i className="bi bi-plus fs-4 me-3" ></i> 9CQ4+9F Bareilly, Uttar Pradesh</Link>
            <Link to="#" className='text-decoration-none text-light fs-5'> <i className="bi bi-envelope-at fs-4 me-3"></i> omsarthi@gmail.com</Link>
          </div>
          <div>
            <QueryForm />
          </div>
        </div>
        <div className='d-flex justify-content-center p-4'>
          <Map />
        </div>
      </div>
      <Footer />
    </>
  )
}
