import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
    const loggedUser = useSelector(state => state.user)

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            !loggedUser.isAuthenticated ?
                <Component {...props} />
                : <Redirect to="/signin" />
        )} />
    );
};

export default AdminRoute;