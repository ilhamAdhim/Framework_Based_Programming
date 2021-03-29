import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FontAwesome from "react-fontawesome";
import { addCart, addQty, reduceQty } from '../actions/cartAction';
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBBtn, MDBCardGroup } from 'mdbreact';
import axios from 'axios';

export function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

const ItemDetailPage = () => {

    let history = useHistory();
    let { idProduct } = useParams();
    const addCartDispatch = useDispatch()
    const loggedUser = useSelector(state => state.user)
    const currentCart = useSelector(state => state.cart)

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
    // Display Clicked product from product list
    let styleCard = { padding: '2em', marginBottom: '1em' }

    // ! Cart update differently in here
    const addCartHandler = () => addCartDispatch(addCart(currentCart, singleItem))

    const decreaseAmountProduct = () => addCartDispatch(reduceQty(singleItem))
    const increaseAmountProduct = () => addCartDispatch(addQty(singleItem))

    let amountProduct = currentCart.filter((item) => item.id === parseInt(idProduct)).length > 0 ?
        currentCart.filter(item => item.id === parseInt(idProduct))[0].amount : 0

    const redirectIfLoggedOut = () => loggedUser.status ? addCartHandler() : history.push('/login')

    const renderManageAmount = (
        <MDBRow>
            <MDBCol>
                <MDBBtn color="red" onClick={decreaseAmountProduct}>
                    <FontAwesome
                        className='text-center'
                        name='minus'
                        size='2x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </MDBBtn>
            </MDBCol>
            <MDBCol>
                <h2 style={{ textAlign: 'center', marginTop: '.5em', fontWeight: 'bold' }}> {`${amountProduct}`} </h2>
            </MDBCol>

            <MDBCol>
                <MDBBtn color="green" onClick={increaseAmountProduct}>
                    <FontAwesome
                        className='text-center'
                        name='plus'
                        size='2x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </MDBBtn>
            </MDBCol>

        </MDBRow>
    )

    return (
        <>
            <ScrollToTopOnMount />
            <Navbar />
            <MDBContainer>
                {!isLoading ?
                    <MDBRow>
                        <MDBCol md="8">
                            <MDBCard style={styleCard}>
                                <MDBRow>
                                    <MDBCol sm="1">
                                        <FontAwesome
                                            onClick={() => history.goBack()}
                                            className='text-center'
                                            name='arrow-circle-left'
                                            size='2x'
                                            style={{
                                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: "1em", cursor: "pointer"
                                            }}
                                        />
                                    </MDBCol>
                                    <MDBCol sm="10">
                                        <figcaption className="figure-caption text-center p-4" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
                                            {singleItem.name}
                                        </figcaption>
                                    </MDBCol>
                                </MDBRow>
                                {<MDBCardImage className="img-fluid" src={singleItem.image ?? ' '} waves top hover />}
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBCard style={styleCard}>
                                <h4 className='text-right mt-4' style={{ fontWeight: 'bold' }}> Rp. {singleItem.price.toLocaleString('id-ID') ?? ''} </h4>
                                <hr />
                                <p className="text-muted"> {singleItem.description ?? ' '} </p>

                                {
                                    currentCart.filter((item) => item.id === parseInt(idProduct)).length > 0
                                        ? renderManageAmount
                                        : <MDBBtn color="success" onClick={redirectIfLoggedOut}>
                                            <FontAwesome
                                                className='text-center'
                                                name='shopping-cart'
                                                size='2x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            />
                                            <span className="ml-4 font-weight-bold" style={{ fontSize: '1.3em' }} > Add to cart </span>
                                        </MDBBtn>
                                }
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    :
                    <p> Loading... </p>}

                <h4 className="p-4">You might also interested in</h4>
                <MDBCardGroup>
                    <MDBRow>
                        {samePromoCode.map(item =>
                            <MDBCol md="4" style={{ marginBottom: '2em' }}>
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