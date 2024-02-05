import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import { useNavigate } from 'react-router-dom';
import FormatPrice from './FormatPrice';
import '../Pages/Style.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 1024, min: 776 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 776, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};
export default function FeatureServices() {
    const { featureProducts } = useContext(ProductContext)
    const navigate = useNavigate();


    return (
        <div className='p-5'>
            <h4 className='text-center mb-3'>Feature Products</h4>
            <div className='container'>
                <Carousel className='p-md-4' responsive={responsive}>
                    {featureProducts.map((product) => (
                        <div onClick={() => (navigate(`/products/${product.id}`))} key={product.id} className="card border-0 card-hover" style={{ width: "16rem" }}>
                            <figure>
                                <img src={product.img[0]} className="card-img-top" alt={product.name} />
                                 <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">
                                    {product.category}
                                </span>
                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-title">{<FormatPrice price={product.price} />}</p>
                            </div>
                        </div>
                    ))}


                </Carousel>
            </div>
            <div className="d-flex justify-content-center">
            <Link to='./products' className='btn btn-success' >All Products</Link>
            </div>
            
        </div>
    )
}
