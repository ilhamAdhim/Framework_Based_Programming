import React, { useState } from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/navbar.css";
import "../styles/footer.css";
import { Button, Container } from "react-bootstrap";

const ShopPage = () => {


    return (
        <React.Fragment>
            <Navbar />
            <Container>
                <h1>
                    Ini content
                </h1>
            </Container>
            <Footer />
        </React.Fragment>

    );
};


export default ShopPage;