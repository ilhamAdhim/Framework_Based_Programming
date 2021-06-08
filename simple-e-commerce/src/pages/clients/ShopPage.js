
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import { Container } from "react-bootstrap";
import "../../styles/navbar.css";
import "../../styles/footer.css";
import { useDispatch, useSelector } from 'react-redux';
import { addQty, reduceQty, removeCart } from '../../actions/cartAction';
import Thinking from '../../assets/Thinking';
import { useEffect, useState } from "react";
import firebase from "firebase"

// const BASE_API = 'http://localhost:3001/products'
function ShopPage() {

    // TODO Get cart from context
    const loggedUser = useSelector(state => state.user)
    const cartDispatcher = useDispatch()
    const removeCartHandler = (item) => cartDispatcher(removeCart(item))

    // Limit the amount, so that it wont go negative
    const decreaseAmountProduct = item => {
        if (item.amount > 0) cartDispatcher(reduceQty(item, loggedUser.user.uid))
    }
    const increaseAmountProduct = item => cartDispatcher(addQty(item, loggedUser.user.uid))

    const [products, setProducts] = useState([])

    useEffect(async () => {
        let ref = firebase.database().ref("products/")
        ref.on('value', snapshot => {
            const state = snapshot.val()
            console.log(state)
            setProducts(state)
        })
    }, [])

    if (!products) return <div>loading...</div>

    return (
        <>
            <Navbar />
            <Container>
                <Thinking />
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