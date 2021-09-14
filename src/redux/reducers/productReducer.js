const initialState = {
    products: [{
        id:1,
        title:"red sandals",
        category: "shoes"
    }],
}

export const productReducer = (state, action) => {
    switch(action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }

}