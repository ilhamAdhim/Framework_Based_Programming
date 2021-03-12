import React, { useState } from 'react';
import ShopPage from './ShopPage';
import LoginPage from './LoginPage';
import ItemDetailPage from './ItemDetailPage';
import {
    BrowserRouter as Router, Route, Switch, Redirect, useHistory,
    useLocation,
} from "react-router-dom";
import Profile from './Profile';


const App = () => {
    const [isAuthenticated, setIsAuth] = useState(false);

    const PrivateRoute = ({ children, ...rest }) => {
        return (
            <Route {...rest} render={({ location }) => isAuthenticated ? (children) :
                <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }} />} />
        )
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={ShopPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/detail/:id" component={ItemDetailPage} />
                <PrivateRoute path="/profile" render={() => (<Profile auth={[isAuthenticated, setIsAuth]} />)} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};


export default App;
