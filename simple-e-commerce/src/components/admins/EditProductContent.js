// import { MDBInput } from 'mdbreact';
// import React, { useEffect, useState } from 'react';

// const EditProductContent = props => {
//     const [product, setProduct] = useState();
//     const [isDataLoaded, setIsDataLoaded] = useState(false);

//     return (

//         <form onSubmit={props.editProductFormik.handleSubmit} >
//             <MDBInput name="name" iconBrand label="Product Name"
//                 hint={props.editProductFormik.values.name}
//                 onChange={props.editProductFormik.handleChange} />
//             <MDBInput name="amount" iconBrand label="Amount"
//                 hint={props.editProductFormik.values.amount}
//                 onChange={props.editProductFormik.handleChange} />
//             <MDBInput name="description" iconBrand label="Description"
//                 hint={props.editProductFormik.values.description}
//                 onChange={props.editProductFormik.handleChange} />
//             <MDBInput name="image" iconBrand label="Image link"
//                 hint={props.editProductFormik.values.image}
//                 onChange={props.editProductFormik.handleChange} />
//             <MDBInput name="price" iconBrand label="Price"
//                 hint={props.editProductFormik.values.price}
//                 onChange={props.editProductFormik.handleChange} />
//             <div className="mt-2 mb-2">Promo</div>
//             <select name="promo" className="browser-default custom-select" onChange={props.editProductFormik.handleChange} >
//                 <option>Choose your option</option>
//                 <option value="gebyarMaret">gebyarMaret</option>
//                 <option value="flashSale">flashSale</option>
//                 <option value="monthSale">monthSale</option>
//             </select>
//         </form >
//     );
// };

// export default EditProductContent;