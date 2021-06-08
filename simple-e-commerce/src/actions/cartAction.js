import axios from "axios"
import { myFirebase } from "../firebase"

export const addCart = (product, uid) => {
    console.log("dari addCart")
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
        return myFirebase.database().ref(`carts/${uid}/${dataInput.id}`).set(dataInput)
            .then(() => dispatch({ type: 'ADD_CART', payload: dataInput }))
            .catch(() => dispatch({ type: 'ADD_CART', payload: { amount: 1, ...product } }))
    }
}

export const syncStore = product => {
    console.log("dari syncstore")
    return {
        type: 'ADD_CART',
        payload: product
    }
}

export const removeCart = (product, uid) => {
    return dispatch => {
        return myFirebase.database().ref(`carts/${uid}/${product.id}`).set(null)
            .then(() => dispatch({ type: 'REMOVE_CART', payload: product }))
            .catch(() => dispatch({ type: 'REMOVE_CART', payload: product }))
    }
}

export const updateCart = (product, uid) => {
    console.log("hehehe updated")
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

        return myFirebase.database().ref(`carts/${uid}/${dataInput.id}`).set(dataInput)
            .then(() => dispatch({ type: 'UPDATE_CART', payload: dataInput }))
            .catch(() => dispatch({ type: 'UPDATE_CART', payload: dataInput }))
    }
}

export const addQty = updateCart

export const reduceQty = (product, uid) => {
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

        return myFirebase.database().ref(`carts/${uid}/${dataInput.id}`).set(dataInput)
            .then(() => dispatch({ type: 'REDUCE_QTY', payload: dataInput }))
            .catch(() => dispatch({ type: 'REDUCE_QTY', payload: dataInput }))
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
    }
}