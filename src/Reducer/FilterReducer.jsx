
const filterReducer = (state, action) => {
    switch (action.type) {
        case "Load_Filter_products":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }
        case "SET_GRIDVIEW":

            return {
                ...state,
                grid_view: true,

            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            };

            case "UPDATE_FILTERS_VALUE":
                const {name, value } = action.payload;
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        [name] : value,
                    }
                }
                case "FILTER_PRODUCTS":
                    let {all_products} = state;
                    let tempFilterProducts = [...all_products];

                    const {text} = state.filters;
                    
                    if(text){
                        tempFilterProducts = tempFilterProducts.filter((currEle) => {
                          return  currEle.name.toLowerCase().includes(text)
                        })
                    }
                    return{
                        ...state,
                        filter_products: tempFilterProducts,
                    }
        default:
            return state
    }
};
export default filterReducer;