import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [testName, setTestName] = useState('');
    const [testPrice, setTestPrice] = useState('');
    const [normalValue, setNormalValue] = useState('');
    const [units, setunits] = useState('');
    const [diagnosticTestid, setdiagnosticTestid] = useState(null);

    useEffect(() => {
        setTestName(localStorage.getItem('testName'));
        setTestPrice(localStorage.getItem('testPrice'));
        setNormalValue(localStorage.getItem('normalValue'));
        setunits(localStorage.getItem('units'));
        setdiagnosticTestid(localStorage.getItem('diagnosticTestid'))
    }, [])

    const sendDataToAPI = user => {
       axios.put(`http://localhost:8090/DiagnosticTest/updateTestDetail/${diagnosticTestid}`, { 
            testName,
            testPrice,
            normalValue,
            units,
            diagnosticTestid
        }).then(() => {
            
        })
        history.push('/user/view/diagnostictest')
    }

    const nextPage=()=>{
        history.push('/user/view/testresult')
    }

    return (
        <div className='form-group row flex-v-center'>
            <Form className=' text-white bg-#2ecc72 text-center justify-content-xl-center pt-5'>
                <h2>Edit Diagnostic Test</h2>
                <div className='form-group col-xs-1'>
                    <label>Test Name</label>
                    <input name="testName"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        placeholder='Test Name' />
                </div>
                <div className='form-group col-xs-1'>
                    <label>Test Price</label>
                    <input name="testPrice"
                        value={testPrice}
                        onChange={(e) => setTestPrice(e.target.value)}
                        placeholder='Test Price' />
                </div>
                <div className='form-group col-xs-1'>
                    <label>Normal Value</label>
                    <input
                        name="normalValue"
                        value={normalValue}
                        placeholder='Normal Value'
                        onChange={(e) => setNormalValue(e.target.value)}
                    />
                </div>
                <div className='form-group col-xs-1'>
                    <label>Test Units</label>
                    <input name="units"
                        value={units}
                        onChange={(e) => setunits(e.target.value)}
                        placeholder='Test Units' />
                </div>
                <Button className='bg-success' type='submit' onClick={sendDataToAPI}>Update</Button>
                <Button className='bg-info' type='submit' onClick={nextPage}>View DiagnosticTest</Button>
            </Form>
        </div>
    )
}
