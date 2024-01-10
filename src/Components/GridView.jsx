import React from 'react'
import FormatPrice from '../Components/FormatPrice'
import { useNavigate } from 'react-router-dom';
import { useFilterContext } from '../context/FilterContext';


export default function GridView() {
    const { filter_products } = useFilterContext();
    const navigate = useNavigate()
    return (
        <div className='container row justify-content-md-center'>

            {filter_products.map((product) => (
                <div onClick={() => (navigate(`/products/${product.id}`))} key={product.id} className="card border-0 mb-4 card-hover col-md-4" style={{ width: "16rem" }}>
                    <figure><img src={product.img[0]} className="card-img-top img-hover" alt={product.name} />
                    <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">
                                    {product.category}
                                </span></figure>
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
