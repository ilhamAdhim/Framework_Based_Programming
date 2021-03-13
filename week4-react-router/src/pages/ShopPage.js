import React from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { Container } from "react-bootstrap";
import { sampleProducts } from "../components/ProductList";
import "../styles/navbar.css";
import "../styles/footer.css";


const ShopPage = () => {

    return (
        <>
            <Navbar />
            <Container>
                <ProductList data={sampleProducts} />
            </Container>
            <Footer />
        </>

    );
};


export default ShopPage;