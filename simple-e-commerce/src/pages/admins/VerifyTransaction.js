import { MDBBtn, MDBCard, MDBContainer } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Sidebar from '../../components/admins/Sidebar';
import { myFirebase } from '../../firebase';
import { readDataFirebase, updateDataFirebase } from '../../firebase/services';

const VerifyTransaction = props => {
    const [dataTransaction, setDataTransaction] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        document.title = "Admin | Verify Transaction"
        setIsDataLoaded(false)
        let ref = myFirebase.database().ref(`users/user/`)
        readDataFirebase(ref).then(response => {
            let idUsers = Object.keys(response)
            let infoUsers = Object.values(response)
            let fixedUsers = infoUsers.map((item, index) => {
                return { id: idUsers[index], ...item }
            })
            // ? Get only user's transactionStatus that are false
            setDataTransaction(fixedUsers.filter(item => item.transactionStatus === false))
            setIsDataLoaded(true)
        })
    }, []);

    const approveTransaction = (uid) => {
        updateDataFirebase(`users/user/${uid}/transactionStatus`, true)
            .then(() => setDataTransaction(() => {
                dataTransaction.shift()
                if (dataTransaction.length === 0) window.location.reload(false)
            }))
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <MDBContainer className="mt-4 mb-4"
                style={window.screen.width > 800 ? { marginLeft: '20em' } : {}}>
                <h2 className="mb-4">
                    New Transactions
                </h2>
                {isDataLoaded && dataTransaction.length !== 0 ?
                    dataTransaction.map(user => (
                        <MDBCard className="p-2 mb-4">
                            <div className="d-flex justify-content-between">
                                <Image src='https://avatars.githubusercontent.com/u/43105014?v=4' width='60' roundedCircle />
                                <p className="ml-2 mt-4"> {user.displayName}</p>
                                <p className="ml-2 mt-4"> {user.uid}</p>
                                <MDBBtn color="success" className="fw-bold"
                                    onClick={() => approveTransaction(user.uid)}> ✓ </MDBBtn>
                            </div>
                        </MDBCard>
                    ))
                    : null}
                {dataTransaction.length === 0 &&
                    <p className="fw-bold mt-4">
                        No pending transaction needs to be approved
                        </p>
                }
            </MDBContainer>
        </div>
    );
};

export default VerifyTransaction;