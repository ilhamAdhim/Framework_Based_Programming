import { MDBInput, MDBInputGroup, MDBSelect } from 'mdbreact';
import React, { useEffect, useState } from 'react';

const AddProductContent = props => {
    return (
        <form onSubmit={props.addProductFormik.handleSubmit}>
            <MDBInput name="name" iconBrand label="Product Name" onChange={props.addProductFormik.handleChange} />
            <MDBInput name="amount" iconBrand label="Amount"
                onChange={props.addProductFormik.handleChange} />
            <MDBInput name="description" iconBrand label="Description" onChange={props.addProductFormik.handleChange} />
            <MDBInput name="image" iconBrand label="Image link" onChange={props.addProductFormik.handleChange} />
            <MDBInput name="price" iconBrand label="Price"
                onChange={props.addProductFormik.handleChange} />

            <div className="mt-2 mb-2">Promo</div>
            <select name="promo" className="browser-default custom-select" onChange={props.addProductFormik.handleChange} >
                <option>Choose your option</option>
                <option value="gebyarMaret">gebyarMaret</option>
                <option value="flashSale">flashSale</option>
                <option value="monthSale">monthSale</option>
            </select>
        </form>
    );
};

export default AddProductContent;
