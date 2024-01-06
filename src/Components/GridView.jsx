import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import FormatPrice from '../Components/FormatPrice'
import { useNavigate } from 'react-router-dom';


export default function GridView() {
    const { products } = useContext(ProductContext);
    const navigate = useNavigate()
    return (
        <div className='container row justify-content-md-center'>

            {products.map((product) => (
                <div onClick={() => (navigate(`/products/${product.id}`))} key={product.id} className="card border-0 mb-4 card-hover col-md-4" style={{ width: "16rem" }}>
                    <img src={product.img[0]} className="card-img-top img-hover" alt={product.name} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-title">{<FormatPrice price={product.price} />}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
