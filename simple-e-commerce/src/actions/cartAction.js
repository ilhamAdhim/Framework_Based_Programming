
export const addCart = (productList, product) => {
    return {
        type: 'ADD_CART',
        payload: [...productList, { ...product, amount: 1 }]
    }
}

export const removeCart = product => {
    return {
        type: 'REMOVE_CART',
        payload: product
    }
}

export const updateCart = (product) => {
    return {
        type: 'UPDATE_CART',
        payload: product,
    }
}

export const addQty = updateCart

export const reduceQty = (product) => {
    return {
        type: 'REDUCE_QTY',
        payload: product,
    }
}