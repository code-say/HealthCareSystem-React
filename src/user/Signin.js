import React, {useState} from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";

import {signin, authenticate, isAuthenticated} from "../auth/helper"

import "../styles/signin.css";

const Signin = () => {


    const [values, setValues] = useState({
        username: "sayan",
        password: "mandal",
        error: "",
        loading: false,
        didRedirect: false,
    });


    const {username, password, error, loading, didRedirect} = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading:true })
        signin({username, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading:false })
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        didRedirect: true
                    })
                })
            }
        })
        .catch(console.log("signin request failed"));
    }


    const performRedirect = () => {
        if(didRedirect) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/" />;
        }
    }

    const loadingMessage = () => (

        loading && (
            <div className="alert alert-info">
                <h2>Loading....</h2>
            </div>
        )
    );
        
    

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



    const signInForm = () => {

        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                    <img className="mb-6 bootstrap-logo" 
                src="https://www.healthtechmagazines.com/wp-content/uploads/2020/04/Fast-Following-Amazon-to-the-Patient-Centered-Healthcare-System.png" 
                alt="Bootstrap 5" />
                        <div className="form-group">
                            <label className="text-light">Username</label>
                            <input
                            onChange={handleChange("username")}
                            value={username} className="form-control" type="name" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input 
                            onChange={handleChange("password")}
                            value={password} className="form-control" type="password" />
                        </div>
                        <button 
                        onClick={onSubmit}
                        className="btn btn-primary btn-block">SigIn</button>
                    </form>
                </div>
            </div>
        );
    };



    return(
        <Base className="base__class" title="Sign in page" description="A page for user to sign in!">
        {/* <h1>Sign up works</h1> */}
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
        <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );
};

export default Signin;