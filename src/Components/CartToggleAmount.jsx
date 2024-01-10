import React from 'react'

export default function CartToggleAmount({amount, setIncrease, setDecrease}) {
  return (
    <div className='d-flex'>
      <button  style={{border:"none", background:"none", fontSize:"1.3rem"}} 
      onClick={() => (setDecrease())}><i className="bi bi-dash"></i></button>
      <p className='ms-3 mb-0'>{amount}</p>
      <button style={{border:"none", background:"none", fontSize:"1.3rem", marginLeft:"1rem"}} 
      onClick={() => (setIncrease())}><i className="bi bi-plus"></i></button>
    </div>
  )
}
