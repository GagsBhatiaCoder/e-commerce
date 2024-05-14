import React, { useContext, useState, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FormatPrice from '../Components/FormatPrice';
import Star from './Star';
import AddToCart from '../Components/AddToCart';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Product() {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(productId, 10));
    setProduct(selectedProduct);
    if (selectedProduct) {
      setMainImage(selectedProduct.img[0]);
    }
  }, [productId, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h3 className='text-center p-4'>Products Details</h3>
      <div className='container d-flex flex-column flex-sm-row justify-content-center align-items-center'>
        <div className='d-flex flex-wrap-reverse jutify-content-center align-items-center'>
          <div className='me-2 d-flex flex-sm-column flex-wrap p-2'>
            {product.img.map((currEle, index) => (
              <figure key={index}>
                <img className='m-1' style={{ width: "100px" }}
                  src={currEle} alt={product.name} key={index}
                  onClick={() => (setMainImage(currEle))} />
              </figure>
            ))}
          </div>
          <div className='me-sm-4'>
            <Zoom>
            <img className='main-image' style={{ width: "300px" }} src={mainImage} alt={product.name} />
            </Zoom>
        </div>
        </div>
        <div className='p-2 product-details'>
          <h4> {product.name}</h4>
          <Star star={product.star} reviews={product.reviews} />
          <p>MRP: <del>{<FormatPrice price={product.price + (product.price * .50)} />}</del></p>
          <p className='text-success'>Deal of the day : {<FormatPrice price={product.price} />}</p>
          <p className='mb-0'>{product.discription}</p>
          <div className='d-flex'>
            <div className='d-flex flex-column justify-content-center align-items-center me-3'>
              <i className="bi bi-truck  service-icons"></i>
              <p className='fw-light mb-0' style={{ fontSize: "0.8rem" }}>Free Delivery</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center me-3'>
              <i className="bi bi-arrow-repeat  service-icons"></i>
              <p className='fw-light mb-0' style={{ fontSize: "0.8rem" }}>7 Days replacement</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <i className="bi bi-shield-check  service-icons"></i>
              <p className='fw-light mb-0' style={{ fontSize: "0.8rem" }}>6 Months Warranty</p>
            </div>
          </div>
          <hr className='mt-0' />
          <p>Available: <span className={`fw-bold ${product.stock > 0 ? "text-success" : "text-danger"}`} > {product.stock > 0 ? "In Stock" : "Not Available"}</span></p>
          <p>ID: {product.id}</p>
          <p>Brand: {product.company}</p>
          <hr />
          {product.stock > 0 && <AddToCart product={product} />}
        </div>
      </div>
      <Footer />
    </div>
  )
}
