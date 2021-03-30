import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, reduceQty, addQty, removeCart } from '../actions/cartAction';
import AddToCart from '../assets/AddToCart';
import CartComponent from '../components/CartComponent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CartPage = props => {
    // TODO Get cart from context
    const currentCart = useSelector(state => state.cart)
    const cartDispatcher = useDispatch()

    const addCartHandler = (item) => cartDispatcher(addCart(currentCart, item))
    const removeCartHandler = (item) => cartDispatcher(removeCart(item))

    // Limit the amount, so that it wont go negative
    const decreaseAmountProduct = item => {
        if (item.amount > 0) {
            cartDispatcher(reduceQty(item))
        }
    }
    const increaseAmountProduct = item => cartDispatcher(addQty(item))

    // Get total price of each item
    const totalPerItem = currentCart.map(itemCart => [parseInt(itemCart.price) * parseInt(itemCart.amount)])
    // Sum all price of each item to get total price

    const totalPrice = currentCart.length > 0 ? totalPerItem.reduce((a, b) => parseInt(a) + parseInt(b)) : 0
    // ! Empty cart and access the cart is still error
    return (
        <>
            <Navbar />
            <MDBContainer>
                {
                    currentCart.length > 0 ?
                        <>
                            <h1>My Cart</h1>
                            {currentCart.map(item =>
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