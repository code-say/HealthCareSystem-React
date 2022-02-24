import React, { useEffect, useState } from 'react';
import { Form, Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
// import '../semantic/dist/semantic.min.css';
import { Link } from 'react-router-dom';

export default function Create() {
  let history = useHistory();
  const [testName, setTestName] = useState('');
  const [testReading, setTestReading] = useState('');
  const [testcondition, setCondition] = useState('');

  const sendDataToAPI = () => {
    axios.post(`http://localhost:8090/testresult//addresult`, {
      testName,
      testReading,
      testcondition
    }).then(() => {
      history.push('/user/view/testresult')
    })
  }
  const nextPage=()=>{
      history.push('/user/view/testresult')
  }
  return (
      <Form>
        <div className="form-group row">
          <label className='text-white'>Test Name</label>
          <input 
          className="form-control"
          name="testName" 
          onChange={(e) => setTestName(e.target.value)} 
          placeholder='Test Name' />
        <div className="form-group row">
          <label className='text-white'>Test Reading</label>
          <input 
          className="form-control"
          name="testReading" 
          placeholder='testReading' 
          onChange={(e) => setTestReading(e.target.value)} 
          />
        </div>
        <div className="form-group row">
          <label className='text-white'>Test Condition</label>
          <input
          className="form-control" 
          name="testcondition" 
          placeholder='Test Condition' 
          onChange={(e) => setCondition(e.target.value)} 
          />
        </div>
        </div>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
        <Button type='submit' onClick={nextPage}>View All Test Results</Button>
      </Form>
  )
}
