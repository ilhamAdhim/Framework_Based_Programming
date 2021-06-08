import { MDBBtn, MDBCard, MDBCol, MDBRow } from 'mdbreact';
import React, { useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addQty, reduceQty, removeCart } from '../actions/cartAction';

const CartComponent = props => {
    const { ...singleItem } = props
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

    const cartDispatcher = useDispatch()
    const loggedUser = useSelector(state => state.user)
    const currentCart = useSelector(state => state.cart)

    const removeCartHandler = item => cartDispatcher(removeCart(item, loggedUser.user.uid))
    const increaseAmountProduct = item => cartDispatcher(addQty(item, loggedUser.user.uid))
    // Limit the amount, so that it wont go negative
    const decreaseAmountProduct = item => {
        if (item.amount > 1)
            cartDispatcher(reduceQty(item, loggedUser.user.uid))
        else
            cartDispatcher(removeCart(item, loggedUser.user.uid))
    }

    let amountProduct = currentCart.filter((item) => item.id === parseInt(singleItem.id)).length > 0 ?
        currentCart.filter(item => item.id === parseInt(singleItem.id))[0].amount : 0

    useEffect(() => {
        // Update the amount passed from props based on condition in current cart
        singleItem.amount = amountProduct
    }, [currentCart])

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
                    <MDBBtn color="red" onClick={() => decreaseAmountProduct(singleItem)}>
                        <FontAwesome
                            name='minus'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', textAlign: 'center' }}
                        />
                    </MDBBtn>
                    <span style={{ margin: '1em', fontWeight: 'bold' }}> {props.amount}</span>
                    <MDBBtn color="green" onClick={() => increaseAmountProduct(singleItem)}>
                        <FontAwesome
                            name='plus'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', textAlign: 'center' }}
                        />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <MDBBtn color="orange" onClick={() => removeCartHandler(singleItem)} style={styleButton}>
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