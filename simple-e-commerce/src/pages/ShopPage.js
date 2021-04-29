
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { Container } from "react-bootstrap";
import "../styles/navbar.css";
import "../styles/footer.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addQty, reduceQty, removeCart } from '../actions/cartAction';
import Thinking from '../assets/Thinking';
import useSWR from 'swr';

const BASE_API = 'http://localhost:3001/products'

function ShopPage() {

    // TODO Get cart from context
    const cartDispatcher = useDispatch()

    const removeCartHandler = (item) => cartDispatcher(removeCart(item))

    // Limit the amount, so that it wont go negative
    const decreaseAmountProduct = item => {
        if (item.amount > 0) {
            cartDispatcher(reduceQty(item))
        }
    }
    const increaseAmountProduct = item => cartDispatcher(addQty(item))


    const getFetcher = async (path) => {
        const res = await fetch(path);
        return res.json();
    };


    const { data: products, error } = useSWR(BASE_API, getFetcher)

    // ? Test Change to SWR
    /* useEffect(async () => {
        console.log(products)
        setProducts(fetchResult)
        console.log(products)
    }, [])
 */

    if (error) return <div>failed to load</div>
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