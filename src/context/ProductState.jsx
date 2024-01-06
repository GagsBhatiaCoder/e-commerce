import React, { useEffect, useReducer } from "react";
import ProductContext from "./ProductContext";
import productData from '../Data/ProductsData'
import reducer from '../Reducer/ProductReducer'

const initialState = {
  products: [],
  featureProducts: [],
}
const ProductState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    try {
      // Fetch and update product data
      // For simplicity, just directly use your productData as the initial state
      dispatch({ type: 'UPDATE_PRODUCTS', payload: { products: productData } });
    } catch (error) {
      // Handle errors gracefully, e.g., log the error or dispatch an action to set an error state
      console.error('Error updating products:', error);
    }
  }, []);


  const update = () => {
    setTimeout(() => {
      // Dispatch an action to update products
      dispatch({ type: 'UPDATE_PRODUCTS', payload: { products: productData } });
    }, 1000);
  };

  return (
    <ProductContext.Provider value={{ ...state, update }}>
      {children}
    </ProductContext.Provider>
  )

}
export default ProductState;