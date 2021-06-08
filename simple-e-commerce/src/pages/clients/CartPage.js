import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddToCart from '../../assets/AddToCart';
import CartComponent from '../../components/CartComponent';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { addDataFirebase, readDataFirebase } from '../../firebase/services';
import { myFirebase } from '../../firebase';

const CartPage = () => {
    // TODO Get cart from context
    const currentCart = useSelector(state => state.cart)
    const loggedUser = useSelector(state => state.user)

    const [transactionStatus, setTransactionStatus] = useState();
    const [noteStatus, setNoteStatus] = useState("");

    // Get total price of each item
    const totalPerItem = currentCart.map(itemCart => [parseInt(itemCart.price) * parseInt(itemCart.amount)])

    // Sum all price of each item to get total price
    const totalPrice = currentCart.length > 0 ? totalPerItem.reduce((a, b) => parseInt(a) + parseInt(b)) : 0

    useEffect(() => {
        document.title = `Cart | ${loggedUser.user.displayName || 'Public'}`

        let ref = myFirebase.database().ref(`users/user/${loggedUser.user.uid}/transactionStatus`)
        ref.on('value', snapshot => {
            if (snapshot !== null) setTransactionStatus(snapshot.val())
        })
    }, [])

    const makePayment = () => {
        addDataFirebase(`users/user/${loggedUser.user.uid}/transactionStatus`, false)
            .then(() => setNoteStatus("Checking..."))
    }

    useEffect(() => {
        console.log(transactionStatus)
        if (transactionStatus !== undefined)
            transactionStatus ? setNoteStatus("Payment Successfull!") : setNoteStatus("")
    }, [transactionStatus]);

    return (
        <>
            <Navbar />
            <MDBContainer>
                {currentCart.length > 0 ?
                    <>
                        <h1>My Cart</h1>
                        {currentCart.map(item =>
                            <CartComponent key={item.id} {...item} />
                        )}
                        <hr />
                        <MDBRow style={{ color: 'rgb(235, 64, 52)' }}>
                            <MDBCol sm='12' lg='2' style={{ color: 'black' }}>
                                <MDBBtn onClick={makePayment} color="blue">Checkout</MDBBtn>
                                {noteStatus || ''}
                            </MDBCol>
                            <MDBCol lg='10' sm="12">
                                <h3 className="text-right fw-bold mt-2">
                                    Total Price : {`Rp. ${totalPrice.toLocaleString('id-ID')}`}
                                </h3>
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