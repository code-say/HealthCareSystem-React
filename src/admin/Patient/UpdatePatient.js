import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [patientId, setPatientId] = useState('');
    const [name, setname] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [age, setage] = useState('');
    const [gender, setgender] = useState('');
    const [appointments, setAppointments] = useState('');
    const [userId,setUserId] = useState('');

    useEffect(() => {
        setPatientId(localStorage.getItem('patientId'));
        setname(localStorage.getItem('name'));
        setphoneNo(localStorage.getItem('phoneNo'));
        setage(localStorage.getItem('age'))
        setgender(localStorage.getItem('gender'))
        setAppointments(localStorage.getItem('appointments'))
        setUserId(localStorage.getItem('userId'))
    }, [])

    const sendDataToAPI = () => {
       axios.put(`http://localhost:8090/patient/updatepatient/${userId}`, {
        patientId,
        name,
        phoneNo,
        age,
        gender,
        appointments,
        userId
        }).then(() => {
            
        })
        history.push("/user/view/patient")
    };

    const nextPage=()=>{
        history.push('/user/view/patient')
    }

    

    return (
        <div className='container'>
        <form className=' text-white bg-#2ecc72 text-center justify-content-xl-center pt-5'>
            <h2>Edit Patient Info</h2>
            <div className='form-group'>
                    <label>Patient Id</label>
                    <input
                        name="testCondition"
                        value={patientId}
                        placeholder='Last Name'
                        onChange={(e) => setPatientId(e.target.value)}
                    />
                    </div>
            <div className='form-group'>
                    <label>PatientName</label>
                    <input name="testName"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder='Patient Name' />
                </div>
                <div className='form-group'>
                    <label>Patient Phoneno</label>
                    <input name="testReading"
                        value={phoneNo}
                        onChange={(e) => setphoneNo(e.target.value)}
                        placeholder='phoneno' />
                </div>
                <div className='form-group'>
                    <label>Patient Age</label>
                    <input
                        name="testCondition"
                        value={age}
                        placeholder='age'
                        onChange={(e) => setage(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Patient Gender</label>
                    <input
                        name="testCondition"
                        value={gender}
                        placeholder='gender'
                        onChange={(e) => setgender(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Patient Appointment</label>
                    <input
                        name="testCondition"
                        value={appointments}
                        placeholder='appointment'
                        onChange={(e) => setAppointments(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Patient userID</label>
                    <input
                        name="testCondition"
                        value={userId}
                        placeholder='userId'
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <Button className='bg-success' type='submit' onClick={sendDataToAPI}>Update</Button>
                <Button className='bg-info' type='submit' onClick={nextPage}>View All Patient Results</Button>
        </form>
        </div>
    )
}
