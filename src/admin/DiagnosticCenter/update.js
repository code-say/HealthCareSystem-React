import React, { useState, useEffect } from 'react';
import { Form, Button, Menu } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Update() {
   
    let history = useHistory();
   const [name, setname ] = useState('');
  const [ contactNo , setcontactNo ] = useState('');
  const [address, setaddress ] = useState('');
  const [contactEmail, setconactEmail ] = useState('');
 const [diagnosticCenterid, setdiagnosticCenterid ] = useState('');

    useEffect(() => {
        setname (localStorage.getItem('name'));
        setcontactNo(localStorage.getItem('contactNo'));
        setaddress(localStorage.getItem('address'));
        setconactEmail(localStorage.getItem('contactEmail'));
      setdiagnosticCenterid (localStorage.getItem('diagnosticCenterid')) 
    }, [])

    const sendDataToAPI = () => {
        axios.put(`http://localhost:8090/DiagnosticCenter/updateDiagnosticcenter/${diagnosticCenterid}`, {
            
            
            name,
            contactNo,
            address,
            diagnosticCenterid,
            contactEmail,
            
         
    })
    .then(() => {
       
    })
    history.push('/user/view/diagnosticcenter')
    };

    const nextPage=()=>{
        history.push('/user/view/diagnosticcenter')
    }

    return (
        <div className='bg-white'>
            <Form>
                <h2>Update Diagnostic Center</h2>
                <Form.Field>
                    <label>Center Id</label>
                    <input
                        name="diagnosticCenterid"
                        value={diagnosticCenterid}
                        placeholder='Enter your Email id'
                        onChange={(e) =>setdiagnosticCenterid (e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label> Name</label>
                    <input name="name" value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder='Enter Name' />
                </Form.Field>
                <Form.Field>
                    <label>Contact No</label>
                    <input name="contactNo"
                        value={contactNo}
                        onChange={(e) => setcontactNo(e.target.value)}
                        placeholder='Enter Phone Number' />
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input
                        name="address"
                        value={address}
                        placeholder='Address'
                        onChange={(e) => setaddress(e.target.value)}
                    />
                </Form.Field>
	            <Form.Field>
                    <label>Email</label>
                    <input
                        name="contactEmail"
                        value={contactEmail}
                        placeholder='Enter your Email id'
                        onChange={(e) =>setconactEmail (e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
                <Button type='submit' onClick={nextPage}>View Diagnostic center informaion</Button>
            </Form>
        </div>
    )
}