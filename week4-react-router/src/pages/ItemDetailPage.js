import React from 'react';
import { sampleProducts } from "../components/ProductList";
import { useParams } from "react-router-dom";

const ItemDetailPage = () => {
    let { id } = useParams();
    let product = sampleProducts.find(item => item._id === parseInt(id))
    return (
        <div>
            {product.product_name}
        </div>
    );
};

export default ItemDetailPage;