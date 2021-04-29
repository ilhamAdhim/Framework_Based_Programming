import { Button } from 'react-bootstrap';
import React from 'react';

const Students = props => {
    return (
        <>
            <tr>
                <td>{props.NIM}</td>
                <td>{props.name}</td>
                <td>{props.address}</td>
                <td>{props.phone}</td>
                <td>{props.year}</td>
                <td>{props.status}</td>
                <td>
                    {<Button variant="danger" children={"Delete"} onClick={() => props.handleDeleteStudent(props.id)} />}
                </td>
            </tr>
        </>
    );
};

export default Students;