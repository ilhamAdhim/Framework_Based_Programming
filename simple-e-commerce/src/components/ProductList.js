import React, { } from 'react';
import ProductCard from "./ProductCard";
import { MDBRow, MDBCol, MDBCardGroup } from 'mdbreact';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <>
            <h1 className='text-center mb-4'>{props.promoName ?? 'All products'}</h1>
            <MDBCardGroup>
                <MDBRow>
                    {props.data.map(item =>
                        <MDBCol md="4" style={{ marginBottom: '2em' }} key={item.id}>
                            <Link to={`/detail/${item.id}`} key={item.id} style={{ color: 'black' }}>
                                <ProductCard
                                    {...item}
                                />
                            </Link>
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBCardGroup>
        </>
    );
};


export default ProductList;