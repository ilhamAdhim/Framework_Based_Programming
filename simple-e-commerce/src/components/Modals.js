import React from 'react';
import PropTypes from 'prop-types';
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';

const Modals = ({ title, content, isModalVisible, setIsModalVisible, submitHandler, ...props }) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={isModalVisible} toggle={() => setIsModalVisible(false)}>
                <MDBModalHeader toggle={() => setIsModalVisible(false)}>{title}</MDBModalHeader>
                <MDBModalBody className="fw-bold">
                    {content}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="danger" onClick={() => setIsModalVisible(false)}>Cancel</MDBBtn>
                    <MDBBtn color="success" onClick={submitHandler}>Yes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
};


export default Modals;