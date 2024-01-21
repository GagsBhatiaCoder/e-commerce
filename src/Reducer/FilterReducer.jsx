
const filterReducer = (state, action) => {
    switch (action.type) {

        case "Load_Filter_products":
            let priceArr = action.payload.map((currEle) => currEle.price);
            // let maxPrice = priceArr.reduce((initialVal, currEle) => 
            // Math.max(initialVal, currEle), 0)
            let maxPrice = Math.max(...priceArr);


            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice },
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
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProducts = [...all_products];

            const { text, category, company, colors, price } = state.filters;

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((currEle) => {
                    return currEle.name.toLowerCase().includes(text)
                })
            }
            if (category !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currEle) => {
                    return currEle.category.toLowerCase() === category.toLowerCase();
                })
            }
            if (company !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currEle) => {
                    return currEle.company.toLowerCase() === company.toLowerCase();
                })
            }
            if (colors.toLowerCase() !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currEle) => {
                    return currEle.colors.includes(colors.toLowerCase())
                })
            }
            if (price === 0) {
                tempFilterProducts = tempFilterProducts.filter((currEle) => currEle.price === price)
            }
            else {
                tempFilterProducts = tempFilterProducts.filter((currEle) => currEle.price <= price);
            }
           
            return {
                ...state,
                filter_products: tempFilterProducts,
            }
            case "CLEAR_FILTERS" :
            return{
                ...state,
                filters: {
                    text: "",
                    category: "all",
                    company: "all",
                    colors: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0,
                  },
            }
            default:
            return state
    }
};
export default filterReducer;