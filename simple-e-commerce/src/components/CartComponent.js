import { MDBBtn, MDBCard, MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import FontAwesome from 'react-fontawesome';

const CartComponent = props => {
    const { decreaseAmountProduct, increaseAmountProduct, removeCartHandler, ...singleItem } = props
    console.log(singleItem)
    const styleRemoveButton = {
        transform: 'translate(80em, -12em)',
        width: '20px',
        paddingLeft: '1em'
    }

    const styleRemoveButtonMobileView = {
        transform: 'translate(20em, -22em)',
        width: '20px',
        paddingLeft: '1em'
    }

    const styleButton = window.screen.width > 890 ? styleRemoveButton : styleRemoveButtonMobileView

    return (
        <MDBCard ecommerce style={{ padding: '2em', marginTop: '2em' }} >
            <MDBRow>
                <MDBCol lg='2' sm='12' style={{ textAlign: 'center' }}>
                    <img src={props.image} width={100} alt={props.image} />
                </MDBCol>
                <MDBCol>
                    {props.name}
                </MDBCol>
                <MDBCol>
                    {`Rp. ${(props.price * props.amount).toLocaleString('id-ID')}`}
                </MDBCol>
                <MDBCol lg='4' s='12' style={{ textAlign: 'center', marginTop: '2em' }}>
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
            <MDBBtn color="orange" onClick={() => props.removeCartHandler(singleItem)} style={styleButton}>
                <FontAwesome
                    name='close'
                    size='2x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', textAlign: 'center' }}
                />
            </MDBBtn>
        </MDBCard>
    );
};


export default CartComponent;