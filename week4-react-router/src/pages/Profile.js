import React from 'react';
import {
    useHistory,
} from "react-router-dom";

const Profile = props => {
    let history = useHistory();
    console.log(props.isAuthenticated)
    return props.isAuthenticated ? (
        <p>
            Welcome! {" "}
            <button onClick={() => {
                // fakeAuth.signout(() => history.push("/"))
                props.setIsAuth(false)
                history.push("/")
            }}>
                Sign Out
                </button>
        </p>
    ) : (
        <p> You are not logged in </p>
    )
};


export default Profile;