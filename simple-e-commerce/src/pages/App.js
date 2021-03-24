import React, { useEffect } from 'react';
import ShopPage from './ShopPage';
import LoginPage from './LoginPage';
import PromoPage from "../pages/PromoPage";
import ItemDetailPage from './ItemDetailPage';
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";

// Added animate on Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

import Profile from './Profile';

const App = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={ShopPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/promo" component={PromoPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/detail/:productName" component={ItemDetailPage} />
                {/* <PrivateRoute path="/profile" render={() => (<Profile auth={[isAuthenticated, setIsAuth]} />)} /> */}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};


export default App;
