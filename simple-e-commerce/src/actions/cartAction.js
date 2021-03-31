
// export const addCartSuccess = (productList) => {
//     return {
//         type: 'ADD_CART',
//         payload: [...productList]
//     }
// }

import axios from "axios"

export const addCart = product => {
    return dispatch => {
        const dataInput = {
            "id": product.id,
            "amount": 1,
            "name": product.name,
            "price": product.price,
            "promo": product.promo,
            "image": product.image,
            "description": product.description
        }

        return axios.post('http://localhost:3002/cart', JSON.stringify(dataInput), { headers: { "Content-Type": "application/json" } })
            .then(res => dispatch({ type: 'ADD_CART', payload: res.data }))
            .catch(() => dispatch({ type: 'ADD_CART', payload: { amount: 1, ...product } }))
    }
}

export const syncStore = product => {
    return {
        type: 'ADD_CART',
        payload: product
    }
}

export const removeCart = product => {
    /* 
 */
    return dispatch => {
        return axios.delete(`http://localhost:3002/cart/${product.id}`, { headers: { "Content-Type": "application/json" } })
            .then(res => dispatch({ type: 'REMOVE_CART', payload: product }))
            .catch(() => dispatch({ type: 'REMOVE_CART', payload: product }))
    }
}

// TODO
export const updateCart = product => {
    return dispatch => {
        const dataInput = {
            "id": product.id,
            "amount": ++product.amount,
            "name": product.name,
            "price": product.price,
            "promo": product.promo,
            "image": product.image,
            "description": product.description
        }

        return axios.put(`http://localhost:3002/cart/${product.id}`, JSON.stringify(dataInput), { headers: { "Content-Type": "application/json" } })
            .then(res => {
                dispatch({ type: 'UPDATE_CART', payload: res.data })
            }).catch(() => dispatch({ type: 'UPDATE_CART', payload: product }))
    }
}
// TODO

export const addQty = updateCart

export const reduceQty = product => {
    return dispatch => {
        const dataInput = {
            "id": product.id,
            "amount": --product.amount,
            "name": product.name,
            "price": product.price,
            "promo": product.promo,
            "image": product.image,
            "description": product.description
        }

        return axios.put(`http://localhost:3002/cart/${product.id}`, JSON.stringify(dataInput), { headers: { "Content-Type": "application/json" } })
            .then(res => {
                dispatch({ type: 'REDUCE_QTY', payload: res.data })
            }).catch(() => dispatch({ type: 'REDUCE_QTY', payload: product }))

    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
    }
}