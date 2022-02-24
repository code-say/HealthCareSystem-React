import React, { useEffect, useState } from 'react';
import { Form, Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
  let history = useHistory();
  const [patientId, setPatientId] = useState('');
  const [name, setname] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [age, setage] = useState('');
  const [gender, setgender] = useState('');
  // const [appointments, setAppointments] = useState('');
  const [userId,setUserId] = useState('');

  const sendDataToAPI = () => {
    axios.post(`http://localhost:8090/patient/registerpatient/${userId}`, {
        patientId,
        name,
        phoneNo,
        age,
        gender,
        // appointments,
        userId
    }).then(() => {
      history.push('/user/view/patient')
    })
  }
  const nextPage=()=>{
      history.push('/user/view/patient')
  }
  return (
      <Form>
        <div className="form-group row">
          <label className='text-white'>Patient Name</label>
          <input 
          className="form-control"
          name="testName" 
          onChange={(e) => setname(e.target.value)} 
          placeholder='Patient Name' />
        <div className="form-group row">
          <label className='text-white'>Phone No</label>
          <input 
          className="form-control"
          name="testReading" 
          placeholder='PhoneNo' 
          onChange={(e) => setphoneNo(e.target.value)} 
          />
        </div>
        <div className="form-group row">
          <label className='text-white'>Patient Age</label>
          <input
          className="form-control" 
          name="testcondition" 
          placeholder='Age' 
          onChange={(e) => setage(e.target.value)} 
          />
        </div>
        <div className="form-group row">
          <label className='text-white'>Patient Gender</label>
          <input
          className="form-control" 
          name="testcondition" 
          placeholder='Gender' 
          onChange={(e) => setgender(e.target.value)} 
          />
        </div>
        {/* <div className="form-group row">
          <label className='text-white'>Patient Appointment</label>
          <input
          className="form-control" 
          name="testcondition" 
          placeholder='Test Condition' 
          onChange={(e) => setAppointments(e.target.value)} 
          />
        </div> */}
        
        <div className="form-group row">
          <label className='text-white'>Patient UserId</label>
          <input
          className="form-control" 
          name="testcondition" 
          placeholder='userId' 
          onChange={(e) => setUserId(e.target.value)} 
          />
        </div>
        </div>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
        <Button type='submit' onClick={nextPage}>View All Test Results</Button>
      </Form>
  )
}
