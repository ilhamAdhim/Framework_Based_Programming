import React from 'react';
import FontAwesome from "react-fontawesome";
import { useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";

const Profile = props => {
    let history = useHistory();
    const loggedUser = useSelector(state => state.user)

    return loggedUser.status ? (
        <p>
            Welcome {loggedUser.username} !
            <br />
            Your email is {loggedUser.email}
            <br />

            <FontAwesome
                onClick={() => history.push({ pathname: "/", isAuthenticated: true })}
                className='text-center'
                name='arrow-circle-left'
                size='2x'
                style={{
                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: "1em", cursor: "pointer"
                }}
            />

            <button onClick={() => {
                // fakeAuth.signout(() => history.push("/"))
                history.push({ pathname: "/", isAuthenticated: false })
            }}>
                Sign Out
                </button>
        </p >
    ) : (
        <p> You are not logged in </p>
    )
};


export default Profile;