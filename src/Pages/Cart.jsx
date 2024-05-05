import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCartContext } from '../context/CartContext'
import CartItem from '../Components/CartItem'
import { Link } from 'react-router-dom'
import FormatPrice from '../Components/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";


export default function Cart() {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { isAuthenticated, user } = useAuth0();

  if (cart.length === 0) {
    return <div>
      <Navbar />
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "80vh" }}>
        <h3 className='text-center p-3 mb-3'>No Items in your Cart</h3>
        <Link className="btn btn-success" to='/products'> Add Items </Link>
      </div>
      <Footer />
    </div>
  }
  return (
    <div>
      <Navbar />
      {isAuthenticated && (
        <div className='d-flex justify-content-center align-items-center m-2'>
          <figure>
            <img className='me-2' src={user.picture} alt="user_image" style={{ width: "50px" }} />
          </figure>
          <p>Welcome, <span>{user.name}</span></p>
        </div>
      )}
      <h3 className='text-center my-3'>Cart</h3>
      <div className='row m-0'>
        <div className="col-sm-8 p-sm-2">
          {/* <div className='d-flex justify-content-around px-sm-4'>
          <p className=''>Item</p>
          <p className=''>Price</p>
          <p className=' d-none d-sm-block'>Quantity</p>
          <p className=' d-none d-sm-block'>Subtotal</p>
          <p className=''>Delete</p>
        </div> */}
          {/* <h3 className='text-center'>Items</h3> */}
          <div>
            {cart.map((currEle) => {
              return <CartItem key={currEle.id} {...currEle} />
            })}
          </div>
          {/* <hr className='mt-0' /> */}
        </div>
        <div className='col-sm-4'>
          <div className='d-flex flex-column border rounded border-success-subtle p-3 mt-3' style={{ maxWidth: "300px" }}>
            <div className="d-flex">
              <p className='me-3'>SubTotal:</p>
              <p className='fw-bold'><FormatPrice price={total_price} /></p>
            </div>
            <div className="d-flex">
              <p className='me-3'>Shipping Fee</p>
              <p className='fw-bold'><FormatPrice price={shipping_fee} /></p>
            </div>
            <hr />
            <div className="d-flex">
              <p className='me-3'>Order Total:</p>
              <p className='fw-bold'><FormatPrice price={shipping_fee + total_price} /></p>
            </div>
            <div className='d-flex justify-content-center'>
              <button className='btn btn-primary mb-2 font-sm' >Pay Now</button>
            </div>
          </div>
          <div className='d-flex flex-column p-3 mt-3' style={{ maxWidth: "300px" }}>
            <div className='d-flex flex-column'>
              <Link to='/products' className='btn btn-success mb-2 font-sm'>Continue Shopping</Link>
              <button className='btn btn-danger mb-2 font-sm' onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
