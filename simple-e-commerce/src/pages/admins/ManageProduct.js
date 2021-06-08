import { MDBBtn, MDBContainer } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/admins/Sidebar';
import Modals from '../../components/Modals';
import { myFirebase } from '../../firebase';
import { readDataFirebase } from '../../firebase/services';

const ManageProduct = props => {
    const [dataProducts, setDataProducts] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        document.title = "Admin | Manage Product"

        setIsDataLoaded(false)
        let ref = myFirebase.database().ref(`products`)
        readDataFirebase(ref).then(response => {
            setDataProducts(response)
            setIsDataLoaded(true)
        })
    }, []);

    return (
        <div className="d-flex">
            <Sidebar />
            <MDBContainer>
                {isModalVisible ?
                    <Modals title="Add Product" content="Hehe world"
                        submitHandler={() => console.log("hehe")}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={() => setIsModalVisible()} />
                    : null}
                <div className="d-flex mt-4 mb-4  justify-content-between">
                    <h2 >Available Products</h2>
                    <MDBBtn color="indigo" onClick={() => setIsModalVisible(true)} >Add product </MDBBtn>
                </div>
                {isDataLoaded ?
                    dataProducts.map(item => (
                        <>
                            {item.name}
                            <br />
                        </>
                    ))
                    : "Loading..."}
            </MDBContainer>
        </div>
    );
};

export default ManageProduct;
