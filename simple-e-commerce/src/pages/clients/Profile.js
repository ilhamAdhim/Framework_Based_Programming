import { MDBBtn, MDBCard, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import FontAwesome from "react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";
import { logout } from '../../actions/authAction'
import { syncStore } from '../../actions/cartAction';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import '../../styles/quotes.css';

import firebase from "firebase"
import { useEffect } from 'react';

const Profile = props => {
    let history = useHistory();
    const loggedUser = useSelector(state => state.user)

    const [dataCart, setDataCart] = useState([]);
    const userDispatch = useDispatch()

    // ? logoutUser variable is used on onclick button, by updating state in store with dispatch. from authActions 
    const logoutUser = () => {
        userDispatch(logout())
        history.push('/')
    }

    const currentCart = useSelector(state => state.cart)

    const cartDispatcher = useDispatch()

    // ? Fetch cart data from firebase once loaded
    useEffect(async () => {
        let ref = firebase.database().ref(`carts/${loggedUser.user.uid}`)
        ref.on('value', snapshot => {
            const state = snapshot.val()
            // Set state based on local redux store
            if (currentCart.length === 0 && state !== null) {
                setDataCart(Object.values(state))
                // Synchronize redux store with json response (so the data won't gone if refreshed)
            }
        })

    }, [loggedUser.user.uid])

    useEffect(() => {
        dataCart.forEach(updateCartObj => {
            cartDispatcher(syncStore(updateCartObj))
        });
    }, [dataCart]);
    return (
        <>
            <Navbar />
            <MDBContainer>
                {loggedUser.isAuthenticated ? (
                    <>
                        <MDBCard cascade wide >
                            <FontAwesome
                                onClick={() => history.push("/")}
                                className='p-4'
                                name='arrow-circle-left'
                                size='2x'
                                style={{
                                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: "1em", cursor: "pointer"
                                }}
                            />
                            <MDBRow>
                                <MDBCol md='4' sm='12'>
                                    <Image src='https://avatars.githubusercontent.com/u/43105014?v=4' width='150' roundedCircle style={{ marginLeft: '6em' }} />
                                    <h2 className='p-4 text-center'> Hello {loggedUser.user.displayName} !</h2>
                                </MDBCol>
                                <MDBCol lg='8' sm='12' className='mt-4'>
                                    <div className='ml-4 text-center'>
                                        Your email is {loggedUser.user.email} <br />

                                        <blockquote className="quote-card mt-4">
                                            <div>
                                                Mengoding tak ada kata terlambat <br />
                                        Mari menggokil setiap saat
                                    </div>
                                            <cite>
                                                Penggokil
                                    </cite>
                                        </blockquote>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ textAlign: 'center' }}>
                                <MDBCol lg='6' sm='12'>
                                    <MDBBtn color='dark' onClick={logoutUser} style={{ width: '90%' }}>
                                        Sign Out
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol lg='6' sm='12'>
                                    <MDBBtn color='cyan' onClick={(() => history.push('/cart'))} style={{ width: '90%' }}>
                                        Cart
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>

                        </MDBCard>
                    </>
                ) : (
                    <p> You are not logged in </p>
                )}
            </MDBContainer>
            <Footer />
        </>
    )
};


export default Profile;