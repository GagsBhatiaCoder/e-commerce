import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='footer text-light p-2' style={{ background: "#000" }}>
            <div className='d-flex justify-content-around'>
                <div className='footer-links '>
                    <Link onClick={scrollToTop}to="/" >Home</Link>
                    <Link onClick={scrollToTop}to="/about" >About Us</Link>
                    <Link onClick={scrollToTop}to="/" >Privacy Policy</Link>
                    <Link onClick={scrollToTop}to="/contact" >Contact Us</Link>
                    <Link onClick={scrollToTop}to="/" >Refund Policy</Link>
                    <div className="d-flex justify-content-center align-items-center p-2 footer-icons">
                        <Link onClick={scrollToTop}to='/'><i className="bi bi-facebook"></i></Link>
                        <Link onClick={scrollToTop}to='/'><i className="bi bi-instagram"></i></Link>
                        <Link onClick={scrollToTop}to='/'><i className="bi bi-linkedin"></i></Link>
                        <Link onClick={scrollToTop}to='/'><i className="bi bi-youtube"></i></Link>
                        <Link onClick={scrollToTop}to='/'><i className="bi bi-twitter"></i></Link>
                    </div>
                </div>
            </div>

            <p className='text-center mb-0'>© 2019 Yash Sales PVT. LTD.</p>
        </div>
    )
}




