import { MDBBtn, MDBCard, MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import FontAwesome from 'react-fontawesome';

const CartComponent = props => {
    const { decreaseAmountProduct, increaseAmountProduct, ...singleItem } = props
    return (
        <MDBCard border="dashed" style={{ padding: '2em' }} >
            <MDBRow>
                <MDBCol lg={2} s={12} style={{ textAlign: 'center' }}>
                    <img src={props.image} width={100} />
                </MDBCol>
                <MDBCol>
                    {props.name}
                </MDBCol>
                <MDBCol>
                    {`Rp. ${(props.price * props.amount).toLocaleString('id-ID')}`}
                </MDBCol>
                <MDBCol lg={4} s={12} style={{ textAlign: 'center' }}>
                    <MDBBtn color="red" onClick={() => props.decreaseAmountProduct(singleItem)}>
                        <FontAwesome
                            name='minus'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', textAlign: 'center' }}
                        />
                    </MDBBtn>
                    <span style={{ margin: '1em', fontWeight: 'bold' }}> {props.amount}</span>
                    <MDBBtn color="green" onClick={() => props.increaseAmountProduct(singleItem)}>
                        <FontAwesome
                            name='plus'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', textAlign: 'center' }}
                        />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    );
};


export default CartComponent;