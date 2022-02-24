import React, {useState} from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

import "../styles/Signup.css";


const Signup = () => {


    const [values, setValues] = useState({
        username: "",
        password:"",
        error: "",
        success: false
    });

    const {username, password, error, success} = values;


    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({username, password})
        .then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    username: "",
                    password: "",
                    error: "",
                    success: true
                });
            }
        })
        .catch(console.log("Error in signup"));
    }

    const signUpForm = () => {

        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                    <img className="mb-6 bootstrap-logo" 
                src="https://www.msf.gov.sg/policies/Disabilities-and-Special-Needs/Enabling-Masterplans/PublishingImages/Healthcare%20services.jpg" 
                alt="Bootstrap 5" />
                        <div className="form-group">
                            <label className="text-light">Username</label>
                            <input className="form-control" 
                            onChange={handleChange("username")} 
                            type="text" />
                        </div>
                        {/* <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control"
                             onChange={handleChange("email")} 
                             type="email" />
                        </div> */}
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control"
                            onChange={handleChange("password")}  
                            type="password" />
                        </div>
                        <button onClick={onSubmit} className="btn btn-primary btn-block">Sigup</button>
                    </form>
                </div>
            </div>
        );
    };

    const successMessage = () => {
        
        return(
        <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
        >
            New account was created succesfully. Please
            <Link to="/signin">Login here</Link>
        </div>
        );
    };

    const errorMessage = () => {
        
        return(
        <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
        );
    };


    return (
        <Base title="Sign up page" description="A page for user to sign up!">
        {/* <img className="mb-4 bootstrap-logo" 
        src="https://media.istockphoto.com/vectors/isometric-illustration-of-medical-workers-and-patients-hospitals-vector-id1158638767?k=20&m=1158638767&s=170667a&w=0&h=8ml0mOGVCQTUFaV9-9HOKbw4cBJ55SswvKCEqxhkOWQ=" 
        alt="Bootstrap 5" /> */}
        {/* <h1>Sign up works</h1> */}
        {successMessage()}
        {errorMessage()}
        {signUpForm()}
        <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );
};

export default Signup;