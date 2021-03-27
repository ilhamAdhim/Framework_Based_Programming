import React from "react";
import { MDBBtn, MDBCard, MDBCardFooter, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { addCart, addQty } from '../actions/cartAction'

// TODO dispatch action to change global state (cart)
// ? if the data is already in global state, then update the amount instead of adding new object


const ProductCard = props => {

    const addCartDispatch = useDispatch()
    const currentCart = useSelector(state => state.cart)

    const addCartHandler = () => {
        currentCart.find(item => props.id === item.id) == undefined
            ? addCartDispatch(addCart(currentCart, props))
            : addCartDispatch(addQty(props))
    }

    return (
        <MDBCard data-aos="fade-left">
            <MDBCardImage className="img-fluid" src={props.image} waves top hover style={{ height: '260px', }} />
            <MDBCardBody>
                <MDBCardTitle>{props.name}</MDBCardTitle>
                <hr />
                {/* Only show first 70 char in description */}
                <MDBCardText>{props.description.replace(/^(.{70}[^\s]*).*/, "$1") + '...'}</MDBCardText>
                <MDBRow>
                    <MDBCol md="6"> <p className="text-left" style={{ fontSize: '.9em' }}  >{`Promo : ${props.promo}`}</p> </MDBCol>
                    <MDBCol md="6"> <h5 className="text-right" >{`Rp. ${props.price.toLocaleString()}`}</h5>   </MDBCol>
                </MDBRow>

                <MDBCardFooter>
                    <MDBBtn color="success" onClick={addCartHandler}>Cart</MDBBtn>
                </MDBCardFooter>
            </MDBCardBody>
        </MDBCard>
    );
};

export default ProductCard;
