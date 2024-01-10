import React, { createContext, useContext, useEffect, useReducer } from "react";
import ProductContext from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters:{
    text:"",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useContext(ProductContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" })
  }
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" })
  }

  // sorting Function
  const sorting = (selectedValue) => {
    dispatch({ type: "GET_SORT_VALUE", payload: selectedValue });

    // Apply sorting logic to update filter_products
    let sortedProducts = [...products];

    switch (selectedValue) {
      case 'lowest':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'highest':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
        case 'a-z':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
          case 'z-a':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
      default:

        break;
    }

    dispatch({ type: "Load_Filter_products", payload: sortedProducts });
  };

  // Update Filter Value Function
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value

    return dispatch({type:"UPDATE_FILTERS_VALUE", payload: {name, value}})

  }
  
  useEffect(() => {
dispatch({type:"FILTER_PRODUCTS"})
// dispatch({type:"GET_SORT_VALUE"})
  },[products, state.filters])

  useEffect(() => {
    dispatch({ type: "Load_Filter_products", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterContextProvider;
