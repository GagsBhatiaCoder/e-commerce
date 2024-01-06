
export default function ProductReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      const featureData = action.payload.products.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        products: action.payload.products,
        featureProducts: featureData,
      };
    default:
      return state;
  }
}
