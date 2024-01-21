import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './Style.css'
import ProductList from './ProductList'
import Sort from '../Components/Sort'
import FilterSection from '../Components/FilterSection'

export default function AllProducts() {
  return (
    <div>
      <Navbar />
      <h4 className='text-center p-5'>All Products</h4>
      <div className=' row justify-content-md-center p-2 p-md-4 m-0'>
        <div className='col-md-2 p-3'>
          <div className="mb-3 col-md-8">
           <FilterSection />
          </div>
        </div>

        <div className='col-md-8'>
         
          <Sort />
          <ProductList />
         
        </div>
      </div>
      <Footer />
    </div>
  )
}
