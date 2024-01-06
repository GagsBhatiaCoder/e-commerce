import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import CartToggleAmount from './CartToggleAmount';

export default function AddToCart({product}) {
    const {colors, stock} = product ;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setIncrease = () => {
     amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

  return (
    <div>
      <p>Colors:
        {colors.map((currColor,index ) => (
            <button className={` ${color === currColor ? "btn-style active" : "btn-style p-2"}`} 
            style={{backgroundColor:currColor}} key={index}
            onClick={() => (setColor(currColor))}>
           {color === currColor ? <i className="bi bi-check2 text-light"></i> : null }
            </button>
        ))}
      </p>

    <CartToggleAmount amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
    <Link to="/cart" className="btn btn-success">Add to cart</Link>
    </div>
  )
}
