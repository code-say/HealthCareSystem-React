import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8090/DiagnosticCenter/getDiagnosticCenters`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (diagnosticCenterid, name, contactNo,address,contactEmail) => {
        localStorage.setItem('diagnosticCenterid', diagnosticCenterid)
        localStorage.setItem('name', name)
        localStorage.setItem('contactNo', contactNo)
        localStorage.setItem('address',address)
        localStorage.setItem('contactEmail',contactEmail)
    }

    const getData = () => {
        axios.get(`http://localhost:8090/DiagnosticCenter/getDiagnosticCenters`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8090/DiagnosticCenter/removeDiagnosticCenter/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className='bg-white'>
            <h1>Diagnostic Information</h1>
            <Table celled>
                
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Diagnostic ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>contact No</Table.HeaderCell>
                        <Table.HeaderCell>address</Table.HeaderCell>
                        <Table.HeaderCell>contact Email</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.diagnosticCenterid}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.contactNo}</Table.Cell>
                                <Table.Cell>{data.address}</Table.Cell>
                                <Table.Cell>{data.contactEmail}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/user/update/diagnosticcenter'>
                                        <Button
                                            className='bg-success text-white'
                                            onClick={() => setData(data.diagnosticCenterid, data.name, data.contactNo,data.address,data.contactEmail)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className='bg-danger text-white' 
                                    onClick={() => onDelete(data.diagnosticCenterid)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
