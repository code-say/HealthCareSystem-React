import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [testName, setTestName] = useState('');
    const [testReading, setTestReading] = useState('');
    const [testcondition, setTestCondition] = useState('');
    const [testResultid, setTestResultid] = useState(null);

    useEffect(() => {
        setTestName(localStorage.getItem('testName'));
        setTestReading(localStorage.getItem('testReading'));
        setTestCondition(localStorage.getItem('testcondition'));
        setTestResultid(localStorage.getItem('testResultid'))
    }, [])

    const sendDataToAPI = () => {
       axios.put(`http://localhost:8090/testresult/updateresult/${testResultid}`, {
           testResultid, 
            testName,
            testReading,
            testcondition
        }).then(() => {
            
        })
        history.push("/user/view/testresult")
    };

    const nextPage=()=>{
        history.push('/user/view/testresult')
    }

    

    return (
        <div className='container'>
        <form className=' text-white bg-#2ecc72 text-center justify-content-xl-center pt-5'>
            <h2>Edit Test Result</h2>
            <div className='form-group'>
                    <label>TestResult Id</label>
                    <input
                        name="testCondition"
                        value={testResultid}
                        placeholder='Last Name'
                        onChange={(e) => setTestResultid(e.target.value)}
                    />
                    </div>
            <div className='form-group'>
                    <label>TestName</label>
                    <input name="testName"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        placeholder='Test Name' />
                </div>
                <div className='form-group'>
                    <label>Test Reading</label>
                    <input name="testReading"
                        value={testReading}
                        onChange={(e) => setTestReading(e.target.value)}
                        placeholder='Test Reading' />
                </div>
                <div className='form-group'>
                    <label>Test Condition</label>
                    <input
                        name="testCondition"
                        value={testcondition}
                        placeholder='Last Name'
                        onChange={(e) => setTestCondition(e.target.value)}
                    />
                </div>
                <Button className='bg-success' type='submit' onClick={sendDataToAPI}>Update</Button>
                <Button className='bg-info' type='submit' onClick={nextPage}>View All Test Results</Button>
        </form>
        </div>
    )
}
