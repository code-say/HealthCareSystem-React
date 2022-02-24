import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8090/DiagnosticTest/getAllTests`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (diagnosticTestid, testName, testPrice,normalValue,units) => {
        localStorage.setItem('diagnosticTestid', diagnosticTestid)
        localStorage.setItem('testName', testName)
        localStorage.setItem('testPrice', testPrice)
        localStorage.setItem('normalValue',normalValue)
        localStorage.setItem('units',units)
    }

    const getData = () => {
        axios.get(`http://localhost:8090/DiagnosticTest/getAllTests`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8090/DiagnosticTest/removeTest/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className='bg-white'>
            <h1>Diagnostic Test</h1>
            <Table celled>
                
                <Table.Header>
                    <Table.Row>
                        
                        <Table.HeaderCell>Diagnostic Test Name</Table.HeaderCell>
                        <Table.HeaderCell>Diagnostic Test Price</Table.HeaderCell>
                        <Table.HeaderCell>Test Normal Value</Table.HeaderCell>
                        <Table.HeaderCell>Test Units</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                               
                                <Table.Cell>{data.testName}</Table.Cell>
                                <Table.Cell>{data.testPrice}</Table.Cell>
                                <Table.Cell>{data.normalValue}</Table.Cell>
                                <Table.Cell>{data.units}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/user/update/diagnostictest'>
                                        <Button
                                            className='bg-success text-white'
                                            onClick={() => setData(data.diagnosticTestid, data.testName, data.testPrice,data.normalValue,data.units)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className='bg-danger text-white' 
                                    onClick={() => onDelete(data.diagnosticTestid)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
