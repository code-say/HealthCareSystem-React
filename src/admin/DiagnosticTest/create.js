import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
  let history = useHistory();
  const [testName, setTestName] = useState('');
  const [testPrice, setTestPrice] = useState('');
  const [normalValue, setValue] = useState('');
  const [units, setUnits] = useState('');

  const sendDataToAPI = () => {
    axios.post(`http://localhost:8090/DiagnosticTest/addNewTest`, {
      testName,
      testPrice,
      normalValue,
      units
    }).then(() => {
      history.push('/user/view/diagnostictest')
    })
  }
  const nextPage=()=>{
      history.push('/user/view/diagnostictest')
  }
  return (
    <div className='bg-white'>
      <Form autoComplete="off">
        <Form.Field>
          <label>Test Name</label>
          <input name="testName" 
          onChange={(e) => setTestName(e.target.value)} 
          placeholder='Test To Be Taken' />
        </Form.Field>
        <Form.Field>
          <label>Test Price</label>
          <input 
          name="testPrice" 
          placeholder='Confim Price' 
          onChange={(e) => setTestPrice(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label>Test Normal Value</label>
          <input 
          name="normalValue" 
          placeholder='Value' 
          onChange={(e) => setValue(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label>Test Units</label>
          <input 
          name="units" 
          placeholder='units' 
          onChange={(e) => setUnits(e.target.value)} 
          />
        </Form.Field>
        <Button className='bg-success text-white' type='submit' onClick={sendDataToAPI}>Submit</Button>
        <Button className='bg-info text-white' type='submit' onClick={nextPage}>View All Tests</Button>
      </Form>
    </div>
  )
}
