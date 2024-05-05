import React from 'react';
import FormatPrice from '../Components/FormatPrice'
import CartToggleAmount from './CartToggleAmount';
import { useCartContext } from '../context/CartContext';

export default function CartItem({ id, name, image, amount, price, color, selectedSize }) {
    const { removeItem, setDecrease, setIncrease } = useCartContext();

    return (
        <div className='d-flex flex-wrap text-center justify-content-around align-items-center my-sm-3 p-2'>
            {/* <div className=' d-sm-flex'>
                <figure className='d-flex justify-content-center align-items-center'>
                    <img src={image} alt={name} style={{ width: "40px" }} />
                </figure>
                <div>
                    <p className='m-0'>{name}</p>
                    <p className='m-0'> Color: <span className='btn rounded-circle p-2' style={{ backgroundColor: color }}></span></p>
                   {selectedSize && <p className='m-0'> Size: {selectedSize}</p>}
                </div>
            </div>
            <div className=''>
                <p>Price</p>
                <FormatPrice price={price}/>
            </div>
            <div className=" ">
            <CartToggleAmount amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />
            </div>
            <div className="">
                <p>SubTotal</p>
               <FormatPrice  price={price*amount} />
            </div>
            <div className=" ">
            <i className="bi bi-trash-fill text-danger" style={{cursor:"pointer"}}  onClick={() => removeItem(id)}></i>
            </div> */}
            <div class="card mb-3 cart-item-width">
                <div class="row g-0">
                    <div class="col-md-4 d-sm-flex justify-content-center align-items-center">
                        <img src={image} style={{ height: "100px" }} class="img-fluid rounded-start" alt={name} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body row">
                            <div className='col-md-6'>
                                <p className='mb-1'><b>{name}</b></p>
                                <p className='mb-1'> Color: <span className='btn rounded-circle p-2' style={{ backgroundColor: color }}></span></p>
                            </div>
                            <div className='col-md-6'>
                                {selectedSize && <p className='mb-1'> Size: {selectedSize}</p>}
                                    <p className='mb-1'><b>Price :</b> <FormatPrice price={price} /></p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <CartToggleAmount amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />
                            </div>
                            <div className='col-md-6'>
                            <p className='mb-1'><b>SubTotal :</b> <FormatPrice price={price * amount} /></p>
                            </div>
                            <div>  
                                <i className="bi bi-trash-fill text-danger delete-cart-item" style={{ cursor: "pointer" }} onClick={() => removeItem(id)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
