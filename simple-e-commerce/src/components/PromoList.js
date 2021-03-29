import axios from 'axios';
import { MDBCardGroup, MDBCol, MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import ProductList from "../components/ProductList";


const PromoList = () => {
    const getUnique = array => {
        let uniqueArray = [];
        //  Loop through array values
        for (let value of array) {
            if (uniqueArray.indexOf(value) === -1) {
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }

    const [promos, setPromos] = useState(['gebyarMaret', 'flashSale', 'monthSale'])
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedPromo, setSelectedPromo] = useState("")
    const [filteredProduct, setFilteredProduct] = useState([])

    const handleOnClickPromo = e => setSelectedPromo(e.target.value)

    useEffect(async () => {
        setIsLoading(true)
        const { data } = await axios.get('http://localhost:3001/products')
        setProduct(data)

        setIsLoading(false)
    }, [])

    useEffect(() => {
        setFilteredProduct(product.filter(item => item.promo === selectedPromo))
        console.log(`Displaying product for promo ${selectedPromo}`)
        console.log(filteredProduct)
    }, [selectedPromo])

    return (
        !isLoading ?
            <>
                <MDBCardGroup style={{ padding: '1em' }}>
                    <MDBRow>
                        {promos.map(promo =>
                            <MDBCol md="4" style={{ marginBottom: '2em' }} key={promo} >
                                <label>
                                    {promo}
                                    <input type="radio" name="promo" value={promo} onChange={handleOnClickPromo} />
                                    <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" width={300} alt={promo} />
                                </label>
                            </MDBCol>
                        )}
                    </MDBRow>
                </MDBCardGroup>

                <ProductList data={filteredProduct} promoName={selectedPromo} />
            </>
            :
            <p> Loading... </p>

    );
};
export default PromoList;