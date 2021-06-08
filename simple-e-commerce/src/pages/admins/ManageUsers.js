import { MDBBtn, MDBCard, MDBContainer } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Sidebar from '../../components/admins/Sidebar';
import { myFirebase } from '../../firebase';
import { readDataFirebase } from '../../firebase/services';

const ManageUsers = props => {
    const [users, setUsers] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        document.title = "Admin | Manage Users"

        setIsDataLoaded(false)
        let ref = myFirebase.database().ref(`users/user/`)
        readDataFirebase(ref).then(response => {
            let idUsers = Object.keys(response)
            let infoUsers = Object.values(response)
            setUsers(infoUsers.map((item, index) => {
                console.log({ id: idUsers[index], ...item })
                return { id: idUsers[index], ...item }
            }))
            setIsDataLoaded(true)
        })
    }, []);

    useEffect(() => {
        console.log(users)
    }, [users]);

    return (
        <div className="d-flex">
            <Sidebar />
            <MDBContainer className="mt-4 mb-4">
                <h2>
                    All users
                </h2>
                {isDataLoaded ?
                    users.map(user => (
                        <MDBCard className="p-2 mb-4">
                            <div className="d-flex justify-content-between">
                                <Image src='https://avatars.githubusercontent.com/u/43105014?v=4' width='60' roundedCircle />
                                <p className="ml-4 mt-4"> {user.displayName}</p>
                                <MDBBtn color="danger" onClick={() => console.log("removed")}> x </MDBBtn>
                            </div>
                        </MDBCard>
                    ))
                    : null}

            </MDBContainer>
        </div>
    );
};

export default ManageUsers;