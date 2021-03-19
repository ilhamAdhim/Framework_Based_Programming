import React from "react";
import { MDBBtn, MDBCard, MDBCardFooter, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const ProductCard = props => {
  return (
        <MDBCard data-aos="fade-left">
            <MDBCardImage className="img-fluid" src={props.image} waves top hover style={{height:'260px',}}/>
            <MDBCardBody>
                <MDBCardTitle>{props.name}</MDBCardTitle>
                <hr />
                {/* Only show first 70 char in description */}
                <MDBCardText>{props.description.replace(/^(.{70}[^\s]*).*/, "$1") + '...'}</MDBCardText>  
                <MDBRow>
                    <MDBCol md="6"> <p className="text-left" style={{fontSize: '.9em'}}  >{ `Promo : ${props.promo}` }</p> </MDBCol>
                    <MDBCol md="6"> <h5 className="text-right" >{ `Rp. ${props.price.toLocaleString()}`}</h5>   </MDBCol>
                </MDBRow>
                
                <MDBCardFooter>
                    <MDBRow> 
                        <MDBCol>
                            <MDBBtn color="primary">Beli</MDBBtn>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn color="success">Cart</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardFooter>
            </MDBCardBody>
        </MDBCard>
  );
};

export default ProductCard;
