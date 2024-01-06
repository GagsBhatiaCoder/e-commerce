import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import FormatPrice from '../Components/FormatPrice'
import { Link} from 'react-router-dom';

export default function ListView() {
    const { products } = useContext(ProductContext);
    return (
        <div className='container'>          
             {products.map((product) => (
            <div className="card mb-3 p-md-2"  key={product.id} style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={product.img[0]} className="img-fluid rounded-start" alt={product.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className='card-text'>{<FormatPrice price={product.price} />}</p>
                            <p className="card-text">{product.discription.slice(0, 80)}...</p>
                            <Link to={`/products/${product.id}`} className='btn btn-outline-primary'>Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
              ))}
        </div>
    )

}
