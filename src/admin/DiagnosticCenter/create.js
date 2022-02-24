import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
  let history = useHistory();
  const [name, setname] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [address, setaddress] = useState('');
  const [contactEmail, setconactEmail] = useState('');

  const sendDataToAPI = () => {
    axios.post(`http://localhost:8090/DiagnosticCenter/addDiagnosticCenter`, {
     name ,
     contactNo ,
      address,
      contactEmail
    }).then(() => {
      history.push('/user/view/diagnosticcenter')
    })
  }
  const nextPage=()=>{
      history.push('/user/view/diagnosticcenter')
  }
  return (
    <div>
      <Form className='bg-white'>
        <Form.Field>
          <label>name</label>
          <input name="name" 
          onChange={(e) => setname(e.target.value)} 
          placeholder=' Name' />
        </Form.Field>
        <Form.Field>
          <label>contactNo</label>
          <input 
          name="contactNo" 
          placeholder='contactNo' 
          onChange={(e) => setcontactNo(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label>address</label>
          <input 
          name="address" 
          placeholder='address' 
          onChange={(e) => setaddress(e.target.value)} 
          />
        </Form.Field>

        <Form.Field>
          <label>ContactEmail</label>
          <input 
          name="contactEmail" 
          placeholder='contactEmail' 
          onChange={(e) => setconactEmail(e.target.value)} 
          />
        </Form.Field>


        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
        <Button type='submit' onClick={nextPage}>View Diagnostic center informaion</Button>
      </Form>
    </div>
  )
}
