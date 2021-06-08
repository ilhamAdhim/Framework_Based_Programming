import { MDBBtn, MDBCard, MDBContainer } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Sidebar from '../../components/admins/Sidebar';
import Modals from '../../components/Modals';
import { myFirebase } from '../../firebase';
import { deleteDataFirebase, readDataFirebase } from '../../firebase/services';

const ManageUsers = props => {
    // ! Untested
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        document.title = "Admin | Manage Users"

        setIsDataLoaded(false)
        let ref = myFirebase.database().ref(`users/user/`)
        readDataFirebase(ref).then(response => {
            if (response !== null) {
                let idUsers = Object.keys(response)
                let infoUsers = Object.values(response)
                setUsers(infoUsers.map((item, index) => {
                    console.log({ id: idUsers[index], ...item })
                    return { id: idUsers[index], ...item }
                }))
                setIsDataLoaded(true)
            }

        })
    }, []);

    const removeUser = (user) => {
        deleteDataFirebase(`users/user/${user.uid}`, null)
            .then(() => {
                setUsers(() => users.filter(item => item.uid !== user.uid))
                setIsModalVisible(false)
            })
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <MDBContainer className="mt-4 mb-4"
                style={window.screen.width > 800 ? { marginLeft: '20em' } : {}}>

                {isModalVisible ?
                    <Modals title={`Delete User : ${singleUser.name}`} content="Are you sure to delete this user ?"
                        // submitHandler={() => console.log("hehe")}
                        submitHandler={() => removeUser(singleUser)}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={() => setIsModalVisible()} />
                    : null}

                <h2>All users</h2>

                {isDataLoaded ?
                    users?.map(user => (
                        <MDBCard className="p-2 mb-4">
                            <div className="d-flex justify-content-between">
                                <Image src="https://avatars.githubusercontent.com/u/43105014?v=4" width='60' roundedCircle />
                                <p className="ml-4 mt-4"> {user.name}</p>
                                <MDBBtn color="danger" onClick={() => {
                                    setIsModalVisible(true)
                                    setSingleUser(user)
                                }}> x </MDBBtn>
                            </div>
                        </MDBCard>
                    ))
                    : null}

                {users.length === 0 ?
                    <p className="fw-bold mt-4">No users registered in the database</p>
                    : null}

            </MDBContainer>
        </div>
    );
};

export default ManageUsers;