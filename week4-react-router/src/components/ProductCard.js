import React from "react";
import { MDBBtn, MDBCard, MDBCardFooter, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const ProductCard = props => {
  return (
            <MDBCard>
                <MDBCardImage className="img-fluid" src={props.image} waves top hover style={{height:'260px'}}/>
                <MDBCardBody>
                <MDBCardTitle>{props.name}</MDBCardTitle>
                <hr />
                {/* Only show first 70 char in description */}
                <MDBCardText>{props.description.replace(/^(.{70}[^\s]*).*/, "$1") + '...'}</MDBCardText>  
                <h5 className="text-right" >{ 'Rp. ' + props.price}</h5>  

                <MDBCardFooter>
                    <MDBRow> 
                        <MDBCol>
                            <MDBBtn color="primary" href="#">Beli</MDBBtn>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn color="success" href="#">Cart</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardFooter>
                </MDBCardBody>
            </MDBCard>
  );
};

export default ProductCard;
