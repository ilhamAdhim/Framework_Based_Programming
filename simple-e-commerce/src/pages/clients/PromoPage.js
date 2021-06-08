import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PromoList from '../../components/PromoList';
import { ScrollToTopOnMount } from "./ItemDetailPage";
import { MDBContainer } from 'mdbreact';

const PromoPage = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Navbar />
            <MDBContainer>
                <PromoList />
            </MDBContainer>
            <Footer />
        </>
    );
};


export default PromoPage;