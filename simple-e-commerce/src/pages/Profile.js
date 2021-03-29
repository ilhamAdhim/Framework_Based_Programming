import { MDBContainer } from 'mdbreact';
import React from 'react';
import FontAwesome from "react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";
import { logout } from '../actions/authAction'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Profile = props => {
    let history = useHistory();
    const loggedUser = useSelector(state => state.user)

    const userDispatch = useDispatch()

    // ? logoutUser variable is used on onclick button, by updating state in store with dispatch. from authActions 
    const logoutUser = () => {
        userDispatch(logout())
        history.push('/')
    }

    return (
        <>
            <Navbar />
            <MDBContainer>
                {loggedUser.status ? (
                    <p>
                        Welcome {loggedUser.username} !
                        <br />
            Your email is {loggedUser.email}
                        <br />

                        <FontAwesome
                            onClick={() => history.push("/")}
                            className='text-center'
                            name='arrow-circle-left'
                            size='2x'
                            style={{
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: "1em", cursor: "pointer"
                            }}
                        />

                        <button onClick={logoutUser}>
                            Sign Out
                </button>
                    </p >
                ) : (
                    <p> You are not logged in </p>
                )}
            </MDBContainer>
            <Footer />
        </>
    )
};


export default Profile;