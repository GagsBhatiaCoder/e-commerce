
const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, selectedSize, amount, product } = action.payload;

    // Check for ExistingProduct in cart 
    let existingProduct = state.cart.find((currItem) => currItem.id === id + color + selectedSize);


    if (existingProduct) {
      let updateProduct = state.cart.map((currItem) => {
        if (currItem.id === id + color + selectedSize) {
          let newAmount = currItem.amount + amount;
          if (newAmount >= currItem.max) {
            newAmount = currItem.max;
          }
          return {
            ...currItem,
            amount: newAmount,
          }
        } else
          return currItem;
      });
      return {
        ...state,
        cart: updateProduct,
      }
    } else {



      let cartProduct = {
        id: id + color + selectedSize,
        name: product.name,
        color,
        selectedSize,
        amount,
        price: product.price,
        image: product.img[0],
        max: product.stock,
      }

      return {
        ...state,
        cart: [...state.cart, cartProduct]
      }
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((currItem) =>
      currItem.id !== action.payload)
    return {
      ...state,
      cart: updatedCart,
    }
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    }
  }
  
  if (action.type === "SET_DECREASE") {
    let updatedProduct = state.cart.map((currEle) => {
      if (currEle.id === action.payload) {
        let decAmount = currEle.amount - 1;
        if(decAmount <= 1){
          decAmount = 1;
        }

        return {
          ...currEle,
          amount: decAmount,
        }
      } else {
        return currEle;
      }
    });
    return {
      ...state,
      cart: updatedProduct
    }
  }

  if (action.type === "SET_INCREASE") {
    let updatedProduct = state.cart.map((currEle) => {
      if (currEle.id === action.payload) {
        let incAmount = currEle.amount + 1;
        if(incAmount >= currEle.max){
          incAmount = currEle.max;
        }

        return {
          ...currEle,
          amount: incAmount,
        }
      } else {
        return currEle;
      }
    });
    return {
      ...state,
      cart: updatedProduct
    }
  }

if(action.type === "CART_TOTAL_ITEMS"){
  let updatedCartItems = state.cart.reduce((initialVal, currEle) => {
    let {amount} = currEle;
    initialVal = initialVal + amount
    return initialVal;
  }, 0)
  return{
    ...state,
    total_item: updatedCartItems,
  }
}

  return state;

}

export default CartReducer
