import React from 'react'

export default function Service() {
  return (
    <>
      <div className="container d-flex justify-content-evenly align-items-center flex-wrap p-2 my-5" >
        <div className="card p-3 mb-2 border-0" style={{ width: "16rem", background:"#f3f3f3" }}>
          <i className="bi bi-truck fs-4 text-center service-icons"></i>
          <div className="card-body">
            <h5 className="card-title text-center">Super Fast And Free Delivery</h5>
          </div>
        </div>
        <div className="card p-3 mb-2 border-0" style={{ width: "16rem", background:"#f3f3f3" }}>
          <i className="bi bi-shield-check fs-4 text-center service-icons"></i>
          <div className="card-body">
            <h5 className="card-title text-center">Non-contact Shipping</h5>
          </div>
        </div>
        <div className="card p-3 mb-2 border-0" style={{ width: "16rem", background:"#f3f3f3" }}>
          <i className="bi bi-cash-stack fs-4 text-center service-icons"></i>
          <div className="card-body">
            <h5 className="card-title text-center">Money Back Gauranteed</h5>
          </div>
        </div>
        <div className="card p-3 mb-2 border-0" style={{ width: "16rem", background:"#f3f3f3" }}>
          <i className="bi bi-credit-card fs-4 text-center service-icons"></i>
          <div className="card-body">
            <h5 className="card-title text-center">Super Secure Payment</h5>
          </div>
        </div>
      </div>
    </>
  )
}
