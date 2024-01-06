import React, { createContext, useContext, useEffect, useReducer } from "react";
import ProductContext from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContextProvider = ({ children }) => {
  const { products } = useContext(ProductContext);
  const [state, dispatch] = useReducer(reducer, initialState); 
 
  const setGridView = () => {
    return dispatch({type:"Set_Gridview"})
  }
  const setListView = () => {
    return dispatch({type:"Set_Listview"})
  }
  useEffect(() => {
    dispatch({ type: "Load_Filter_products", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterContextProvider;
