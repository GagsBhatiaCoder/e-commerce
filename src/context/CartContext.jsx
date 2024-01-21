import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();

const getLocalStorageData = () => {
    let localCartData = localStorage.getItem("yashCart");

    if (localCartData === null || JSON.parse(localCartData).length === 0) {
        return [];
    } else {
        return JSON.parse(localCartData)
    }
}
const initialState = {
    // cart:[],
    cart: getLocalStorageData(),
    total_item: "",
    total_price: "",
    shipping_fee: 200,
}
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, selectedSize, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, selectedSize, product } })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
// setIncrement and setdcrement For CartItems
const setIncrease = (id) => {
dispatch({type:"SET_INCREASE", payload: id})
}
const setDecrease = (id) => {
    dispatch({type:"SET_DECREASE", payload: id})
    }

// clearCart Function 
const clearCart = (id) => {
dispatch({type:"CLEAR_CART", payload: id})
}

    //  add localStorage to cart data
    useEffect(() => {
        dispatch({type:"CART_TOTAL_ITEMS"})
        localStorage.setItem("yashCart", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease}}> {children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider, useCartContext }