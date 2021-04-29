import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const AddStudents = (props) => {
    const [nIMField, setNIMField] = useState("")
    const [nameField, setNameField] = useState("")
    const [addressField, setAddressField] = useState("")
    const [phoneField, setPhoneField] = useState("")
    const [yearField, setYearField] = useState("")
    const [statusField, setStatusField] = useState("")

    const handleNIMOnChange = (e) => {
        e.preventDefault()
        setNIMField(e.target.value)
    }
    const handleNameOnChange = (e) => {
        e.preventDefault()
        setNameField(e.target.value)
    }
    const handleAddressOnChange = (e) => {
        e.preventDefault()
        setAddressField(e.target.value)
    }
    const handlePhoneOnChange = (e) => {
        e.preventDefault()
        setPhoneField(e.target.value)
    }
    const handleYearOnChange = (e) => {
        e.preventDefault()
        setYearField(e.target.value)
    }
    const handleStatusOnChange = (e) => {
        e.preventDefault()
        setStatusField(e.target.value)
    }

    return (

        <>
            <Row style={{ marginTop: "2em" }}>
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" >NIM</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleNIMOnChange} />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" >Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleNameOnChange} />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" >Address</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleAddressOnChange} />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" >Phone</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handlePhoneOnChange} />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" >Year</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleYearOnChange} />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" >Status</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleStatusOnChange} />
                    </InputGroup>
                </Col>
            </Row>

            <Button onClick={() => {
                let newStudent = {

                    NIM: parseInt(nIMField),
                    name: nameField,
                    address: addressField,
                    phone: phoneField,
                    year: yearField,
                    status: statusField
                }
                console.log(newStudent)
                props.handleSaveButton(newStudent)

            }} children={"Add Student"} />

        </>
    );
};


export default AddStudents;