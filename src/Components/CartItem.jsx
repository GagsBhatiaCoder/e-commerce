import React from 'react';
import FormatPrice from '../Components/FormatPrice'
import CartToggleAmount from './CartToggleAmount';
import { useCartContext } from '../context/CartContext';

export default function CartItem({ id, name, image, amount, price, color, selectedSize }) {
    const {removeItem, setDecrease, setIncrease} = useCartContext();

    return (
        <div className='row text-center justify-content-md-center my-sm-3'>
            <div className='col-2 d-flex '>
                <figure className='d-flex justify-content-center align-items-center'>
                    <img src={image} alt={name} style={{ width: "40px" }} />
                </figure>
                <div>
                    <p className='m-0'>{name}</p>
                    <p className='m-0'> Color: <span className='btn rounded-circle p-2' style={{ backgroundColor: color }}></span></p>
                   {selectedSize && <p className='m-0'> Size: {selectedSize}</p>}
                </div>
            </div>
            <div className='col-2'>
                <FormatPrice price={price}/>
            </div>
            <div className="col-2 d-none d-sm-block">
            <CartToggleAmount amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />
            </div>
            <div className="col-2 d-none d-sm-block">
               <FormatPrice  price={price*amount} />
            </div>
            <div className="col-2 ">
            <i className="bi bi-trash-fill text-danger" style={{cursor:"pointer"}}  onClick={() => removeItem(id)}></i>
            </div>

        </div>
    )
}
