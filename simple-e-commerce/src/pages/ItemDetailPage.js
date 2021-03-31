import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCardGroup } from 'mdbreact';
import axios from 'axios';
import ItemDetail from '../components/ItemDetail';

export function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

const ItemDetailPage = () => {
    let { idProduct } = useParams();

    // TODO Fetch data from local json server
    const [singleItem, setSingleItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [samePromoCode, setSamePromoCode] = useState([])
    const [products, setProducts] = useState([])

    useEffect(async () => {
        setIsLoading(true)
        const { data } = await axios.get('http://localhost:3001/products');
        setProducts(data)
        setSingleItem(data.find(item => item.id === parseInt(idProduct)));

        setIsLoading(false)
    }, [idProduct])

    useEffect(() => {
        setSamePromoCode(products.filter(item => item.promo === singleItem.promo));
    }, [singleItem, idProduct])

    // Display products with same promo code

    return (
        <>
            <ScrollToTopOnMount />
            <Navbar />
            <MDBContainer>
                {!isLoading ?
                    <ItemDetail {...singleItem} />
                    :
                    <p> Loading... </p>}

                <h4 className="p-4">You might also interested in</h4>
                <MDBCardGroup>
                    <MDBRow>
                        {samePromoCode.map(item =>
                            <MDBCol md="4" style={{ marginBottom: '2em' }} key={item.id}>
                                <Link to={`/detail/${item.id}`} key={item.id} style={{ color: 'black' }} onClick={() => window.scrollTo(0, 0)}>
                                    <ProductCard id={item.id}
                                        {...item}
                                    />
                                </Link>
                            </MDBCol>
                        )}
                    </MDBRow>
                </MDBCardGroup>
            </MDBContainer>
            <Footer />
        </>
    );
};

export default ItemDetailPage;