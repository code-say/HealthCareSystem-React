import React, { useEffect, useState } from 'react';
import { Table, Button} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Menu from "../../core/Menu";

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8090/patient/getAll`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (patientId, name, phoneNo,age,gender,userId) => {
        localStorage.setItem('patientId', patientId)
        localStorage.setItem('name', name)
        localStorage.setItem('phoneNo', phoneNo)
        localStorage.setItem('age',age)
        localStorage.setItem('gender',gender)
        localStorage.setItem('userId',userId)
        // localStorage.setItem('userId',appoinments)
    }

    const getData = () => {
        axios.get(`http://localhost:8090/patient/getAll`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = () => {
        axios.delete(`http://localhost:8090/patient/deletePatient`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className='bg-light'>
            <Menu />
            <h1>Patient Details</h1>
            <Table celled>
                
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Patient ID</Table.HeaderCell>
                        <Table.HeaderCell>Patient Name</Table.HeaderCell>
                        <Table.HeaderCell>Patient PhoneNo</Table.HeaderCell>
                        <Table.HeaderCell>Patient Age</Table.HeaderCell>
                        <Table.HeaderCell>Patient Gender</Table.HeaderCell>
                        {/* <Table.HeaderCell>Patient UserId</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.patientId}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.phoneNo}</Table.Cell>
                                <Table.Cell>{data.age}</Table.Cell>
                                <Table.Cell>{data.gender}</Table.Cell>
                                <Table.Cell>{data.userId}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/user/update/patient'>
                                        <Button
                                            className='bg-success text-white'
                                            onClick={() => setData(data.patientId, data.name, data.phoneNo,data.age,data.gender,data.appoinments)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className='bg-danger text-white' onClick={() => onDelete(data.patientId)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
