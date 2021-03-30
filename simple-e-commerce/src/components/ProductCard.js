import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon, MDBCol, MDBRow } from "mdbreact";

import { useDispatch, useSelector } from "react-redux";
import { addCart, addQty } from '../actions/cartAction'
import { useHistory } from "react-router";

// TODO dispatch action to change global state (cart)
// ? if the data is already in global state, then update the amount instead of adding new object


const ProductCard = props => {

    const addCartDispatch = useDispatch()
    const loggedUser = useSelector(state => state.user)
    const currentCart = useSelector(state => state.cart)
    const history = useHistory();

    const addCartHandler = () => {
        currentCart.find(item => props.id === item.id) === undefined
            ? addCartDispatch(addCart(currentCart, props))
            : addCartDispatch(addQty(props))
    }

    const redirectIfLoggedOut = () => loggedUser.status ? addCartHandler() : history.push('/login')

    return (
        <MDBCard className="m-2" cascade ecommerce style={{ height: '550px' }}>
            <MDBCardImage cascade top src={props.image} waves />
            <MDBCardBody cascade className="text-center">

                <MDBCardTitle>
                    <strong>{props.name}</strong>
                </MDBCardTitle>
                <MDBCardText>
                    {props.description.replace(/^(.{80}[^\s]*).*/, "$1") + '...'}
                </MDBCardText>
                <div style={{ position: 'absolute' }} className='fixed-bottom p-4'>
                    <span className="float-left">{`Rp. ${props.price.toLocaleString()}`}</span>
                    <span className="float-right">
                        <MDBTooltip placement="top">
                            <MDBBtn color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                                <MDBIcon icon="shopping-cart" size='2x' className="green-text pr-3" onClick={redirectIfLoggedOut} />
                            </MDBBtn>
                            <div>Added to Wishlist</div>
                        </MDBTooltip>
                    </span>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}


export default ProductCard;
