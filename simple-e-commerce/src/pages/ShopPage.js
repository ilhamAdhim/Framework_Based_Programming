import { useEffect, useState } from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { Container } from "react-bootstrap";
import "../styles/navbar.css";
import "../styles/footer.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addQty, reduceQty, removeCart } from '../actions/cartAction';


function ShopPage() {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:3001/products')
        setProducts(data)
    }, [])

    // TODO Get cart from context
    const currentCart = useSelector(state => state.cart)
    const cartDispatcher = useDispatch()

    const removeCartHandler = (item) => cartDispatcher(removeCart(item))

    // Limit the amount, so that it wont go negative
    const decreaseAmountProduct = item => {
        if (item.amount > 0) {
            cartDispatcher(reduceQty(item))
        }
    }
    const increaseAmountProduct = item => cartDispatcher(addQty(item))

    return (
        <>
            <Navbar />
            <Container>
                <ProductList
                    data={products}
                    increaseAmountProduct={increaseAmountProduct}
                    decreaseAmountProduct={decreaseAmountProduct}
                    removeCartHandler={removeCartHandler} />
            </Container>
            <Footer />
        </>

    );
};


export default ShopPage;