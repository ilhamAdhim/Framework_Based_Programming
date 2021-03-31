import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

// TODO dispatch action to change global state (cart)
// ? if the data is already in global state, then update the amount instead of adding new object


const ProductCard = props => {

    const { decreaseAmountProduct, increaseAmountProduct, removeCartHandler, ...singleItem } = props

    return (
        <MDBCard className="m-2" cascade ecommerce style={{ height: '550px' }}>
            <MDBCardImage cascade top src={singleItem.image} waves />
            <MDBCardBody cascade className="text-center">

                <MDBCardTitle>
                    <strong>{singleItem.name}</strong>
                </MDBCardTitle>
                <MDBCardText>
                    {singleItem.description.replace(/^(.{80}[^\s]*).*/, "$1") + '...'}
                </MDBCardText>
                <div style={{ position: 'absolute' }} className='fixed-bottom p-4'>
                    <span className="float-left">{`Rp. ${singleItem.price.toLocaleString()}`}</span>

                </div>
            </MDBCardBody>
        </MDBCard>
    );
}


export default ProductCard;
