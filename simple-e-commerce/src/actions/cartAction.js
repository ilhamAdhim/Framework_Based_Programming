export const addCart = idObj => {
    return {
        type: 'ADD_CART',
        id: idObj
    }
}

export const removeCart = idObj => {
    return {
        type: 'REMOVE_CART',
        id: idObj
    }
}

export const updateCart = idObj => {
    return {
        type: 'UPDATE_CART',
        id: idObj
    }
}