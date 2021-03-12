import React, { useState } from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import "../styles/navbar.css";
import "../styles/footer.css";
import { Container } from "react-bootstrap";

const ShopPage = () => {

    return (
        <React.Fragment>
            <Navbar />
            <Container>
                <ProductList />
            </Container>
            <Footer />
        </React.Fragment>

    );
};


export default ShopPage;