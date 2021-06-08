import React from 'react';
import PropTypes from 'prop-types';
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';

const Modals = ({ title, content, isModalVisible, setIsModalVisible, submitHandler, ...props }) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={isModalVisible} toggle={() => setIsModalVisible(false)}>
                <MDBModalHeader toggle={() => setIsModalVisible(false)}>{title}</MDBModalHeader>
                <MDBModalBody>
                    {content}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => setIsModalVisible(false)}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={submitHandler}>Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
};


export default Modals;