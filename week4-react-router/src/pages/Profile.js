import React from 'react';
import {
    useHistory,
} from "react-router-dom";

const Profile = props => {
    let history = useHistory();
    console.log(history.location.isAuthenticated)

    return history.location.isAuthenticated ? (
        <p>
            Welcome User!
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