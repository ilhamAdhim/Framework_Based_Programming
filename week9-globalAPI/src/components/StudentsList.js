import React from 'react';
import Students from './Students';
import { Container, Table } from 'react-bootstrap';

const StudentsList = props => {
    return (
        <>
            <h2>Students List</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Year</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(item =>
                        <Students {...item} handleDeleteStudent={props.handleDeleteStudent} />
                    )}
                </tbody>
            </Table>
        </>
    );
};

export default StudentsList;