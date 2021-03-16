import { MDBCardGroup, MDBCol, MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import ProductList, { sampleProducts } from "../components/ProductList";


const PromoList = () => {
    const getUnique = array => {
        let uniqueArray = [];

        // Loop through array values
        for (let value of array) {
            if (uniqueArray.indexOf(value) === -1) {
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }

    const availablePromo = sampleProducts.map((item) => item.promo)
    const promos = getUnique(availablePromo)

    const [selectedPromo, setSelectedPromo] = useState("")
    const [filteredProduct, setFilteredProduct] = useState()

    const handleOnClickPromo = e => setSelectedPromo(e.target.value)

    useEffect(() => {
        setFilteredProduct(() => sampleProducts.filter(item => item.promo === selectedPromo))
        console.log(`Displaying product for promo ${selectedPromo}`)
    }, [selectedPromo])
    return (
        <>
            <MDBCardGroup style={{ padding: '1em' }}>
                <MDBRow>
                    {promos.map(promo =>
                        <MDBCol md="4" style={{ marginBottom: '2em' }}>
                            <label>
                                {promo}
                                <input type="radio" name="promo" value={promo} onChange={handleOnClickPromo} />
                                <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" width={300} alt={promo} />
                            </label>
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBCardGroup>


            <ProductList data={filteredProduct === undefined ? sampleProducts : filteredProduct} promoName={selectedPromo} />
        </>
    );
};
export default PromoList;