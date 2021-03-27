export const userCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART':
            // TODO ADD_CART
            return action.payload
        case 'REMOVE_CART':
            // TODO REMOVE_CART
            return state.filter(item => item._id === action.payload._id)
        case 'UPDATE_CART':
            // TODO UPDATE_CART
            return state.map(item => item.id === action.payload.id ? { amount: item.amount++, ...item } : item)
        case 'REDUCE_QTY':
            return state.map(item => item.id === action.payload.id ? { amount: item.amount--, ...item } : item)
        default:
            return state
    }
}