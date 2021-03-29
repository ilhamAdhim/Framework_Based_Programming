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
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    promo={item.promo}
                                    image={item.image}
                                    description={item.description}
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