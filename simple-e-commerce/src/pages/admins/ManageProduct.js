import { MDBBtn, MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import AddProductContent from '../../components/admins/AddProductContent';
import EditProductContent from '../../components/admins/EditProductContent';
import Sidebar from '../../components/admins/Sidebar';
import Modals from '../../components/Modals';
import { myFirebase } from '../../firebase';
import { readDataFirebase, deleteDataFirebase } from '../../firebase/services';
import { AddProductFormik } from './formik/AddProductFormik';

const ManageProduct = props => {
    const [dataProducts, setDataProducts] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [singleProductForEdit, setSingleProductForEdit] = useState({});
    const [customHandler, setCustomHandler] = useState();

    // Modal States
    const [titleModals, setTitleModals] = useState("");
    const [contentModals, setContentModals] = useState("");
    const [displayAlert, setDisplayAlert] = useState(false);
    const [isError, setIsError] = useState(false);
    const [formikObj, setFormikObj] = useState();

    const addProductFormik = AddProductFormik("add", dataProducts, setDataProducts, setIsModalVisible)
    // const editProductFormik = AddProductFormik("edit", setDisplayAlert, setIsError)

    useEffect(() => {
        console.log(addProductFormik.values)
    }, [addProductFormik.values]);

    useEffect(() => {
        document.title = "Admin | Manage Product"
        setIsDataLoaded(false)
        let ref = myFirebase.database().ref(`products`)
        readDataFirebase(ref).then(response => {
            setDataProducts(response)
            setIsDataLoaded(true)
        })
    }, []);

    useEffect(() => {
        console.log(dataProducts)
        addProductFormik.setFieldValue("id", dataProducts.length)
    }, [dataProducts]);

    /*  useEffect(() => {
         let ref = myFirebase.database().ref(`products/${props.id}`)
         readDataFirebase(ref).then(response => {
             if (response !== null) {
                 editProductFormik.setFieldValue("name", response?.name)
                 editProductFormik.setFieldValue("amount", response?.amount)
                 editProductFormik.setFieldValue("description", response?.description)
                 editProductFormik.setFieldValue("image", response?.image)
                 editProductFormik.setFieldValue("price", response?.price)
                 setSingleProductForEdit(response)
             }
         })
     }, [singleProductForEdit]); */

    const removeProduct = (obj) => {
        deleteDataFirebase(`products/${obj.id}`, null)
            .then(() => {
                setDataProducts(() => dataProducts.filter(item => item.id !== obj.id))
                setIsModalVisible(false)
            })
    }

    return (
        <div className="d-sm-flex d-lg-block-flex">
            <Sidebar />
            <MDBContainer style={window.screen.width > 800 ? { marginLeft: '20em' } : {}}>
                {isModalVisible ?
                    <Modals title={titleModals}
                        content={contentModals}
                        isModalVisible={isModalVisible}
                        submitHandler={formikObj.handleSubmit || customHandler}
                        setIsModalVisible={() => setIsModalVisible()} />
                    : null}
                <div className="d-flex mt-4 mb-4 justify-content-between">
                    <h2 >Available Products</h2>
                    <MDBBtn color="indigo" onClick={() => {
                        setIsModalVisible(true)
                        setTitleModals("Add a new Product")
                        setFormikObj(addProductFormik)
                        setContentModals(<AddProductContent addProductFormik={addProductFormik} />)
                    }} >Add product </MDBBtn>
                </div>
                <MDBRow className="mb-4">
                    <MDBCol md="2">Image</MDBCol>
                    <MDBCol md="4">Name</MDBCol>
                    <MDBCol md="2">Amount</MDBCol>
                    <MDBCol md="2">Price</MDBCol>
                </MDBRow>

                {isDataLoaded ?
                    dataProducts.map(item => (
                        <MDBCard className="p-2 mb-4" key={item.id}>
                            <MDBRow>
                                <MDBCol sm="12" md="2">
                                    <Image src={item.image} width='100' fluid />
                                </MDBCol>
                                <MDBCol sm="12" md="4">
                                    <p className="ml-2 mt-4"> {item.name}</p>
                                </MDBCol>
                                <MDBCol sm="12" md="2">
                                    <p className="ml-2 mt-4"> {item.amount}</p>
                                </MDBCol>
                                <MDBCol sm="12" md="2">
                                    <p className="ml- mt-4"> {`Rp. ${item.price.toLocaleString('id', 'ID')}`}</p>
                                </MDBCol>
                                <MDBCol>
                                    <MDBBtn type="button" color="danger" onClick={() => {
                                        setIsModalVisible(true)
                                        setCustomHandler(() => removeProduct(item))
                                        // setSingleUser(user)
                                    }}> x </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    ))
                    : "Loading..."}
                <p className="text-right"> There is <b style={{
                    textDecoration: 'underline'
                }}> {dataProducts?.length} Products </b> on database</p>
            </MDBContainer>
        </div>
    );
};

export default ManageProduct;
