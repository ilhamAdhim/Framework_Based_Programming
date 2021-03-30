import { MDBBtn, MDBRow } from 'mdbreact';
import React from 'react';
import { useHistory } from 'react-router';
import { ReactComponent as ReactLogo } from './add_to_cart.svg';

const AddToCart = () => {
    const history = useHistory()

    const textStyle = {
        marginTop: '2.5em', textAlign: 'center', color: '#a9b0ab', fontWeight: 'bold'
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...textStyle, marginBottom: '2em' }}> Your cart is empty...</h2>
            <MDBRow>
                <ReactLogo style={{ height: '20em' }} />
            </MDBRow>
            <h4 style={textStyle}> Start Shopping Now !</h4>
            <MDBBtn color="success"
                onClick={() => history.push('/')} children={<b>Shop</b>} />


        </div >
    );
};


export default AddToCart;