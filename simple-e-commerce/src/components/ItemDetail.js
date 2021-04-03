import React, { useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCol, MDBRow } from 'mdbreact';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from "react-fontawesome";
import { addCart, addQty, reduceQty, removeCart } from '../actions/cartAction';

const ItemDetail = props => {
    let { ...singleItem } = props
    let history = useHistory();
    let { idProduct } = useParams();
    const addCartDispatch = useDispatch()

    const currentCart = useSelector(state => state.cart)
    const loggedUser = useSelector(state => state.user)
    // Display Clicked product from product list
    let styleCard = { padding: '2em', marginBottom: '1em' }

    // ! Cart update differently in here
    const addCartHandler = () => addCartDispatch(addCart(singleItem))

    const decreaseAmountProduct = (item) => {
        if (item.amount > 1) {
            addCartDispatch(reduceQty(item))
        } else {
            addCartDispatch(removeCart(item))
        }
    }
    const increaseAmountProduct = (item) => { addCartDispatch(addQty(item)) }

    let amountProduct = currentCart.filter((item) => item.id === parseInt(idProduct)).length > 0 ?
        currentCart.filter(item => item.id === parseInt(idProduct))[0].amount : 0

    const redirectIfLoggedOut = () => loggedUser.status ? addCartHandler() : history.push('/login')

    useEffect(() => {
        // Update the amount passed from props based on condition in current cart
        singleItem.amount = amountProduct
    }, [currentCart])

    const renderManageAmount = (
        <MDBRow>
            <MDBCol>
                <MDBBtn color="red" onClick={() => decreaseAmountProduct(singleItem)}>
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
                <MDBBtn color="green" onClick={() => increaseAmountProduct(singleItem)}>
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

                    <MDBRow>
                        <MDBCol>
                            <img height='268' width='268' src={singleItem.image ?? ' '}
                                className="rounded mx-auto d-block" alt={singleItem.image} />
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBCol>
            <MDBCol md="4">
                <MDBCard style={styleCard}>
                    <h4 className='text-right mt-4' style={{ fontWeight: 'bold' }}> Rp. {singleItem.price.toLocaleString('id-ID') ?? ''} </h4>
                    <hr />
                    <p className="text-muted" style={{ textAlign: 'justify' }}> {singleItem.description ?? ' '} </p>

                    {
                        currentCart.filter(item => item.id === parseInt(idProduct)).length > 0
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

    );
};


export default ItemDetail;