import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function About() {
  const { products, featureProducts } = useContext(ProductContext)
  console.log(`Products: ${products}, Fproducts:${featureProducts}`)

  return (
    <>
      <Navbar />
      <h1>This Is about page of Yash Sales</h1>
    <Footer />
    </>
  )
}
