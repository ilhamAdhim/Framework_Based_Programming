import React, { useState } from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import PromoList from "../components/PromoList";
import "../styles/navbar.css";
import "../styles/footer.css";
import { Button, Container } from "react-bootstrap";

const ShopPage = () => {

    return (
        <React.Fragment>
            <Navbar />
            <Container>
                <PromoList />
                <ProductList />
            </Container>
            <Footer />
        </React.Fragment>

    );
};


export default ShopPage;