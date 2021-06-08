import React, { useEffect } from 'react';
import ShopPage from './clients/ShopPage';
import LoginPage from './clients/LoginPage';
import PromoPage from "./clients/PromoPage";
import CartPage from "./clients/CartPage";
import ItemDetailPage from './clients/ItemDetailPage';
import Profile from './clients/Profile';
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";

// Added animate on Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ShopPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/promo" component={PromoPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/detail/:idProduct" component={ItemDetailPage} />
                {/* <PrivateRoute path="/profile" render={() => (<Profile auth={[isAuthenticated, setIsAuth]} />)} /> */}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};


export default App;
