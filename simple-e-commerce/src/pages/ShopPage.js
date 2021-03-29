import { useEffect, useState } from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { Container } from "react-bootstrap";
import "../styles/navbar.css";
import "../styles/footer.css";
import axios from 'axios';


function ShopPage() {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:3001/products')
        setProducts(data)
    }, [])
    return (
        <>
            <Navbar />
            <Container>
                <ProductList data={products} />
            </Container>
            <Footer />
        </>

    );
};


export default ShopPage;