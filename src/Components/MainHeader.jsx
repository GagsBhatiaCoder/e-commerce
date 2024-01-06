import React from 'react'
import Shoes from '../Assets/Images/shoes.jpg'
import './Style.css'
import { Link } from 'react-router-dom'

export default function MainHeader() {
    return (
        <>
        <div className="container main-header p-5 mb-5" >
            <div className='mb-5'>
                <p>Welcome To </p>
                <h1 className='animate-charcter'>Yash Sales</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis ut incidunt perferendis quam ea porro tempora odit odio sequi, repellendus iusto harum doloribus ipsa eius expedita unde rerum excepturi.</p>
                     <Link to="/products" className='btn btn-success'>Shop Now</Link>
            </div>
            <div>
                <img className='main-img' style={{ width: "100%" }} src={Shoes} alt="yash_sales_shoes&assessories" />
            </div>
            </div>
        </>
    )
}
