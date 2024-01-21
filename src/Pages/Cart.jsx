import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCartContext } from '../context/CartContext'
import CartItem from '../Components/CartItem'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cart, clearCart } = useCartContext();

  if (cart.length === 0) {
    return <div>
      <Navbar /> 
      <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"80dvh"}}>
        <h3 className='text-center p-3 mb-3'>No Items in your Cart</h3>
        <Link className="btn btn-success" to='/products'> Add Items </Link>
      </div>
      <Footer />
    </div>
  }
  return (
    <div>
      <Navbar />
      <div className="container p-sm-5">
        <div className='row text-center justify-content-sm-center px-sm-4'>
          <p className='col-2'>Item</p>
          <p className='col-2'>Price</p>
          <p className='col-2 d-none d-sm-block'>Quantity</p>
          <p className='col-2 d-none d-sm-block'>Subtotal</p>
          <p className='col-2'>Delete</p>
        </div>
        <hr className='mt-0' />
        <div>
          {cart.map((currEle) => {
            return <CartItem key={currEle.id} {...currEle} />
          })}
        </div>
        <hr className='mt-0' />
        <div className='d-sm-flex justify-content-between'>
          <Link to='/products' className='btn btn-success '>Continue Shopping</Link>
          <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
