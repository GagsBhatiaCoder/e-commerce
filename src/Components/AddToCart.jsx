import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import CartToggleAmount from './CartToggleAmount';
import { useCartContext } from '../context/CartContext';

export default function AddToCart({product}) {
  const {addToCart} = useCartContext()
  // this product represents a value for singleProduct
    const {id, colors, stock, size} = product ;
    const [selectedSize , setSelectedSize] = useState(size && size.length > 0 ? size[0] : null)
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
      {size && size.length > 0 && (
        <p>Size:
      {size.map((currEle, index) => (
        <button className={` ${selectedSize === currEle ? "btn-style bg-light active" : "btn-style bg-light p-2"}`}
        key={index} 
        onClick={() => (setSelectedSize(currEle))}>{currEle}</button>
      ))}
     </p>
      )}
     
    <CartToggleAmount amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
    <Link to="/cart"
    onClick={() => addToCart(id, color, amount, selectedSize, product)} className="btn btn-success">Add to cart</Link>
    </div>
  )
}
