import React from 'react';
import Logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export default function Navbar() {
  const {total_item} = useCartContext()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'><img style={{ width: "60px" }} src={Logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/products'>Shoes</Link></li>
                  <li><Link className="dropdown-item" to='/'>clothing</Link></li>
                  <li><Link className="dropdown-item" to='/'>Assessories</Link></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex ">
            <Link to='/cart' className="nav-link position-relative me-3 fs-5">
             <i className="bi bi-cart4"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark">
                {total_item}
              </span>
            </Link>
            <button className='btn btn-success'>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
