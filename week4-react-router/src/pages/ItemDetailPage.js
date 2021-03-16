import React, { useEffect } from 'react';
import { sampleProducts } from "../components/ProductList";
import { Link, useHistory, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBBtn, MDBCardGroup } from 'mdbreact';
import Footer from '../components/Footer';
import FontAwesome from "react-fontawesome";
import ProductCard from "../components/ProductCard";


export function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

const ItemDetailPage = () => {
    let history = useHistory();
    let { productName } = useParams();

    // Biar SEO Friendly
    let formattedProduct = productName.replace(/_/g, ' ');
    let product = sampleProducts.find(item => item.product_name === formattedProduct)

    let samePromoCode = sampleProducts.filter(item => item.promo === product.promo)
    let styleCard = { padding: '2em', marginBottom: '1em' }

    return (
        <>
            <ScrollToTopOnMount />

            <Navbar />
            <MDBContainer>
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
                                        {product.product_name}
                                    </figcaption>
                                </MDBCol>
                            </MDBRow>
                            <MDBCardImage className="img-fluid" src={product.image} waves top hover />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard style={styleCard}>
                            <h4 className='text-right mt-4' style={{ fontWeight: 'bold' }}> Rp. {product.price.toLocaleString()} </h4>
                            <hr />
                            <p className="text-muted"> {product.description} </p>
                            <MDBBtn color="success">
                                <FontAwesome
                                    className='text-center'
                                    name='shopping-cart'
                                    size='2x'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                                <span className="ml-4 font-weight-bold" style={{ fontSize: '1.3em' }} > Add to cart </span>
                            </MDBBtn>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

                <h4 className="p-4">You might also interested in </h4>
                <MDBCardGroup>
                    <MDBRow>
                        {samePromoCode.map(item =>
                            <MDBCol md="4" style={{ marginBottom: '2em' }}>
                                <Link to={`/detail/${item.product_name.replace(/ /g, '_')}`} key={item._id} style={{ color: 'black' }} onClick={() => { window.scrollTo(0, 0); }}>
                                    <ProductCard id={item._id}
                                        name={item.product_name}
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

            </MDBContainer>
            <Footer />
        </>
    );
};

export default ItemDetailPage;