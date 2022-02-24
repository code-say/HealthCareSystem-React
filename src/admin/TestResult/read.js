import React, { useEffect, useState } from 'react';
import { Table, Button} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Menu from "../../core/Menu";

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8090/testresult/getAllTestResults`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (testResultid, testName, testReading,testcondition) => {
        localStorage.setItem('testResultid', testResultid)
        localStorage.setItem('testName', testName)
        localStorage.setItem('testReading', testReading)
        localStorage.setItem('testcondition',testcondition)
    }

    const getData = () => {
        axios.get(`http://localhost:8090/testresult/getAllTestResults`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8090/testresult/removeresult/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className='bg-light'>
            <Menu />
            <h1>Test Results</h1>
            <Table celled>
                
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Test Result ID</Table.HeaderCell>
                        <Table.HeaderCell>Test Name</Table.HeaderCell>
                        <Table.HeaderCell>Test Reading</Table.HeaderCell>
                        <Table.HeaderCell>Test Condition</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.testResultid}</Table.Cell>
                                <Table.Cell>{data.testName}</Table.Cell>
                                <Table.Cell>{data.testReading}</Table.Cell>
                                <Table.Cell>{data.testcondition}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/user/update/testresult'>
                                        <Button
                                            className='bg-success text-white'
                                            onClick={() => setData(data.testResultid, data.testName, data.testReading,data.testcondition)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className='bg-danger text-white' onClick={() => onDelete(data.testResultid)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
