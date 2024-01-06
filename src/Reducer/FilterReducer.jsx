
 const filterReducer = (state, action) => {
    switch (action.type) {
        case "Load_Filter_products":
            return {
                ...state,
                filter_products:[ ...action.payload],
                all_products:[ ...action.payload],
            }
            case "Set_Gridview":
                return{
                    ...state,
                    grid_view:true,
                }
                case "Set_Listview":
                return{
                    ...state,
                    grid_view:false,
                }
            default:
                return state
    }
};
export default filterReducer;