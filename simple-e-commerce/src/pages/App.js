import React, { useEffect } from 'react';

//Users pages
import Profile from './clients/Profile';
import ShopPage from './clients/ShopPage';
import CartPage from "./clients/CartPage";
import LoginPage from './clients/LoginPage';
import PromoPage from "./clients/PromoPage";
import ItemDetailPage from './clients/ItemDetailPage';

// Admin Pages
import ManageProduct from './admins/ManageProduct';
import ManageUsers from './admins/ManageUsers';
import VerifyTransaction from './admins/VerifyTransaction';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Added animate on Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminRoute from '../components/admins/AdminRoute';


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

                <AdminRoute exact path="/ManageProducts" component={ManageProduct} />
                <AdminRoute exact path="/ManageUsers" component={ManageUsers} />
                <AdminRoute exact path="/VerifyTransaction" component={VerifyTransaction} />
                {/* {<PrivateRoute path="/profile" render={() => (<Profile auth={[isAuthenticated, setIsAuth]} />)} />} */}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};


export default App;
