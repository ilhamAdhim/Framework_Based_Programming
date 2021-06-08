import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduceQty, addQty, removeCart, syncStore, updateCart } from '../../actions/cartAction';
import AddToCart from '../../assets/AddToCart';
import CartComponent from '../../components/CartComponent';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import firebase from "firebase"

const CartPage = () => {
    const [cardProduct, setCardProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    // TODO Get cart from context
    const loggedUser = useSelector(state => state.user)
    const currentCart = useSelector(state => state.cart)

    const cartDispatcher = useDispatch()

    // ? Fetch cart data from firebase once loaded
    useEffect(async () => {
        if (loggedUser.isAuthenticated) {
            let ref = firebase.database().ref(`carts/${loggedUser.user.uid}`)
            ref.on('value', snapshot => {
                setIsLoading(true)
                const state = snapshot.val()
                // Set state based on local redux store
                if (currentCart.length === 0 && state !== null) {
                    console.log(currentCart.length)
                    setCardProduct(Object.values(state))
                    console.log("bhahaah")

                    setIsLoading(false)
                    // Synchronize redux store with json response (so the data won't gone if refreshed)
                    /* Object.values(state).forEach(updateCartObj => {
                        cartDispatcher(updateCart(updateCartObj))
                    }); */
                }
            })
            setCardProduct(currentCart)
            console.log("hehehe")
        }
    }, [])

    const removeCartHandler = item => cartDispatcher(removeCart(item, loggedUser.user.uid))
    const increaseAmountProduct = item => cartDispatcher(addQty(item, loggedUser.user.uid))
    // Limit the amount, so that it wont go negative
    const decreaseAmountProduct = item => {
        if (item.amount > 1)
            cartDispatcher(reduceQty(item, loggedUser.user.uid))
        else
            cartDispatcher(removeCart(item, loggedUser.user.uid))
    }

    // Get total price of each item
    const totalPerItem = currentCart.map(itemCart => [parseInt(itemCart.price) * parseInt(itemCart.amount)])

    // Sum all price of each item to get total price
    const totalPrice = currentCart.length > 0 ? totalPerItem.reduce((a, b) => parseInt(a) + parseInt(b)) : 0

    return (
        <>
            <Navbar />
            <MDBContainer>
                {cardProduct.length > 0 ?
                    <>
                        <h1>My Cart</h1>
                        {cardProduct.map(item =>
                            <CartComponent key={item.id}
                                {...item}
                                increaseAmountProduct={() => increaseAmountProduct(item)}
                                decreaseAmountProduct={() => decreaseAmountProduct(item)}
                                removeCartHandler={() => removeCartHandler(item)}
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