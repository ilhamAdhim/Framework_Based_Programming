import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduceQty, addQty, removeCart, syncStore } from '../actions/cartAction';
import AddToCart from '../assets/AddToCart';
import CartComponent from '../components/CartComponent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CartPage = () => {
    const [cardProduct, setCardProduct] = useState([])

    // TODO Get cart from context
    const currentCart = useSelector(state => state.cart)
    const cartDispatcher = useDispatch()

    // ? Fetch data from localhost:3002/cart once loaded
    useEffect(async () => {
        const { data } = await axios.get('http://localhost:3002/cart')
        // Set state based on local redux store
        if (currentCart.length === 0) {
            setCardProduct(data)
            // Synchronize redux store with json response (so the data won't gone if refreshed)
            data.forEach(updateCartObj => {
                cartDispatcher(syncStore(updateCartObj))
            });
        } else {
            setCardProduct(currentCart)
        }
    }, [currentCart])

    const removeCartHandler = (item) => cartDispatcher(removeCart(item))
    const increaseAmountProduct = item => cartDispatcher(addQty(item))
    // Limit the amount, so that it wont go negative
    const decreaseAmountProduct = item => {
        if (item.amount > 1) {
            cartDispatcher(reduceQty(item))
        } else {
            cartDispatcher(removeCart(item))
        }
    }

    // Get total price of each item
    const totalPerItem = currentCart.map(itemCart => [parseInt(itemCart.price) * parseInt(itemCart.amount)])
    // Sum all price of each item to get total price

    const totalPrice = currentCart.length > 0 ? totalPerItem.reduce((a, b) => parseInt(a) + parseInt(b)) : 0

    return (
        <>
            <Navbar />
            <MDBContainer>
                {
                    cardProduct.length > 0 ?
                        <>
                            <h1>My Cart</h1>
                            {cardProduct.map(item =>
                                <CartComponent key={item.id}
                                    {...item}
                                    increaseAmountProduct={increaseAmountProduct}
                                    decreaseAmountProduct={decreaseAmountProduct}
                                    removeCartHandler={removeCartHandler}
                                />
                            )}
                            <hr />
                            <MDBRow style={{ color: 'rgb(235, 64, 52)' }}>
                                <MDBCol lg='9'>
                                    <h3 style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Price : </h3>
                                </MDBCol>
                                <MDBCol>
                                    <h3 style={{ fontWeight: 'bold' }}> {`Rp. ${totalPrice.toLocaleString('id-ID')}`}</h3>
                                </MDBCol>
                            </MDBRow>
                        </>
                        :
                        <AddToCart />
                }
            </MDBContainer>
            <Footer />

        </>
    );
};

export default CartPage;